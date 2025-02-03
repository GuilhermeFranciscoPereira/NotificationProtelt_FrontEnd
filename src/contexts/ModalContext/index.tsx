import { createContext, ReactNode, useContext, useState } from "react";

type ModalContextProps = {
    modalState: boolean;
    modalContent: ReactNode;
    toSetModalContent: (content: ReactNode) => void;
    toggleModal: () => void;
}

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

const ModalProvider = ({children}: {children: React.ReactNode}): React.ReactNode => {
    const [modalState, setModalState] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<ReactNode>();

    function toggleModal() {
        setModalState(!modalState);
    }

    function toSetModalContent(content: ReactNode) {
        setModalContent(content);
    }
    
    return (
        <ModalContext.Provider value={{modalState, modalContent, toSetModalContent, toggleModal}}>
            {children}
        </ModalContext.Provider>
    )
}

function useModalContext() {
    return useContext(ModalContext);
}

export {ModalProvider, useModalContext};