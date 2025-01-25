'use client';
import UpdateFields from "@/components/Form/UpdateFields";
import { useEditAndDeleteContext } from "@/contexts/EditAndDeleteContext";

export default function useEditAndDelete() {
    const {toSetAutoDaInfracaoValue} = useEditAndDeleteContext();

    function handleEditFunction(autoDaInfracao: number) {
        toSetAutoDaInfracaoValue(autoDaInfracao);
        <UpdateFields></UpdateFields>
    }

    return { handleEditFunction }
}