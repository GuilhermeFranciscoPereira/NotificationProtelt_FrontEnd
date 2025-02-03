import { useFiltersContext } from '@/contexts/FiltersContext';
import { useToastContext } from '@/contexts/ToastContext';
import { useModalContext } from '@/contexts/ModalContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import SearchBySpeedRange from '@/components/Filters/SearchBySpeedRange';
import axios from 'axios';
import * as z from 'zod';

const speedFilterSchema = z.object({
  minSpeed: z.string().or(z.number()),
  maxSpeed: z.string().or(z.number()),
});

type SpeedFilterFormData = z.infer<typeof speedFilterSchema>;

const api = axios.create({
  baseURL: 'http://localhost:7777/',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

async function filterBySpeed(filterOptions: {minSpeed: number; maxSpeed: number; plate: string}) {
  const response = await api.post(`allInfringement/SPEEDFILTER/${filterOptions.plate}${filterOptions.maxSpeed}${filterOptions.minSpeed}${Math.random()*9999}`, filterOptions);
  return response.data;
}

export default function useGetBySpeedRange() {
  const { FiltersHowActive, FiltersContent, toSetFiltersContent} = useFiltersContext();
  const {toggleModal, toSetModalContent, modalState} = useModalContext();
  const {showToast} = useToastContext();
  const { register, handleSubmit, formState: { errors } } = useForm<SpeedFilterFormData>({
    resolver: zodResolver(speedFilterSchema),
  });

  const mutation = useMutation(filterBySpeed, {
    onSuccess: (data) => {
      toSetFiltersContent(data);
      showToast({message: "Infrações filtradas com sucesso!", backgroundColor: "#008000"});
      modalState ? toggleModal() : false;
    },
    onError: (error: any) => {
      showToast({message: `Não foi possível filtrar as informações. Erro: ${error.message}`, backgroundColor: "#d83734"});
    },
  });

  const onSubmit = (data: SpeedFilterFormData) => {
    const payload = {
      minSpeed: Number(data.minSpeed),
      maxSpeed: Number(data.maxSpeed),
      plate: FiltersHowActive ? FiltersContent[0]?.placa : 'undefined',
    };

    mutation.mutate(payload);
  };

  function activeModalToFilter() {
    toggleModal();
    toSetModalContent(<SearchBySpeedRange></SearchBySpeedRange>);
  }

  return { activeModalToFilter, handleSubmit, onSubmit, register, errors };
}