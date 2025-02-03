import useUpdateInfringement from '@/hooks/Apis/useUpdateInfringement';
import styles from '@/components/Form/Form.module.css';

export default function UpdateFields(): React.ReactNode {
  const {handleSubmit, onSubmit, register, handleFileChange, SearchByIdContent, errors} = useUpdateInfringement();

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <h2>ATUALIZAR INFRAÇÃO</h2>

      <div className={styles.formGroup}>
        <label htmlFor="placa">Placa do veículo</label>
        <input id="placa" type="text" placeholder="ABC1D34" {...register('placa')} required minLength={7} maxLength={7} defaultValue={SearchByIdContent[0]?.placa}/>
        {errors.placa && <span>{errors.placa.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="dataEnvio">Data de Envio - ( <span style={{color: "#d83734"}}>Não obrigatório</span> )</label>
        <input id="dataEnvio" type="date" {...register('dataEnvio')} defaultValue={SearchByIdContent[0]?.dataEnvio}/>
        {errors.dataEnvio && <span>{errors.dataEnvio.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="municipio">Município do veículo</label>
        <input id="municipio" type="text" placeholder="Município" {...register('municipio')} required defaultValue={SearchByIdContent[0]?.municipio}/>
        {errors.municipio && <span>{errors.municipio.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="uf">UF do veículo</label>
        <input id="uf" type="text" placeholder="Exemplo: SP / RJ / MG" {...register('uf')} required minLength={2} maxLength={2} defaultValue={SearchByIdContent[0]?.uf}/>
        {errors.uf && <span>{errors.uf.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="marcaModelo">Marca / Modelo do veículo</label>
        <input id="marcaModelo" type="text" placeholder="Marca / Modelo" {...register('marcaModelo')} required minLength={1} defaultValue={SearchByIdContent[0]?.marcaModelo}/>
        {errors.marcaModelo && <span>{errors.marcaModelo.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="cor">Cor do veículo</label>
        <input id="cor" type="text" placeholder="Cor" {...register('cor')} required minLength={2} defaultValue={SearchByIdContent[0]?.cor}/>
        {errors.cor && <span>{errors.cor.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="especieTipo">Espécie / Tipo do veículo</label>
        <input id="especieTipo" type="text" placeholder="Espécie / Tipo" {...register('especieTipo')} required minLength={2} defaultValue={SearchByIdContent[0]?.especieTipo}/>
        {errors.especieTipo && <span>{errors.especieTipo.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="localDaInfracao">Local da infração</label>
        <input id="localDaInfracao" type="text" placeholder="Local da infração" {...register('localDaInfracao')} required defaultValue={SearchByIdContent[0]?.localDaInfracao}/>
        {errors.localDaInfracao && <span>{errors.localDaInfracao.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="nomeCondutor">Nome do condutor - ( <span style={{color: "#d83734"}}>Não obrigatório</span> )</label>
        <input id="nomeCondutor" type="text" placeholder="Nome do condutor" {...register('nomeCondutor')} defaultValue={SearchByIdContent[0]?.nomeCondutor}/>
        {errors.nomeCondutor && <span>{errors.nomeCondutor.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="proprietario">Proprietário responsável - ( <span style={{color: "#d83734"}}>Não obrigatório</span> )</label>
        <input id="proprietario" type="text" placeholder="Proprietário" {...register('proprietario')} defaultValue={SearchByIdContent[0]?.proprietario}/>
        {errors.proprietario && <span>{errors.proprietario.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="quadraLote">Quadra e Lote - ( <span style={{color: "#d83734"}}>Não obrigatório</span> )</label>
        <input id="quadraLote" type="text" placeholder="Quadra e Lote" {...register('quadraLote')} defaultValue={SearchByIdContent[0]?.quadraLote}/>
        {errors.quadraLote && <span>{errors.quadraLote.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="naturezaDoVeiculo">Natureza do veículo - ( <span style={{color: "#d83734"}}>Não obrigatório</span> )</label>
        <input id="naturezaDoVeiculo" type="text" placeholder="Natureza do veículo" {...register('naturezaDoVeiculo')} defaultValue={SearchByIdContent[0]?.naturezaDoVeiculo}/>
        {errors.naturezaDoVeiculo && <span>{errors.naturezaDoVeiculo.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="medicaoRealizadaKMH">Medição realizada (Km/h)</label>
        <input id="medicaoRealizadaKMH" type="number" {...register('medicaoRealizadaKMH')} required defaultValue={SearchByIdContent[0]?.medicaoRealizadaKMH}/>
        {errors.medicaoRealizadaKMH && <span>{errors.medicaoRealizadaKMH.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="dataHoraDaInfracao">Data / Hora da infração</label>
        <input id="dataHoraDaInfracao" type="datetime-local" {...register('dataHoraDaInfracao')}/>
        {errors.dataHoraDaInfracao && <span>{errors.dataHoraDaInfracao.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="valor">Valor da multa</label>
        <input id="valor" type="number" placeholder="Valor" {...register('valor')} pattern="^\d+(\.\d+)?$" title="Digite um número positivo válido" required defaultValue={SearchByIdContent[0]?.valor}/>
        {errors.valor && <span>{errors.valor.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="fotoInfracao">Foto da infração</label>
        <input
          type="file"
          id="fotoInfracao"
          accept="image/*"
          onChange={handleFileChange}
        />
        {errors.fotoInfracao && <span>{errors.fotoInfracao.message}</span>}
      </div>

      <button type="submit" className={styles.submitBtn}>Salvar Alterações</button>
    </form>
  );
}
