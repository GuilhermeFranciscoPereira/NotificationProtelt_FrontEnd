import Form from "@/components/Form";
import SearchByPlate from "@/components/SearchByPlate";
import { useModalContext } from "@/contexts/ModalContext";

export default function ButtonsHooks() {
    const {toggleModal, toSetModalContent} = useModalContext();

    function createNewInfringement() {
        toggleModal();
        toSetModalContent(<Form></Form>);
    }

    function searchByPlate() {
        toggleModal();
        toSetModalContent(<SearchByPlate></SearchByPlate>);
    }
    
    return {createNewInfringement, searchByPlate};
}