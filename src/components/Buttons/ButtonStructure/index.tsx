import styles from '@/components/Buttons/ButtonStructure/ButtonStructure.module.css';

type ButtonStructureProps = {
    children: React.ReactNode;
    functionOnClick?: () => void;
}

export default function ButtonStructure({children, functionOnClick}: ButtonStructureProps): React.ReactNode {
    return (
        <button className={styles.button} onClick={functionOnClick}>{children}</button>
    )
}