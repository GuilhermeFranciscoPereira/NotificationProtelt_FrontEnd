import useGetBySpeedRange from '@/hooks/Apis/Filters/useGetBySpeedRange';
import styles from '@/components/Form/Form.module.css';

export default function SearchBySpeedRange(): React.ReactNode {
  const { handleSubmit, onSubmit, register, errors } = useGetBySpeedRange();

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <h2>Filtrar Infrações por Velocidade</h2>

      <div className={styles.formGroup}>
        <label htmlFor="minSpeed">De (km/h):</label>
        <input id="minSpeed" type="number" placeholder="Exemplo: 40" {...register('minSpeed')} min={0} required/>
        {errors.minSpeed && <span>{errors.minSpeed.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="maxSpeed">Até (km/h):</label>
        <input id="maxSpeed" type="number" placeholder="Exemplo: 80" {...register('maxSpeed')} min={0} required/>
        {errors.maxSpeed && <span>{errors.maxSpeed.message}</span>}
      </div>

      <button type="submit" className={styles.submitBtn}>Filtrar</button>
    </form>
  );
}