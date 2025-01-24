import { useQuery } from 'react-query';
import axios from 'axios';

type infringimentsProps = {
    autoDaInfracao: number;
    placa: string;
    medicaoRealizadaKMH: number;
    quadraLote: string;
    fotoInfracao: string;
}

export default function useGetAllInfringiment() {
    const { data, isFetching } = useQuery<Array<infringimentsProps>>('infringimentsFetch', async () => {
        const response = await axios.get('http://localhost:7777/allInfringement');
        return response.data;
    }, { refetchOnWindowFocus: false });

    return {isFetching, data}
}