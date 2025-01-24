'use client';
import useButtonsHooks from "@/hooks/Buttons/useButtonsHooks";
import ButtonStructure from "../ButtonStructure";
import style from './ButtonSection.module.css';

export default function ButtonSection(): React.ReactNode {
    const {showAllInfringement, searchByPlate, createNewInfringement} = useButtonsHooks();
    
    return (
        <section className={style.ButtonsOptions}>
            <ButtonStructure functionOnClick={() => showAllInfringement()}>Visualizar todas as infrações</ButtonStructure>
            <ButtonStructure functionOnClick={() => searchByPlate()}>Buscar infrações de uma placa</ButtonStructure>
            <ButtonStructure functionOnClick={() => createNewInfringement()}>Criar uma nova infração</ButtonStructure>
        </section>
    )
}