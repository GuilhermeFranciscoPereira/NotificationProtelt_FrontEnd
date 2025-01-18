import style from './ButtonStructure.module.css'

export default function ButtonStructure({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <button className={style.button}>{children}</button>
    )
}