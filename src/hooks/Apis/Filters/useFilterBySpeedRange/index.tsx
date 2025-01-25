'use client';
import { useSearchByPlateContext } from '@/contexts/SearchByPlateContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as z from 'zod';
import { useModalContext } from '@/contexts/ModalContext';
import SearchBySpeedRange from '@/components/Filters/SearchBySpeedRange';
import Toast from "@/components/Toast/index";

const speedFilterSchema = z.object({
  minSpeed: z.number().nonnegative({ message: 'Velocidade mínima deve ser um número positivo' }),
  maxSpeed: z.number().nonnegative({ message: 'Velocidade máxima deve ser um número positivo' }),
});

type SpeedFilterFormData = z.infer<typeof speedFilterSchema>;

const api = axios.create({
    baseURL: 'http://localhost:7777/',
});

async function filterBySpeed(payload: {minSpeed: number; maxSpeed: number; plate?: string}) {
    try {
        const response = await api.post('/allInfringement/SPEEDFILTER', payload);
        return response.data;
    } catch (error) {
        console.error('Erro ao filtrar infrações:', error);
        throw new Error('Erro ao filtrar infrações');
    }
}

export default function useFilterBySpeedRange() {
  const { SearchByPlateActive, SearchByPlateContent } = useSearchByPlateContext();
  const {toggleModal, toSetModalContent} = useModalContext();
  const { register, handleSubmit, formState: { errors } } = useForm<SpeedFilterFormData>({
    resolver: zodResolver(speedFilterSchema),
  });

  const mutation = useMutation(filterBySpeed, {
    onSuccess: (data) => {
      <Toast message={`Infrações filtradas com sucesso!`} backgroundColor='lightgreen' duration={3000}></Toast>
    },
    onError: (error: any) => {
      <Toast message={`Não foi possível filtrar as informações. \nErro: ${error.message}`} backgroundColor='rgba(255, 0, 0, 0.5)'></Toast>
    },
  });

  const onSubmit = (data: SpeedFilterFormData) => {
    const payload = {
      minSpeed: data.minSpeed,
      maxSpeed: data.maxSpeed,
      plate: SearchByPlateActive ? SearchByPlateContent[0].placa : undefined,
    };

    mutation.mutate(payload);
  };

  function activeModalToFilter() {
    toggleModal();
    toSetModalContent(<SearchBySpeedRange></SearchBySpeedRange>);
  }

  return { activeModalToFilter, handleSubmit, onSubmit, register, errors };
}