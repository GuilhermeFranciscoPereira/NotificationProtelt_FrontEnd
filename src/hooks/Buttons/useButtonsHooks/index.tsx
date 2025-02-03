import SearchByPlateComponent from "@/components/Filters/SearchByPlate";
import EditAndDelete from "@/components/Buttons/EditAndDelete";
import { useModalContext } from "@/contexts/ModalContext";
import useGetById from "@/hooks/Apis/useGetById";
import FormComponent from "@/components/Form";
import { useRouter } from "next/navigation";

export default function useButtonsHooks() {
    const {toggleModal, toSetModalContent} = useModalContext();
    const {handleSearchByID} = useGetById();
    const router = useRouter();

    function showAllInfringement() {
        router.push('infracoes');
    }

    function searchByPlate() {
        toSetModalContent(<SearchByPlateComponent></SearchByPlateComponent>);
        toggleModal();
    }
    
    function createNewInfringement() {
        toSetModalContent(<FormComponent></FormComponent>);
        toggleModal();
    }

    function editAndDeleteInfringement(autoDaInfracao: number, plate: string) {
        handleSearchByID(autoDaInfracao, 'editSection');
        toSetModalContent(<EditAndDelete autoDaInfracao={autoDaInfracao} plate={plate}></EditAndDelete>);
        toggleModal();
    }

    return {showAllInfringement, searchByPlate, createNewInfringement, editAndDeleteInfringement};
}