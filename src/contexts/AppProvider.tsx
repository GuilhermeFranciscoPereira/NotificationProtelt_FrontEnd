'use client';
import { ModalProvider } from "./ModalContext";

const AppProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <ModalProvider>
            {children}
        </ModalProvider>
    )
}

export default AppProvider;