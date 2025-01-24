'use client';
import GetAllInfringiment from '@/hooks/Apis/useGetAllInfringiment/return';
import SearchByPlateReturn from '@/hooks/Apis/useSearchByPlate/return';
import useInfracoesHook from '@/hooks/Pages/useInfracoesHook';
import ModalComponent from '@/components/Modal';
import style from './Infracoes.module.css';
import Header from '@/components/Header';

export default function infracoes(): React.ReactNode {
  const {handleSubmit, onSubmit, register, SearchByPlateActive, toSetsearchByPlateActive} = useInfracoesHook();
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
      {SearchByPlateActive ? <SearchByPlateReturn></SearchByPlateReturn> : <GetAllInfringiment></GetAllInfringiment>}
    </section>
    </>
  )
}