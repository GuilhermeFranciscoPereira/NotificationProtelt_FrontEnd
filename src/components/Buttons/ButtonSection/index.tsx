import ButtonStructure from "../ButtonStructure";
import style from './ButtonSection.module.css';

export default function ButtonSection() {
    return (
        <section className={style.ButtonsOptions}>
            <ButtonStructure>Visualizar todas as infrações</ButtonStructure>
            <ButtonStructure>Buscar infrações de uma placa</ButtonStructure>
            <ButtonStructure>Criar uma nova infração</ButtonStructure>
            <ButtonStructure>Editar / Deletar infrações</ButtonStructure>
        </section>
    )
}