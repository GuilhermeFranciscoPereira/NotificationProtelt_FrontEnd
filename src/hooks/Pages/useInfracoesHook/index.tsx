import { useSearchByPlateContext } from '@/contexts/SearchByPlateContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios from 'axios';
import * as z from 'zod';

const formSchema = z.object({
  placa: z.string().regex(/^[A-Za-z]{3}[0-9]{1}[A-Za-z]{1}[0-9]{2}$/, { message: 'Formato de placa inválido, deve ser: ABC1D23' }),
});

type FormData = z.infer<typeof formSchema>;

const api = axios.create({
  baseURL: 'http://localhost:7777/',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

async function submitForm(formData: FormData) {
  try {
    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      const value = formData[key as keyof FormData];
      if (value !== undefined) {
        form.append(key, value as string);
      }
    });

    const response = await api.post(`/allInfringement/${formData.placa}`, form);
    return response.data;
  } catch (error) {
    alert(`Erro ao buscar placa, por favor, tente novamente!`);
    console.error(error);
    throw error;
  }
}

export default function useInfracoesHook() {
  const { SearchByPlateActive, toSetsearchByPlateActive, toSetSearchByPlateContent } = useSearchByPlateContext();

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const mutation = useMutation(submitForm, {
    onSuccess: (data) => {
      toSetSearchByPlateContent(data);
    },
    onError: (error: any) => {
      alert(`Erro ao enviar o formulário, por favor, tente novamente! \nErro: ${error.message}`);
      console.error(`Erro ao enviar o formulário, por favor, tente novamente! \nErro: ${error.message}`);
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  return { SearchByPlateActive, toSetsearchByPlateActive, register, handleSubmit, onSubmit, mutation };
}