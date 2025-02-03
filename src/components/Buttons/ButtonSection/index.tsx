'use client';
import styles from '@/components/Buttons/ButtonSection/ButtonSection.module.css';
import ButtonStructure from "@/components/Buttons/ButtonStructure";
import useButtonsHooks from "@/hooks/Buttons/useButtonsHooks";

export default function ButtonSection(): React.ReactNode {
    const {showAllInfringement, searchByPlate, createNewInfringement} = useButtonsHooks();
    
    return (
        <section className={styles.ButtonsOptions}>
            <ButtonStructure functionOnClick={() => showAllInfringement()}>Visualizar todas as infrações</ButtonStructure>
            <ButtonStructure functionOnClick={() => searchByPlate()}>Buscar infrações de uma placa</ButtonStructure>
            <ButtonStructure functionOnClick={() => createNewInfringement()}>Criar uma nova infração</ButtonStructure>
        </section>
    )
}