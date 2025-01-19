'use client';
import ButtonsHooks from "@/hooks/ButtonsHooks";
import ButtonStructure from "../ButtonStructure";
import style from './ButtonSection.module.css';

export default function ButtonSection() {
    const {createNewInfringement, searchByPlate} = ButtonsHooks();
    
    return (
        <section className={style.ButtonsOptions}>
            <ButtonStructure>Visualizar todas as infrações</ButtonStructure>
            <ButtonStructure functionOnClick={() => searchByPlate()}>Buscar infrações de uma placa</ButtonStructure>
            <ButtonStructure functionOnClick={() => createNewInfringement()}>Criar uma nova infração</ButtonStructure>
        </section>
    )
}