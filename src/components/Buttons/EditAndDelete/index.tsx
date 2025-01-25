'use client';
import useEditAndDelete from '@/hooks/Buttons/useEditAndDelete';
import style from './EditAndDelete.module.css';

type EditAndDeleteProps = {
    autoDaInfracao: number;
    plate: string
}

export default function EditAndDelete({autoDaInfracao, plate}: EditAndDeleteProps): React.ReactNode {
    const {handleEditFunction, handleDeleteFunction} = useEditAndDelete();
    return (
        <>
        <h2>O que deseja fazer com a placa: {plate}</h2>
        <div className={style.buttonsEditAndDeleteDiv}>
            <button className={style.editButton} onClick={() => handleEditFunction(autoDaInfracao)}>Editar</button>
            <button className={style.deleteButton} onClick={() => handleDeleteFunction(autoDaInfracao)}>Deletar</button>
        </div>
        </>
    )
}