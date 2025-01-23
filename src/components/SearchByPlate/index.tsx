import { useSearchByPlateContext } from '@/contexts/SearchByPlateContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import style from './SearchByPlate.module.css';
import * as z from 'zod';

const formSchema = z.object({
  placa: z.string().regex(/^[A-Za-z]{3}[0-9]{1}[A-Za-z]{1}[0-9]{2}$/, { message: 'Formato de placa inválido, deve ser: ABC1D23' }),
});

type FormData = z.infer<typeof formSchema>;

export default function SearchByPlate() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const {toSetSearchByPlateContent} = useSearchByPlateContext();

  const onSubmit = async (data: FormData) => {
    const form = new FormData();
    Object.keys(data).forEach((key) => {
      const value = data[key as keyof FormData];
      if (value !== undefined) {
        form.append(key, value as string);
      }
    });
    try {
      const response = await fetch(`http://localhost:7777/allInfringement/${data.placa}`, {
        method: 'POST',
        body: form,
      });
      const result = await response.json();
      toSetSearchByPlateContent(result);
      router.push('/infracoes')
    } catch (error) {
      alert(`Erro ao enviar o formulário, por favor, tente novamente! \nErro: ${error}`);
      console.log(`Erro ao enviar o formulário, por favor, tente novamente! \nErro: ${error}`);
    }
  }

  return (
    <form className={style.sectionSearchByPlate} onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <label htmlFor="placa">Digite a placa do veículo</label>
      <input id="placa" type="text" placeholder="Formato: ABC1D23" {...register('placa')} required minLength={7} maxLength={7} pattern="^[A-Za-z]{3}[0-9]{1}[A-Za-z]{1}[0-9]{2}$" title="Digite uma placa válida no formato ABC1D23"/>
      <button type="submit" onClick={() => {}} className={style.submitBtn}>Procurar placa</button>
    </form>
  )
}