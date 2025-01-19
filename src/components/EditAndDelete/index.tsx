import style from './EditAndDelete.module.css'

export default function EditAndDelete({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <>
        <h2>O que deseja fazer com a placa: {children}</h2>
        <div className={style.buttonsEditAndDeleteDiv}>
            <button className={style.editButton}>Editar</button>
            <button className={style.deleteButton}>Deletar</button>
        </div>
        </>
    )
}