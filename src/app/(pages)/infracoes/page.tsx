'use client'
import { useSearchByPlateContext } from '@/contexts/SearchByPlateContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import GetAllInfringiment from '@/hooks/Apis/useGetAllInfringiment.tsx';
import ModalComponent from '@/components/Modal';
import Header from '@/components/Header';
import style from './Infracoes.module.css';
import GetByPlate from '@/hooks/Apis/useGetByPlate';
import * as z from 'zod';

const formSchema = z.object({
  placa: z.string().regex(/^[A-Za-z]{3}[0-9]{1}[A-Za-z]{1}[0-9]{2}$/, { message: 'Formato de placa inválido, deve ser: ABC1D23' }),
});

type FormData = z.infer<typeof formSchema>;

export default function infracoes() {
    const {SearchByPlateActive, toSetsearchByPlateActive} = useSearchByPlateContext();
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
        } catch (error) {
          alert(`Erro ao enviar o formulário, por favor, tente novamente! \nErro: ${error}`);
          console.log(`Erro ao enviar o formulário, por favor, tente novamente! \nErro: ${error}`);
        }
      }

    return (
        <>
        <Header></Header>
        <ModalComponent></ModalComponent>
        <section className={style.searchAndFilterSection}>
          <form className={style.searchForm} onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
              <input type="text" placeholder="Busque por placa.." {...register('placa')} required minLength={7} maxLength={7} pattern="^[A-Za-z]{3}[0-9]{1}[A-Za-z]{1}[0-9]{2}$" title="Digite uma placa válida no formato ABC1D23"/>
              <button type='submit'>🔎</button>
              {SearchByPlateActive && <button type='button' className={style.removeFilterButton} onClick={() => {toSetsearchByPlateActive(false)}}>❌</button>}
          </form>
          <div className={style.filterDiv}>
            <select id="speedFilter" name="speedFilter">
              <option value="withoutFilter">Sem filtro</option>
              <option value="40-60">40 - 60 km/h</option>
              <option value="60-80">60 - 80 km/h</option>
              <option value="80-100">80 - 100 km/h</option>
              <option value="100-120">100 - 120 km/h</option>
            </select>
          </div>
        </section>
        <section className={style.infringementSection}>
            {SearchByPlateActive ? <GetByPlate></GetByPlate> : <GetAllInfringiment></GetAllInfringiment>}
        </section>
        </>
    )
}