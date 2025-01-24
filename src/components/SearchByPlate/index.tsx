import style from './SearchByPlate.module.css';
import useSearchByPlate from '@/hooks/Apis/useSearchByPlate';

export default function SearchByPlateComponent() {
  const {handleSubmit, onSubmit, register} = useSearchByPlate();
  
  return (
    <form className={style.sectionSearchByPlate} onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <label htmlFor="placa">Digite a placa do veículo</label>
      <input id="placa" type="text" placeholder="Formato: ABC1D23" {...register('placa')} required minLength={7} maxLength={7} pattern="^[A-Za-z]{3}[0-9]{1}[A-Za-z]{1}[0-9]{2}$" title="Digite uma placa válida no formato ABC1D23"/>
      <button type="submit" onClick={() => {}} className={style.submitBtn}>Procurar placa</button>
    </form>
  )
}