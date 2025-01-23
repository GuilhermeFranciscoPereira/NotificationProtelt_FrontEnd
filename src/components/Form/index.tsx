import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import * as z from 'zod';
import style from './Form.module.css';

const formSchema = z.object({
  placa: z.string().regex(/^[A-Za-z]{3}[0-9]{1}[A-Za-z]{1}[0-9]{2}$/, { message: 'Formato de placa inválido, deve ser: ABC1D23' }),
  dataEnvio: z.string().optional(),
  municipio: z.string().regex(/^[A-Za-zÀ-ÿ\s]+$/, { message: 'Digite apenas letras para o município' }),
  uf: z.string().length(2, { message: 'UF deve ter 2 caracteres' }).regex(/^[A-Za-z]{2}$/, { message: 'Digite uma UF válida (duas letras)' }),
  marcaModelo: z.string(),
  cor: z.string().regex(/^[A-Za-zÀ-ÿ\s]+$/, { message: 'Digite apenas letras' }),
  especieTipo: z.string().regex(/^[A-Za-zÀ-ÿ\s]+$/, { message: 'Digite apenas letras' }),
  localDaInfracao: z.string().regex(/^[A-Za-zÀ-ÿ\s]+$/, { message: 'Digite apenas letras' }),
  nomeCondutor: z.string().optional(),
  proprietario: z.string().optional(),
  quadraLote: z.string().optional(),
  naturezaDoVeiculo: z.string().optional(),
  grauDaInfracao: z.string().regex(/^[A-Za-zÀ-ÿ\s]+$/, { message: 'Digite apenas letras' }),
  medicaoRealizadaKMH: z.string(),
  dataHoraDaInfracao: z.string(),
  valor: z.string(),
  fotoInfracao: z.instanceof(File).refine((file) => file.size > 0, { message: 'A imagem da infração é obrigatória' }),
});

type FormData = z.infer<typeof formSchema>;

export default function Form() {
  const [file, setFile] = useState<File | null>(null);
  

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    const form = new FormData();
    Object.keys(data).forEach((key) => {
        const value = data[key as keyof FormData];
        if (value !== undefined) {
        form.append(key, value as string | Blob);
        }
    });
    if (file) {
      form.append('fotoInfracao', file);
    }
    try {
      const response = await fetch('http://localhost:7777/allInfringement', {
        method: 'POST',
        body: form,
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      alert(`Erro ao enviar o formulário, por favor, tente novamente! \nErro: ${error}`);
      console.log(`Erro ao enviar o formulário, por favor, tente novamente! \nErro: ${error}`);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setValue('fotoInfracao', selectedFile);
    }
  };

  return (
    <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <h2>CADASTRO DE INFRAÇÕES</h2>

      <div className={style.formGroup}>
        <label htmlFor="placa">Placa do veículo</label>
        <input id="placa" type="text" placeholder="ABC1D34" {...register('placa')} required minLength={7} maxLength={7}/>
        {errors.placa && <span>{errors.placa.message}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="dataEnvio">Data de Envio ( Não obrigatório )</label>
        <input id="dataEnvio" type="date" {...register('dataEnvio')} />
        {errors.dataEnvio && <span>{errors.dataEnvio.message}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="municipio">Município do veículo</label>
        <input id="municipio" type="text" placeholder="Município" {...register('municipio')} required/>
        {errors.municipio && <span>{errors.municipio.message}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="uf">UF do veículo</label>
        <input id="uf" type="text" placeholder="Exemplo: SP / RJ / MG" {...register('uf')} required minLength={2} maxLength={2}/>
        {errors.uf && <span>{errors.uf.message}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="marcaModelo">Marca / Modelo do veículo</label>
        <input id="marcaModelo" type="text" placeholder="Marca / Modelo" {...register('marcaModelo')} required minLength={1}/>
        {errors.marcaModelo && <span>{errors.marcaModelo.message}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="cor">Cor do veículo</label>
        <input id="cor" type="text" placeholder="Cor" {...register('cor')} required minLength={2}/>
        {errors.cor && <span>{errors.cor.message}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="especieTipo">Espécie / Tipo do veículo</label>
        <input id="especieTipo" type="text" placeholder="Espécie / Tipo" {...register('especieTipo')} required minLength={2}/>
        {errors.especieTipo && <span>{errors.especieTipo.message}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="localDaInfracao">Local da infração</label>
        <input id="localDaInfracao" type="text" placeholder="Local da infração" {...register('localDaInfracao')} required/>
        {errors.localDaInfracao && <span>{errors.localDaInfracao.message}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="nomeCondutor">Nome do condutor ( Não obrigatório )</label>
        <input id="nomeCondutor" type="text" placeholder="Nome do condutor" {...register('nomeCondutor')} />
        {errors.nomeCondutor && <span>{errors.nomeCondutor.message}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="proprietario">Proprietário responsável ( Não obrigatório )</label>
        <input id="proprietario" type="text" placeholder="Proprietário" {...register('proprietario')} />
        {errors.proprietario && <span>{errors.proprietario.message}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="quadraLote">Quadra e Lote ( Não obrigatório )</label>
        <input id="quadraLote" type="text" placeholder="Quadra e Lote" {...register('quadraLote')} />
        {errors.quadraLote && <span>{errors.quadraLote.message}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="naturezaDoVeiculo">Natureza do veículo ( Não obrigatório )</label>
        <input id="naturezaDoVeiculo" type="text" placeholder="Natureza do veículo" {...register('naturezaDoVeiculo')} />
        {errors.naturezaDoVeiculo && <span>{errors.naturezaDoVeiculo.message}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="grauDaInfracao">Grau da infração</label>
        <input id="grauDaInfracao" type="text" placeholder="Grau da infração" {...register('grauDaInfracao')} required/>
        {errors.grauDaInfracao && <span>{errors.grauDaInfracao.message}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="medicaoRealizadaKMH">Medição realizada (Km/h)</label>
        <input id="medicaoRealizadaKMH" type="text" {...register('medicaoRealizadaKMH')} required/>
        {errors.medicaoRealizadaKMH && <span>{errors.medicaoRealizadaKMH.message}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="dataHoraDaInfracao">Data / Hora da infração</label>
        <input id="dataHoraDaInfracao" type="datetime-local" {...register('dataHoraDaInfracao')} required/>
        {errors.dataHoraDaInfracao && <span>{errors.dataHoraDaInfracao.message}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="valor">Valor da multa</label>
        <input id="valor" type="text" placeholder="Valor" {...register('valor')} required/>
        {errors.valor && <span>{errors.valor.message}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="fotoInfracao">Foto da infração</label>
        <input
          type="file"
          id="fotoInfracao"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
        {errors.fotoInfracao && <span>{errors.fotoInfracao.message}</span>}
      </div>

      <button type="submit" className={style.submitBtn}>Enviar</button>
    </form>
  );
}
