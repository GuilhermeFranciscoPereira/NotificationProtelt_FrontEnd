'use client';
import ButtonsHooks from "@/hooks/ButtonsHooks";
import ButtonStructure from "../ButtonStructure";
import style from './ButtonSection.module.css';

export default function ButtonSection() {
    const {showAllInfringement, searchByPlate, createNewInfringement} = ButtonsHooks();
    
    return (
        <section className={style.ButtonsOptions}>
            <ButtonStructure functionOnClick={() => showAllInfringement()}>Visualizar todas as infrações</ButtonStructure>
            <ButtonStructure functionOnClick={() => searchByPlate()}>Buscar infrações de uma placa</ButtonStructure>
            <ButtonStructure functionOnClick={() => createNewInfringement()}>Criar uma nova infração</ButtonStructure>
        </section>
    )
}