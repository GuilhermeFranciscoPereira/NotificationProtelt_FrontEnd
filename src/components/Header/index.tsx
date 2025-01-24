'use client';
import { useSearchByPlateContext } from "@/contexts/SearchByPlateContext";
import proteltLogo from '../../assets/imagensForTheSite/ProteltLogo.png';
import styles from './Header.module.css';
import Image from "next/image";
import Link from "next/link";

export default function Header(): React.ReactNode {
    const {toSetsearchByPlateActive} = useSearchByPlateContext();
    return (
        <header className={styles.header}>
            <div className={styles.informations}>
                <Link href={'/'} onClick={() => {toSetsearchByPlateActive(false)}}>
                    <Image src={proteltLogo} width={200} alt={`Logo da empresa Protelt`} quality={100}/>
                </Link>
                <h1>NOTIFICAÇÃO DE AUTUAÇÃO POR INFRAÇÃO DE VELOCIDADE MÁXIMA PERMITIDA</h1>
            </div>
            <hr />
        </header>
    )
}