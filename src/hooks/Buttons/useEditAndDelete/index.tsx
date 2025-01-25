'use client';
import UpdateFields from "@/components/Form/UpdateFields";
import { useEditAndDeleteContext } from "@/contexts/EditAndDeleteContext";
import { useModalContext } from "@/contexts/ModalContext";
import ReturnDeleteModal from "./returnDeleteModal";

export default function useEditAndDelete() {
    const {toSetAutoDaInfracaoValue} = useEditAndDeleteContext();
    const {toggleModal, toSetModalContent} = useModalContext();

    function handleEditFunction(autoDaInfracao: number) {
        toSetAutoDaInfracaoValue(autoDaInfracao);
        <UpdateFields></UpdateFields>
    }

    function handleDeleteFunction(autoDaInfracao: number) {
        toggleModal();
        toSetModalContent(<ReturnDeleteModal autoDaInfracao={autoDaInfracao} ></ReturnDeleteModal>)   
    }

    return { handleEditFunction, handleDeleteFunction }
}