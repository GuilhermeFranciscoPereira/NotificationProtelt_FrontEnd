'use client'
import { useModalContext } from '@/contexts/ModalContext'
import style from '../../components/Modal/Modal.module.css'

export default function ModalHooks() {
    const {modalValue, modalContent, toggleModal} = useModalContext();
    if (!modalValue) return false

    return (
        <section className={style.modalSection}>
            <div className={style.modalDiv}>
                <button className={style.modalClose} onClick={() => {toggleModal()}}>Cancelar ❌</button>
                <br />
                {modalContent}
            </div>
        </section>
    )
}