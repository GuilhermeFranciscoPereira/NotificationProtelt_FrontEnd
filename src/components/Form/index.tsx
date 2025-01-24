import style from './Form.module.css';
import useFormHook from '@/hooks/useForm';

export default function FormComponent(): React.ReactNode {
  const {handleSubmit, onSubmit, register, errors, handleFileChange} = useFormHook();

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
        <input id="dataEnvio" type="date" {...register('dataEnvio')}/>
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
        <input id="naturezaDoVeiculo" type="text" placeholder="Natureza do veículo" {...register('naturezaDoVeiculo')}/>
        {errors.naturezaDoVeiculo && <span>{errors.naturezaDoVeiculo.message}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="medicaoRealizadaKMH">Medição realizada (Km/h)</label>
        <input id="medicaoRealizadaKMH" type="number" {...register('medicaoRealizadaKMH')} required/>
        {errors.medicaoRealizadaKMH && <span>{errors.medicaoRealizadaKMH.message}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="dataHoraDaInfracao">Data / Hora da infração</label>
        <input id="dataHoraDaInfracao" type="datetime-local" {...register('dataHoraDaInfracao')} required/>
        {errors.dataHoraDaInfracao && <span>{errors.dataHoraDaInfracao.message}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="valor">Valor da multa</label>
        <input id="valor" type="number" placeholder="Valor" {...register('valor')} pattern="^\d+(\.\d+)?$" title="Digite um número positivo válido" required/>
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
