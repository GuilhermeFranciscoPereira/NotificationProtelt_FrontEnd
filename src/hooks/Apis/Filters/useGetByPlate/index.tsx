import { useFiltersContext } from '@/contexts/FiltersContext';
import { useModalContext } from '@/contexts/ModalContext';
import { useToastContext } from '@/contexts/ToastContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useState } from 'react';
import axios from 'axios';
import * as z from 'zod';

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
    const form = new FormData();
    Object.keys(formDatas).forEach((key) => {
        const value = formDatas[key as keyof formDatasProps];
        if (value !== undefined) {
            form.append(key, value as string);
        }
    });
    const response = await api.post(`allInfringement/${formDatas.placa}`, form);
    return response.data;
}

export default function useGetByPlate() {
    const { FiltersHowActive, toSetFiltersHowActive, toSetFiltersContent } = useFiltersContext();
    const [inputValue, setInputValue] = useState<string>('');
    const {toggleModal, modalState} = useModalContext();
    const {showToast} = useToastContext();
    const router = useRouter();
    const { register, handleSubmit } = useForm<formDatasProps>({
        resolver: zodResolver(formSchema),
    });

    const mutation = useMutation(submitForm, {
        onSuccess: (data) => {
            toSetFiltersContent(data);
            modalState ? toggleModal() : false;
            router.push('/infracoes');
        },
        onError: (error: any) => {
            showToast({message: `Não foi possível encontrar a placa. Erro: ${error.message}`, backgroundColor: "#d83734"});
        },
    });

    function onSubmit(data: formDatasProps) {
        mutation.mutate(data);
    }

    function handleChangeInputValue(event: any) {
        setInputValue(event.target.value);
    }

    function handleClearFilter(filterState?: boolean) {
        toSetFiltersHowActive(filterState ? filterState : false);
        setInputValue('');
    }

    return { handleSubmit, onSubmit, register, handleClearFilter, handleChangeInputValue, inputValue, mutation, FiltersHowActive };
}