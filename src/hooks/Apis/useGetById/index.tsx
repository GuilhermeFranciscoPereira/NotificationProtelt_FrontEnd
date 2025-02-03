import { useSearchByIdContext } from '@/contexts/SearchByIdContext';
import { useToastContext } from '@/contexts/ToastContext';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:7777/',
});

type FetchByIdVariablesProps = {
  id: number;
  callerType?: string;
}

async function fetchById({id}: FetchByIdVariablesProps) {
  const response = await api.post(`/allInfringement/ID/${id}`);
  return response.data;
}

export default function useGetById() {
  const { toSetSearchByIdContent } = useSearchByIdContext();
  const {showToast} = useToastContext();
  const router = useRouter();

  const mutation = useMutation(fetchById, {
    onSuccess: (data, variables) => {
      toSetSearchByIdContent(data);
      if (variables?.callerType === 'editSection') {
        false;
      } else {
        router.push(`/infracaocompleta/${data.id}`);
      }
    },
    onError: (error: any) => {
      showToast({message: `Não foi possível mostrar a infração completa. Erro: ${error.message}`, backgroundColor: "#d83734"});
    },
  });

  const handleSearchByID = (id: number, callerType?: string) => {
    mutation.mutate({id, callerType});
  };

  return { handleSearchByID };
}