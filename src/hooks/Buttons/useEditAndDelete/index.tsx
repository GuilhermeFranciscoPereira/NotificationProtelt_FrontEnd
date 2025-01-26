'use client';
import { useEditAndDeleteContext } from "@/contexts/EditAndDeleteContext";
import { useModalContext } from "@/contexts/ModalContext";
import UpdateFields from "@/components/Form/UpdateFields";
import ReturnDeleteModal from "./returnDeleteModal";

export default function useEditAndDelete() {
    const {toSetAutoDaInfracaoValue} = useEditAndDeleteContext();
    const {toSetModalContent} = useModalContext();

    function handleEditFunction(autoDaInfracao: number) {
        toSetAutoDaInfracaoValue(autoDaInfracao);
        toSetModalContent(<UpdateFields></UpdateFields>);
    }

    function handleDeleteFunction(autoDaInfracao: number) {
        toSetModalContent(<ReturnDeleteModal autoDaInfracao={autoDaInfracao} ></ReturnDeleteModal>)   
    }

    return { handleEditFunction, handleDeleteFunction }
}