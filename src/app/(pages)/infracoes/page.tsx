import Header from '@/components/Header';
import ModalComponent from '@/components/Modal';
import GetAllInfringiment from '@/hooks/Apis/useGetAllInfringiment.tsx';
import style from './Infracoes.module.css';

export default function infracoes() {
    return (
        <>
        <Header></Header>
        <ModalComponent></ModalComponent>
        <section className={style.searchAndFilterSection}>
                <form className={style.searchForm}>
                    <input type="text" placeholder="Busque por placa.." required minLength={7} maxLength={7} pattern="^[A-Za-z]{3}[0-9]{1}[A-Za-z]{1}[0-9]{2}$" title="Digite uma placa válida no formato ABC1D23"/>
                    <button type='submit'>🔎</button>
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
            <GetAllInfringiment></GetAllInfringiment>
        </section>
        </>
    )
}