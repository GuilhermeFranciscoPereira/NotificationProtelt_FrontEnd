'use client'
import { useQuery } from 'react-query';
import axios from 'axios';
import Image from 'next/image';
import style from './GetAllInfringiment.module.css';
import ButtonsHooks from '@/hooks/ButtonsHooks';

type infringimentsProps = {
    autoDaInfracao: number;
    placa: string;
    municipio: string;
    uf: string;
    marcaModelo: string;
    cor: string;
    especieTipo: string;
    localDaInfracao: string;
    nomeCondutor: string;
    proprietario: string;
    quadraLote: string;
    naturezaDoVeiculo: string;
    grauDaInfracao: string;
    medicaoRealizadaKMH: number;
    fotoInfracao: string;
    dataHoraDaInfracao: string;
    valor: number;
}

export default function GetAllInfringiment() {
    const {showTheFullInfringement, editAndDeleteInfringement} = ButtonsHooks();
    const { data, isFetching } = useQuery<Array<infringimentsProps>>('infringimentsFetch', async () => {
        const response = await axios.get('http://localhost:7777/allInfringement');
        return response.data;
    }, { refetchOnWindowFocus: false });

    return (
        <>
            {isFetching && <h1 className={style.loading}>Carregando...</h1>}
            {data?.map((infringement, index) => (
                <div className={style.cardInfringementDiv} key={index}>
                    <div className='driverInformations'>
                        <h1>Placa: {infringement.placa}</h1>
                        <p>Velocidade: {infringement.medicaoRealizadaKMH} KM/H</p>
                        <p>Quadra e lote: {infringement.quadraLote}</p>
                    </div>
                    {<Image
                        src={`/uploads/${infringement.placa}${infringement.fotoInfracao}`}
                        height={200}
                        width={200}
                        alt={`Foto da infração junto da placa ${infringement.placa}`}
                        quality={100}
                    />}
                    <button onClick={() => showTheFullInfringement(infringement.placa)}>Visualizar infração completa</button>
                    <button onClick={() => editAndDeleteInfringement(infringement.placa)}>EDITAR / DELETAR</button>
                </div>
            ))}
        </>
    );
}