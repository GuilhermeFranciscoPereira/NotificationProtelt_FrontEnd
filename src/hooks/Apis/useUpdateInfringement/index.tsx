import { useSearchByIdContext } from '@/contexts/SearchByIdContext';
import { useToastContext } from '@/contexts/ToastContext';
import { useModalContext } from '@/contexts/ModalContext';
import { zodResolver } from '@hookform/resolvers/zod';
import useGetByPlate from '../Filters/useGetByPlate';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import * as z from 'zod';

const formSchema = z.object({
    placa: z.string().regex(/^[A-Za-z]{3}[0-9]{1}[A-Za-z]{1}[0-9]{2}$/, { message: 'Formato de placa inválido, deve ser: ABC1D23' }),
    dataEnvio: z.string().optional(),
    municipio: z.string().regex(/^[A-Za-zÀ-ÿ\s]+$/, { message: 'Digite apenas letras para o município' }),
    uf: z.string().length(2, { message: 'UF deve ter 2 caracteres' }).regex(/^[A-Za-z]{2}$/, { message: 'Digite uma UF válida (duas letras)' }),
    marcaModelo: z.string(),
    cor: z.string().regex(/^[A-Za-zÀ-ÿ\s]+$/, { message: 'Digite apenas letras' }),
    especieTipo: z.string().regex(/^[A-Za-zÀ-ÿ\s]+$/, { message: 'Digite apenas letras' }),
    localDaInfracao: z.string().regex(/^[A-Za-zÀ-ÿ\s]+$/, { message: 'Digite apenas letras' }),
    nomeCondutor: z.string().refine(value => value === "" || /^[A-Za-zÀ-ÿ\s]+$/.test(value), {message: 'Digite apenas letras',}).optional(),
    proprietario: z.string().refine(value => value === "" || /^[A-Za-zÀ-ÿ\s]+$/.test(value), {message: 'Digite apenas letras',}).optional(),      
    quadraLote: z.string().refine(value => value === "" || /^[Qq]\d [Ll]\d$/.test(value), {message: 'Formato de quadra e lote inválido, deve ser: Q1 L1 (Letra Q, um número, espaço, Letra L e outro número)',}).optional(),
    naturezaDoVeiculo: z.string().refine(value => value === "" || /^[A-Za-zÀ-ÿ\s]+$/.test(value), {message: 'Digite apenas letras',}).optional(),
    medicaoRealizadaKMH: z.string().or(z.number()),
    dataHoraDaInfracao: z.string(),
    valor: z.string().or(z.number()),
    fotoInfracao: z.instanceof(File).optional(),
});

type FormDataProps = z.infer<typeof formSchema>;

const api = axios.create({
  baseURL: 'http://localhost:7777/',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

async function useFormHook(formDataWithFile: { formData: FormDataProps, file: File | null, SearchByIdContent: any }) {
  const { formData, file, SearchByIdContent } = formDataWithFile;
  const form = new FormData();

  Object.keys(formData).forEach((key) => {
    const value = formData[key as keyof FormDataProps];
    if (key === 'dataEnvio' && !value) {
      form.append(key, SearchByIdContent[0].dataEnvio || 'null');
    } else if (key === 'dataHoraDaInfracao' && !value) {
      form.append(key, SearchByIdContent[0].dataHoraDaInfracao || 'DataAndHoraVazio');
    } else if (value !== undefined) {
      form.append(key, value as string | Blob);
    }
  });

  if (file) {
    form.append('fotoInfracao', file);
    form.append('fotoInfracaoOld', SearchByIdContent[0].fotoInfracao)
  } else {
    form.append('fotoInfracaoOld', SearchByIdContent[0].fotoInfracao)
  }

  const response = await api.patch(`/allInfringement/PATCH/${SearchByIdContent[0].autoDaInfracao}`, form);
  return response.data;
}

export default function useUpdateInfringement() {
  const [file, setFile] = useState<File | null>(null);
  const {toggleModal, modalState} = useModalContext();
  const {SearchByIdContent} = useSearchByIdContext();
  const {handleClearFilter} = useGetByPlate();
  const {showToast} = useToastContext();

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormDataProps>({
    resolver: zodResolver(formSchema),
  });

  const mutation = useMutation(useFormHook, {
    onSuccess: () => {
      modalState ? toggleModal() : false;
      showToast({message: "Infração atualizada com sucesso!", backgroundColor: "#008000"});
      handleClearFilter();
    },
    onError: (error: any) => {
      showToast({message: `Não foi possível atualizar a infração. \nErro ${error.message}`, backgroundColor: "#d83734"});
      handleClearFilter();
    },
  });

  const onSubmit = (data: FormDataProps) => {
    handleClearFilter(true);
    mutation.mutate({ formData: data, file, SearchByIdContent });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setValue('fotoInfracao', selectedFile);
    }
  };

  return { handleSubmit, onSubmit, register, handleFileChange, SearchByIdContent, errors };
}
