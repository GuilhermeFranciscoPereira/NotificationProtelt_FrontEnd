import { createContext, useContext, useState } from "react";

type EditAndDeleteContextProps = {
    autoDaInfracaoValue: string;
    toSetAutoDaInfracaoValue(autoDaInfracao: number): void;
}

const EditAndDeleteContext = createContext<EditAndDeleteContextProps>({} as EditAndDeleteContextProps);

const EditAndDeleteProvider = ({children}: {children: React.ReactNode}): React.ReactNode => {
    const [autoDaInfracaoValue, setAutoDaInfracaoValue] = useState<string>('');

    function toSetAutoDaInfracaoValue(autoDaInfracao: number) {
        const autoDaInfracaoToString = String(autoDaInfracao)
        setAutoDaInfracaoValue(autoDaInfracaoToString);
    }

    return (
        <EditAndDeleteContext.Provider value={{autoDaInfracaoValue, toSetAutoDaInfracaoValue}}>
            {children}
        </EditAndDeleteContext.Provider>
    )
}

function useEditAndDeleteContext() {
    return useContext(EditAndDeleteContext);
}

export {EditAndDeleteProvider, useEditAndDeleteContext};