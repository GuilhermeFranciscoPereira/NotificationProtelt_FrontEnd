import { createContext, useContext, useState } from "react";

type infringimentsProps = {
    autoDaInfracao: number;
    dataEnvio: string,
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
    medicaoRealizadaKMH: number;
    fotoInfracao: string;
    dataHoraDaInfracao: string;
    valor: number;
}

type SearchByPrimaryKeyContextProps = {
    SearchByPrimaryKeyContent: Array<infringimentsProps>;
    toSetSearchByPrimaryKeyContent: (content: Array<infringimentsProps>) => void;
}


const SearchByPrimaryKeyContext = createContext<SearchByPrimaryKeyContextProps>({} as SearchByPrimaryKeyContextProps);

const SearchByPrimaryKeyProvider = ({children}: {children: React.ReactNode}): React.ReactNode => {
    const [SearchByPrimaryKeyContent, setSearchByPrimaryKeyContent] = useState<Array<infringimentsProps>>([]);

    function toSetSearchByPrimaryKeyContent(content: Array<infringimentsProps>) {
        setSearchByPrimaryKeyContent(content);
    }
    
    return (
        <SearchByPrimaryKeyContext.Provider value={{SearchByPrimaryKeyContent, toSetSearchByPrimaryKeyContent}}>
            {children}
        </SearchByPrimaryKeyContext.Provider>
    )
}

//This function below is to use the UseContext here, and to not need use 'use client' where call this context and to use 'use client' in the AppProvider.tsx;
function useSearchByPrimaryKeyContext() {
    const useSearchByPrimaryKeyContext = useContext(SearchByPrimaryKeyContext);
    return useSearchByPrimaryKeyContext;
}

export {SearchByPrimaryKeyProvider, useSearchByPrimaryKeyContext};