import useGetByPlate from '@/hooks/Apis/Filters/useGetByPlate';
import styles from '@/components/Filters/SearchByPlate/SearchByPlate.module.css';

export default function SearchByPlateComponent() {
  const {handleSubmit, onSubmit, register} = useGetByPlate();
  
  return (
    <form className={styles.sectionSearchByPlate} onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <label htmlFor="placa">Digite a placa do veículo</label>
      <input id="placa" type="text" placeholder="Formato: ABC1D23" {...register('placa')} required minLength={7} maxLength={7} pattern="^[A-Za-z]{3}[0-9]{1}[A-Za-z]{1}[0-9]{2}$" title="Digite uma placa válida no formato ABC1D23"/>
      <button type="submit" className={styles.submitBtn}>Procurar placa</button>
    </form>
  )
}