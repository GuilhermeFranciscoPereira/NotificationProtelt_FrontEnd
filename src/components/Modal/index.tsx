'use client';
import { useModalContext } from "@/contexts/ModalContext";
import styles from '@/components/Modal/Modal.module.css';

export default function ModalComponent(): React.ReactNode {
    const {modalState, modalContent, toggleModal} = useModalContext();
    if (!modalState) return false
    return (
        <section className={styles.modalSection}>
            <div className={styles.modalDiv}>
                <button className={styles.modalClose} onClick={() => {toggleModal()}}>Cancelar ❌</button>
                <br />
                {modalContent}
            </div>
        </section>
    )
}