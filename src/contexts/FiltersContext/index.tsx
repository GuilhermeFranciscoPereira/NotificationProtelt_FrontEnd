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
    medicaoRealizadaKMH: number;
    fotoInfracao: string;
    dataHoraDaInfracao: string;
    valor: number;
}

type FiltersContextProps = {
    FiltersHowActive: boolean;
    FiltersContent: Array<infringimentsProps>;
    toSetFiltersContent: (content: Array<infringimentsProps>) => void;
    toSetFiltersHowActive: (state: boolean) => void;
}

const FiltersContext = createContext<FiltersContextProps>({} as FiltersContextProps);

const FiltersProvider = ({children}: {children: React.ReactNode}): React.ReactNode => {
    const [FiltersHowActive, setFiltersHowActive] = useState<boolean>(false);
    const [FiltersContent, setFiltersContent] = useState<Array<infringimentsProps>>([]);

    function toSetFiltersHowActive(state: boolean) {
        setFiltersHowActive(state);
    }

    function toSetFiltersContent(content: Array<infringimentsProps>) {
        setFiltersContent(content);
        setFiltersHowActive(true);
    }
    
    return (
        <FiltersContext.Provider value={{FiltersHowActive, FiltersContent, toSetFiltersContent, toSetFiltersHowActive}}>
            {children}
        </FiltersContext.Provider>
    )
}

function useFiltersContext() {
    return useContext(FiltersContext);
}

export {FiltersProvider, useFiltersContext};