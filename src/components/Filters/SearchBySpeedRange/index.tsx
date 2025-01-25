'use client'
import useFilterBySpeedRange from '@/hooks/Apis/Filters/useFilterBySpeedRange';
import style from '@/components/Form/Form.module.css';

export default function SearchBySpeedRange(): React.ReactNode {
  const { handleSubmit, onSubmit, register, errors } = useFilterBySpeedRange();

  return (
    <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <h2>Filtrar Infrações por Velocidade</h2>

      <div className={style.formGroup}>
        <label htmlFor="minSpeed">De (km/h):</label>
        <input id="minSpeed" type="number" placeholder="Exemplo: 40" {...register('minSpeed')} required/>
        {errors.minSpeed && <span>{errors.minSpeed.message}</span>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="maxSpeed">Até (km/h):</label>
        <input id="maxSpeed" type="number" placeholder="Exemplo: 80" {...register('maxSpeed')} required/>
        {errors.maxSpeed && <span>{errors.maxSpeed.message}</span>}
      </div>

      <button type="submit" className={style.submitBtn}>Filtrar</button>
    </form>
  );
}