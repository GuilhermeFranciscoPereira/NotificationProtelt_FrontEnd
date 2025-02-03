import styles from '@/components/Buttons/EditAndDelete/EditAndDelete.module.css';
import useEditAndDelete from '@/hooks/Buttons/useEditAndDelete';

type EditAndDeleteProps = {
    autoDaInfracao: number;
    plate: string;
}

export default function EditAndDelete({autoDaInfracao, plate}: EditAndDeleteProps): React.ReactNode {
    const {handleEditFunction, handleDeleteFunction} = useEditAndDelete();
    
    return (
        <>
        <h2 className={styles.h2}>O que deseja fazer com a placa <span style={{textTransform: "uppercase"}}>{plate}</span>?</h2>
        <div className={styles.buttonsEditAndDeleteDiv}>
            <button className={styles.editButton} onClick={() => handleEditFunction()}>Editar</button>
            <button className={styles.deleteButton} onClick={() => handleDeleteFunction(autoDaInfracao)}>Deletar</button>
        </div>
        </>
    )
}