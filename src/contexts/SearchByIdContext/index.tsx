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

type SearchByIdContextProps = {
    SearchByIdContent: Array<infringimentsProps>;
    toSetSearchByIdContent: (content: Array<infringimentsProps>) => void;
}

const SearchByIdContext = createContext<SearchByIdContextProps>({} as SearchByIdContextProps);

const SearchByIdProvider = ({children}: {children: React.ReactNode}): React.ReactNode => {
    const [SearchByIdContent, setSearchByIdContent] = useState<Array<infringimentsProps>>([]);

    function toSetSearchByIdContent(content: Array<infringimentsProps>) {
        setSearchByIdContent(content);
    }
    
    return (
        <SearchByIdContext.Provider value={{SearchByIdContent, toSetSearchByIdContent}}>
            {children}
        </SearchByIdContext.Provider>
    )
}

function useSearchByIdContext() {
    return useContext(SearchByIdContext);
}

export {SearchByIdProvider, useSearchByIdContext};