import { createContext, ReactNode, useContext, useState } from "react";

type ModalContextProps = {
    modalValue: boolean;
    modalContent: ReactNode;
    toSetModalContent: (content: ReactNode) => void;
    toggleModal: () => void;
}

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

const ModalProvider = ({children}: {children: React.ReactNode}) => {
    const [modalValue, setModalValue] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<ReactNode>();

    function toggleModal() {
        setModalValue(!modalValue);
    }

    function toSetModalContent(content: ReactNode) {
        setModalContent(content);
    }
    
    return (
        <ModalContext.Provider value={{modalValue, modalContent, toSetModalContent, toggleModal}}>
            {children}
        </ModalContext.Provider>
    )
}

//This function below is to use the UseContext here, and to not need use 'use client' where call this context and to use 'use client' in the AppProvider.tsx;
function useModalContext() {
    const useModalContext = useContext(ModalContext);
    return useModalContext;
}

export {ModalProvider, useModalContext};