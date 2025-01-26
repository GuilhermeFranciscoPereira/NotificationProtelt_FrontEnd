import { useSearchByPlateContext } from '@/contexts/SearchByPlateContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as z from 'zod';
import axios from 'axios';
import Toast from '@/components/Toast';

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
        console.log(`Erro: ${error}`)
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
            <Toast message={`Placa encontrada com sucesso!`} backgroundColor='lightgreen' duration={3000}></Toast>
            router.push('/infracoes');
        },
        onError: (error: any) => {
            <Toast message={`Não foi possível encontrar a placa.`} backgroundColor='rgba(255, 0, 0, 0.5)'></Toast>
            console.log(`Não foi possível buscar o veículo com essa placa!`);
        },
    });

    function onSubmit(data: formDatasProps) {
        mutation.mutate(data);
    }

    return { handleSubmit, onSubmit, register, mutation };
}