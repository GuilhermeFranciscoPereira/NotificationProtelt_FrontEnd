import useButtonsHooks from '@/hooks/Buttons/useButtonsHooks';
import style from './GetAllInfringiment.module.css';
import useGetById from '../useGetById';
import useGetAllInfringiment from '.';
import Image from 'next/image';

export default function GetAllInfringiment(): React.ReactNode {
    const {isFetching, data} = useGetAllInfringiment();
    const {editAndDeleteInfringement} = useButtonsHooks();
    const {handleSearchByID} = useGetById();
    
    return (
        <>
            {isFetching && <h1 className={style.loading}>Carregando...</h1>}
            {data?.map((infringement, index) => (
                <div className={style.cardInfringementDiv} key={index}>
                    <div className='driverInformations'>
                        <h1>Placa: <span style={{textTransform: "uppercase"}}>{infringement.placa}</span></h1>
                        <p>Velocidade: <span style={{textTransform: "uppercase"}}>{infringement.medicaoRealizadaKMH} KM/H </span></p>
                        <p>Quadra e lote: <span style={{textTransform: "uppercase"}}>{infringement.quadraLote}</span></p>
                    </div>
                    {<Image
                        src={`/uploads/${infringement.placa}${infringement.fotoInfracao}`}
                        height={200}
                        width={200}
                        alt={`Foto da infração junto da placa ${infringement.placa}`}
                        quality={100}
                    />}
                    <button onClick={() => handleSearchByID(infringement.autoDaInfracao)}>Visualizar infração completa</button>
                    <button onClick={() => editAndDeleteInfringement(infringement.autoDaInfracao, infringement.placa)}>EDITAR / DELETAR</button>
                </div>
            ))}
        </>
    );
}