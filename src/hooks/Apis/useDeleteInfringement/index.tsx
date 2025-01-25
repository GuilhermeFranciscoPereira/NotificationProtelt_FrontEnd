import { useMutation } from 'react-query';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:7777/',
});

export default function useDeleteInfringement() {
  const deleteMutation = useMutation(async (autoDaInfracao: number) => {
    await api.delete(`/allInfringement/DELETE/${autoDaInfracao}`);
  });

  async function deleteInfringement(autoDaInfracao: number) {
    try {
      await deleteMutation.mutateAsync(autoDaInfracao);
      alert('Infração deletada com sucesso!');
    } catch (error) {
      console.error('Erro ao deletar infração:', error);
      alert('Erro ao deletar infração. Tente novamente.');
    }
  };

  return { deleteInfringement };
}