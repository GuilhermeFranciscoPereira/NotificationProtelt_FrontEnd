import style from './SearchByPlate.module.css'

export default function SearchByPlate() {
    return (
        <form className={style.sectionSearchByPlate}>
            <label htmlFor="placa">Digite a placa do veículo</label>
            <input id="placa" type="text" placeholder="Formato: ABC1D23" required minLength={7} maxLength={7} pattern="^[A-Za-z]{3}[0-9]{1}[A-Za-z]{1}[0-9]{2}$" title="Digite uma placa válida no formato ABC1D23"/>
            <button type="submit" className={style.submitBtn}>Procurar placa</button>
        </form>
    )
}