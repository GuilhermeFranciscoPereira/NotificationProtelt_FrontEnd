import { useSearchByPlateContext } from '@/contexts/SearchByPlateContext';
import useButtonsHooks from '@/hooks/Buttons/useButtonsHooks';
import useGetById from '../useGetById';
import Image from 'next/image';
import style from '../useGetAllInfringiment/GetAllInfringiment.module.css';

export default function SearchByPlateReturn(): React.ReactNode {
    const {SearchByPlateContent} = useSearchByPlateContext();
    const {editAndDeleteInfringement} = useButtonsHooks();
    const {handleSearchByID} = useGetById();

    return (
        <>
            {SearchByPlateContent.length === 0 && <h1 className={style.loading}>Não existe nenhuma infração com essa placa!</h1>}
            {SearchByPlateContent?.map((infringement, index) => (
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