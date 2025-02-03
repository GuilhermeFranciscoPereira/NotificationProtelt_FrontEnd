'use client';
import GetAllInfringimentReturn from '@/hooks/Apis/useGetAllInfringiment/return';
import useGetBySpeedRange from '@/hooks/Apis/Filters/useGetBySpeedRange';
import GetByPlateReturn from '@/hooks/Apis/Filters/useGetByPlate/return';
import styles from '@/app/(pages)/infracoes/Infracoes.module.css';
import useGetByPlate from '@/hooks/Apis/Filters/useGetByPlate';
import ModalComponent from '@/components/Modal';
import Header from '@/components/Header';

export default function infracoes(): React.ReactNode {
  const {handleSubmit, register, onSubmit, handleClearFilter, handleChangeInputValue, inputValue, FiltersHowActive} = useGetByPlate();
  const {activeModalToFilter} = useGetBySpeedRange();
  return (
    <>
    <Header></Header>
    <ModalComponent></ModalComponent>
    <section className={styles.searchAndFilterSection}>
      <form className={styles.searchForm} onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <input type="text" value={inputValue} placeholder="Busque por placa.." {...register('placa')} required minLength={7} maxLength={7} pattern="^[A-Za-z]{3}[0-9]{1}[A-Za-z]{1}[0-9]{2}$" title="Digite uma placa válida no formato ABC1D23" onChange={handleChangeInputValue}/>
          <button type='submit'>🔎</button>
          {FiltersHowActive && <button type='button' className={styles.removeFilterButton} onClick={() => {handleClearFilter()}}>❌</button>}
      </form>
      <div className={styles.filterDiv}>
        <button onClick={() => {activeModalToFilter()}}>Filtrar por velocidade</button>
      </div>
    </section>
    <section className={styles.infringementSection}>
      {FiltersHowActive ? <GetByPlateReturn></GetByPlateReturn> : <GetAllInfringimentReturn></GetAllInfringimentReturn>}
    </section>
    </>
  )
}