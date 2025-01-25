import { useModalContext } from "@/contexts/ModalContext";
import { useRouter } from "next/navigation";
import EditAndDelete from "@/components/Buttons/EditAndDelete";
import SearchByPlateComponent from "@/components/Filters/SearchByPlate";
import FormComponent from "@/components/Form";

export default function useButtonsHooks() {
    const {toggleModal, toSetModalContent} = useModalContext();
    const router = useRouter();

    function showAllInfringement() {
        router.push('infracoes');
    }

    function searchByPlate() {
        toggleModal();
        toSetModalContent(<SearchByPlateComponent></SearchByPlateComponent>);
    }
    
    function createNewInfringement() {
        toggleModal();
        toSetModalContent(<FormComponent></FormComponent>);
    }

    function editAndDeleteInfringement(autoDaInfracao: number, plate: string) {
        toggleModal();
        toSetModalContent(<EditAndDelete autoDaInfracao={autoDaInfracao} plate={plate}></EditAndDelete>);
    }

    return {showAllInfringement, searchByPlate, createNewInfringement, editAndDeleteInfringement};
}