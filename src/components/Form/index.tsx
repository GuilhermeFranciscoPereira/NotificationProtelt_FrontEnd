import style from './Form.module.css';

export default function Form() {
    return (
        <form className={style.formContainer}>
            <h2>CADASTRO DE INFRAÇÕES</h2>
            <div className={style.formGroup}>
                <label htmlFor="placa">Placa do veículo</label>
                <input id="placa" type="text" placeholder="ABC1D23" required minLength={7} maxLength={7} pattern="^[A-Za-z]{3}[0-9]{1}[A-Za-z]{1}[0-9]{2}$" title="Digite uma placa válida no formato ABC1D23"  />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="municipio">Município do veículo</label>
                <input id="municipio" type="text" placeholder="Município" required pattern="[A-Za-zÀ-ÿ\s]+" title="Digite apenas letras" />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="uf">UF do veículo</label>
                <input id="uf" type="text" placeholder="Exemplo: SP / RJ / MG" required minLength={2} maxLength={2} pattern="^[A-Z]{2}$" title="Digite uma UF válida (duas letras maiúsculas)"/>
            </div>
            <div className={style.formGroup}>
                <label htmlFor="marcaModelo">Marca / Modelo do veículo</label>
                <input id="marcaModelo" type="text" placeholder="Marca / Modelo" required />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="cor">Cor do veículo</label>
                <input id="cor" type="text" placeholder="Cor" required pattern="[A-Za-zÀ-ÿ\s]+" title="Digite apenas letras" />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="especieTipo">Espécie / Tipo do veículo</label>
                <input id="especieTipo" type="text" placeholder="Espécia / Tipo" required pattern="[A-Za-zÀ-ÿ\s]+" title="Digite apenas letras" />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="nomeCondutor">Nome do condutor</label>
                <input id="nomeCondutor" type="text" placeholder="Nome do condutor" pattern="[A-Za-zÀ-ÿ\s]+" title="Digite apenas letras" />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="proprietario">Proprietário responsável</label>
                <input id="proprietario" type="text" placeholder="Proprietário" pattern="[A-Za-zÀ-ÿ\s]+" title="Digite apenas letras" />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="quadraLote">Quadra e Lote</label>
                <input id="quadraLote" type="text" placeholder="Quadra e Lote" pattern="^Q\d+ L\d+$" title="Digite no formato: Q0 L0"/>
            </div>
            <div className={style.formGroup}>
                <label htmlFor="natureza">Natureza</label>
                <input id="natureza" type="text" placeholder="Natureza" />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="grauInfracao">Grau da infração</label>
                <input id="grauInfracao" type="text" placeholder="Grau da infração" required />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="medicao">Medição realizada em KM/H</label>
                <input id="medicao" type="number" placeholder="Medição realizada em KM/H" required min={0} pattern="^\d+(\.\d+)?$" title="Digite a velocidade em KM/H (ex: 80 ou 120.5)"/>
            </div>
            <div className={style.formGroup}>
                <label htmlFor="dataHora">Data / Hora da infração</label>
                <input id="dataHora" type="datetime-local" required />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="valor">Valor da multa</label>
                <input id="valor" type="number" placeholder="150,00" required min={0} pattern="^\d{1,3}(\.\d{3})*,\d{2}$" title="Digite um valor válido, exemplo: 1.234,56" />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="fileImg">Imagem da infração com a placa</label>
                <input id="fileImg" type="file" accept="image/*" required pattern="^.*\.(jpg|jpeg|png|gif|bmp|svg)$" title="Somente arquivos de imagem são permitidos: .jpg, .jpeg, .png, .gif, .bmp, .svg" />
            </div>
            <button type="submit" className={style.submitBtn}>Cadastrar</button>
        </form>
    );
}