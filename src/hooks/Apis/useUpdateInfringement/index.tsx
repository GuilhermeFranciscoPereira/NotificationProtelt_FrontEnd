'use client';
import { useEditAndDeleteContext } from '@/contexts/EditAndDeleteContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import * as z from 'zod';
import Toast from "@/components/Toast/index";

const formSchema = z.object({
    placa: z.string().regex(/^[A-Za-z]{3}[0-9]{1}[A-Za-z]{1}[0-9]{2}$/, { message: 'Formato de placa inválido, deve ser: ABC1D23' }),
    dataEnvio: z.string().optional(),
    municipio: z.string().regex(/^[A-Za-zÀ-ÿ\s]+$/, { message: 'Digite apenas letras para o município' }),
    uf: z.string().length(2, { message: 'UF deve ter 2 caracteres' }).regex(/^[A-Za-z]{2}$/, { message: 'Digite uma UF válida (duas letras)' }),
    marcaModelo: z.string(),
    cor: z.string().regex(/^[A-Za-zÀ-ÿ\s]+$/, { message: 'Digite apenas letras' }),
    especieTipo: z.string().regex(/^[A-Za-zÀ-ÿ\s]+$/, { message: 'Digite apenas letras' }),
    localDaInfracao: z.string().regex(/^[A-Za-zÀ-ÿ\s]+$/, { message: 'Digite apenas letras' }),
    nomeCondutor: z.string().optional(),
    proprietario: z.string().optional(),
    quadraLote: z.string().optional(),
    naturezaDoVeiculo: z.string().optional(),
    medicaoRealizadaKMH: z.string().or(z.number()),
    dataHoraDaInfracao: z.string(),
    valor: z.string().or(z.number()),
    fotoInfracao: z.instanceof(File).refine((file) => file.size > 0, { message: 'A imagem da infração é obrigatória' }),
});

type FormDataProps = z.infer<typeof formSchema>;

const api = axios.create({
  baseURL: 'http://localhost:7777/',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

async function useFormHook(formDataWithFile: { formData: FormDataProps, file: File | null }) {
  const {autoDaInfracaoValue} = useEditAndDeleteContext();
  const { formData, file } = formDataWithFile;
  const form = new FormData();

  Object.keys(formData).forEach((key) => {
    const value = formData[key as keyof FormDataProps];
    if (value !== undefined) {
      form.append(key, value as string | Blob);
    }
  });

  if (file) {
    form.append('fotoInfracao', file);
  }

  try {
    const response = await api.patch(`/allInfringement/PATCH/${autoDaInfracaoValue}`, form);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar o formulário:', error);
    throw new Error('Erro ao atualizar o formulário.');
  }
}

export default function useUpdateInfringement() {
  const [file, setFile] = useState<File | null>(null);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormDataProps>({
    resolver: zodResolver(formSchema),
  });

  const mutation = useMutation(useFormHook, {
    onSuccess: (data) => {
      <Toast message={`Formulário atualizado com sucesso!`} backgroundColor='lightgreen' duration={3000}></Toast>
      return data;
    },
    onError: (error: any) => {
      <Toast message={`Não foi possível atualizar o formulário. \nErro: ${error.message}`} backgroundColor='rgba(255, 0, 0, 0.5)'></Toast>
    },
  });

  const onSubmit = (data: FormDataProps) => {
    mutation.mutate({ formData: data, file });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setValue('fotoInfracao', selectedFile);
    }
  };

  return { handleSubmit, onSubmit, register, errors, handleFileChange };
}
