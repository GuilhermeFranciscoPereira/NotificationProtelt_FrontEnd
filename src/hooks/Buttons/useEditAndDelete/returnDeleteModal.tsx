'use client';
import style from '@/components/Buttons/EditAndDelete/EditAndDelete.module.css'
import useDeleteInfringement from '@/hooks/Apis/useDeleteInfringement';

type ReturnDeleteModalProps = {
    autoDaInfracao: number
}

export default function ReturnDeleteModal({autoDaInfracao}: ReturnDeleteModalProps): React.ReactNode {
    const {deleteInfringement} = useDeleteInfringement();
    return (
        <>
        <h2 className={style.h2}>Você tem certeza que deseja excluir essa infração?</h2>
        <div className={style.buttonsEditAndDeleteDiv}>
            <button className={style.deleteButton} onClick={() => {deleteInfringement(autoDaInfracao)}}>Sim, deletar infração</button>
        </div>
        </>
    )
}