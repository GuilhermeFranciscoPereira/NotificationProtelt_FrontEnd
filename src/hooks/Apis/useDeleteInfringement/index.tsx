import { useToastContext } from '@/contexts/ToastContext';
import { useModalContext } from '@/contexts/ModalContext';
import useGetByPlate from '../Filters/useGetByPlate';
import { useMutation } from 'react-query';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:7777/',
});

export default function useDeleteInfringement() {
  const {showToast} = useToastContext();
  const {toggleModal} = useModalContext();
  const {handleClearFilter} = useGetByPlate();
  const deleteMutation = useMutation(async (autoDaInfracao: number) => {
    await api.delete(`/allInfringement/DELETE/${autoDaInfracao}`);
  });

  async function deleteInfringement(autoDaInfracao: number) {
    handleClearFilter(true);
    try {
      await deleteMutation.mutateAsync(autoDaInfracao);
      showToast({message: `Infração deletada com sucesso!`, backgroundColor: "#008000"});
      toggleModal();
      handleClearFilter();
    } catch (error: any) {
      showToast({message: `Não foi possível deletar a infração. Erro: ${error.message}`, backgroundColor: "#d83734"});
      handleClearFilter();
    }
  };

  return { deleteInfringement };
}