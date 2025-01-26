import { useMutation } from 'react-query';
import axios from 'axios';
import Toast from '@/components/Toast';

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
      <Toast message={`Infração deletada com sucesso!`} backgroundColor='lightgreen' duration={3000}></Toast>
    } catch (error) {
      <Toast message={`Não foi possível deletar informação. \nErro`} backgroundColor='rgba(255, 0, 0, 0.5)'></Toast>
    }
  };

  return { deleteInfringement };
}