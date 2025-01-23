'use client'
import { createContext, useContext, useState } from "react";

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

type SearchByPlateContextProps = {
    SearchByPlateActive: boolean;
    SearchByPlateContent: Array<infringimentsProps>;
    toSetSearchByPlateContent: (content: Array<infringimentsProps>) => void;
    toSetsearchByPlateActive: (state: boolean) => void;
}


const SearchByPlateContext = createContext<SearchByPlateContextProps>({} as SearchByPlateContextProps);

const SearchByPlateProvider = ({children}: {children: React.ReactNode}) => {
    const [SearchByPlateActive, setSearchByPlateActive] = useState<boolean>(false);
    const [SearchByPlateContent, setSearchByPlateContent] = useState<Array<infringimentsProps>>([]);

    function toSetsearchByPlateActive(state: boolean) {
        setSearchByPlateActive(state);
    }

    function toSetSearchByPlateContent(content: Array<infringimentsProps>) {
        setSearchByPlateContent(content);
        setSearchByPlateActive(true);
    }
    
    return (
        <SearchByPlateContext.Provider value={{SearchByPlateActive, SearchByPlateContent, toSetSearchByPlateContent, toSetsearchByPlateActive}}>
            {children}
        </SearchByPlateContext.Provider>
    )
}

//This function below is to use the UseContext here, and to not need use 'use client' where call this context and to use 'use client' in the AppProvider.tsx;
function useSearchByPlateContext() {
    const useSearchByPlateContext = useContext(SearchByPlateContext);
    return useSearchByPlateContext;
}

export {SearchByPlateProvider, useSearchByPlateContext};