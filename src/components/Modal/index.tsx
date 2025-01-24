'use client';
import { useModalContext } from "@/contexts/ModalContext";
import style from './Modal.module.css';

export default function ModalComponent(): React.ReactNode {
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