import { useSearchByPlateContext } from '@/contexts/SearchByPlateContext';
import ButtonsHooks from '@/hooks/ButtonsHooks';
import Image from 'next/image';
import style from '../useGetAllInfringiment.tsx/GetAllInfringiment.module.css';

export default function GetByPlate() {
    const {SearchByPlateContent} = useSearchByPlateContext();
    const {showTheFullInfringement, editAndDeleteInfringement} = ButtonsHooks();

    return (
        <>
            {SearchByPlateContent.length === 0 && <h1 className={style.loading}>Não existe nenhuma infração com essa placa!</h1>}
            {SearchByPlateContent?.map((infringement, index) => (
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