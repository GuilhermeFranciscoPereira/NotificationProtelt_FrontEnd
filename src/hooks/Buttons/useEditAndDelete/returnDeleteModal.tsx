import styles from '@/components/Buttons/EditAndDelete/EditAndDelete.module.css'
import useDeleteInfringement from '@/hooks/Apis/useDeleteInfringement';

type ReturnDeleteModalProps = {
    autoDaInfracao: number
}

export default function ReturnDeleteModal({autoDaInfracao}: ReturnDeleteModalProps): React.ReactNode {
    const {deleteInfringement} = useDeleteInfringement();
    return (
        <>
        <h2 className={styles.h2}>Você tem certeza que deseja excluir essa infração?</h2>
        <div className={styles.buttonsEditAndDeleteDiv}>
            <button className={styles.deleteButton} onClick={() => {deleteInfringement(autoDaInfracao)}}>Sim, deletar infração</button>
        </div>
        </>
    )
}