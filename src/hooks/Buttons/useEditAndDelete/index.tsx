import ReturnDeleteModal from "@/hooks/Buttons/useEditAndDelete/returnDeleteModal";
import { useModalContext } from "@/contexts/ModalContext";
import UpdateFields from "@/components/Form/UpdateFields";

export default function useEditAndDelete() {
    const {toSetModalContent} = useModalContext();
    
    function handleEditFunction() {
        toSetModalContent(<UpdateFields></UpdateFields>);
    }

    function handleDeleteFunction(autoDaInfracao: number) {
        toSetModalContent(<ReturnDeleteModal autoDaInfracao={autoDaInfracao} ></ReturnDeleteModal>);
    }

    return { handleEditFunction, handleDeleteFunction };
}