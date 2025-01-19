import { useModalContext } from "@/contexts/ModalContext";
import { useRouter } from "next/navigation";
import SearchByPlate from "@/components/SearchByPlate";
import Form from "@/components/Form";
import EditAndDelete from "@/components/EditAndDelete";

export default function ButtonsHooks() {
    const {toggleModal, toSetModalContent} = useModalContext();
    const router = useRouter();

    function showAllInfringement() {
        router.push('infracoes')
    }

    function searchByPlate() {
        toggleModal();
        toSetModalContent(<SearchByPlate></SearchByPlate>);
    }
    
    function createNewInfringement() {
        toggleModal();
        toSetModalContent(<Form></Form>);
    }

    function editAndDeleteInfringement(plate: string) {
        toggleModal();
        toSetModalContent(<EditAndDelete>{plate}</EditAndDelete>);
    }

    return {showAllInfringement, searchByPlate, createNewInfringement, editAndDeleteInfringement};
}