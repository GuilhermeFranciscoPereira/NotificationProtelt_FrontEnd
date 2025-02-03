'use client';
import proteltLogo from '@/assets/imagensForTheSite/ProteltLogo.png';
import { useFiltersContext } from "@/contexts/FiltersContext";
import styles from '@/components/Header/Header.module.css';
import Image from "next/image";
import Link from "next/link";

export default function Header(): React.ReactNode {
    const {toSetFiltersHowActive} = useFiltersContext();
    return (
        <header className={styles.header}>
            <div className={styles.informations}>
                <Link href={'/'} onClick={() => {toSetFiltersHowActive(false)}}>
                    <Image src={proteltLogo} width={200} alt={`Logo da empresa Protelt`} quality={100}/>
                </Link>
                <h1>NOTIFICAÇÃO DE AUTUAÇÃO POR INFRAÇÃO DE VELOCIDADE MÁXIMA PERMITIDA</h1>
            </div>
            <hr />
        </header>
    )
}