import style from './ButtonStructure.module.css';

type ButtonStructureProps = {
    children: React.ReactNode;
    functionOnClick?: () => void;
}

export default function ButtonStructure({children, functionOnClick}: ButtonStructureProps): React.ReactNode {
    return (
        <button className={style.button} onClick={functionOnClick}>{children}</button>
    )
}