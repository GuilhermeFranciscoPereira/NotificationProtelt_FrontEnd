import Form from "@/components/Form";
import { useModalContext } from "@/contexts/ModalContext";

export default function ButtonsHooks() {
    const {toggleModal, toSetModalContent} = useModalContext();

    function createNewInfringement() {
        toggleModal();
        toSetModalContent(<Form></Form>);
    }
    
    return {createNewInfringement};
}