import { useSearchByPrimaryKeyContext } from '@/contexts/SearchByPrimaryKey';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:7777/',
});

async function fetchById(id: number) {
  try {
    const response = await api.post(`/allInfringement/ID/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Erro ao buscar a infração: ${error}`);
  }
}

export default function useGetById() {
  const { toSetSearchByPrimaryKeyContent } = useSearchByPrimaryKeyContext();
  const router = useRouter();

  const mutation = useMutation(fetchById, {
    onSuccess: (data) => {
      toSetSearchByPrimaryKeyContent(data);
      router.push(`/infracaocompleta/${data.id}`);
    },
    onError: (error: any) => {
      alert(`Erro ao tentar acessar a infração completa, por favor, tente novamente! \nErro: ${error.message}`);
      console.error(`Erro ao tentar acessar a infração completa, por favor, tente novamente! \nErro: ${error.message}`);
    },
  });

  const handleSearchByID = (id: number) => {
    mutation.mutate(id);
  };

  return { handleSearchByID };
}