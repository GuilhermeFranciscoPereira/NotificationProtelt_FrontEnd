import { useFiltersContext } from '@/contexts/FiltersContext';
import useButtonsHooks from '@/hooks/Buttons/useButtonsHooks';
import useGetById from '@/hooks/Apis/useGetById/index';
import Image from 'next/image';
import styles from '@/hooks/Apis/useGetAllInfringiment/GetAllInfringiment.module.css'

export default function GetByPlateReturn(): React.ReactNode {
    const {FiltersContent} = useFiltersContext();
    const {editAndDeleteInfringement} = useButtonsHooks();
    const {handleSearchByID} = useGetById();

    return (
        <>
        {FiltersContent.length === 0 && <h1 className={styles.loading}>Não existe nenhuma infração com esse filtro!</h1>}
        {FiltersContent?.map((infringement, index) => (
            <div className={styles.cardInfringementDiv} key={index}>
                <div className='driverInformations'>
                    <h1>Placa: <span style={{textTransform: "uppercase"}}>{infringement.placa}</span></h1>
                    <p>Velocidade: <span style={{textTransform: "uppercase"}}>{infringement.medicaoRealizadaKMH} KM/H </span></p>
                    <p>Quadra e lote: <span style={{textTransform: "uppercase"}}>{infringement.quadraLote}</span></p>
                </div>
                {<Image
                    src={`/uploads/${infringement.fotoInfracao}`}
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