import { useSearchByPlateContext } from '@/contexts/SearchByPlateContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as z from 'zod';
import axios from 'axios';

const formSchema = z.object({
  placa: z.string().regex(/^[A-Za-z]{3}[0-9]{1}[A-Za-z]{1}[0-9]{2}$/, { message: 'Formato de placa inválido, deve ser: ABC1D23' }),
});

type formDatasProps = z.infer<typeof formSchema>;

const api = axios.create({
  baseURL: 'http://localhost:7777/',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

async function submitForm(formDatas: formDatasProps) {
    try {
        const form = new FormData();
        Object.keys(formDatas).forEach((key) => {
            const value = formDatas[key as keyof formDatasProps];
            if (value !== undefined) {
                form.append(key, value as string);
            }
        });
        const response = await api.post(`allInfringement/${formDatas.placa}`, form);
        return response.data;
    } catch (error) {
        alert(`Não foi possível buscar o veículo com essa placa!`);
        console.log(`Não foi possível buscar o veículo com essa placa!`);
    }
}

export default function useSearchByPlate() {
    const { toSetSearchByPlateContent } = useSearchByPlateContext();
    const { register, handleSubmit } = useForm<formDatasProps>({
        resolver: zodResolver(formSchema),
    });
    const router = useRouter();

    const mutation = useMutation(submitForm, {
        onSuccess: (data) => {
            toSetSearchByPlateContent(data);
            router.push('/infracoes');
        },
        onError: (error: any) => {
            alert(`Erro ao enviar o formulário, por favor, tente novamente! \nErro: ${error.message}`);
            console.error(`Erro ao enviar o formulário, por favor, tente novamente! \nErro: ${error.message}`);
        },
    });

    function onSubmit(data: formDatasProps) {
        mutation.mutate(data);
    }

    return { handleSubmit, onSubmit, register, mutation };
}