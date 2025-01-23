'use client';
import { ModalProvider } from "./ModalContext";
import { SearchByPlateProvider } from "./SearchByPlateContext";

const AppProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <ModalProvider>
            <SearchByPlateProvider>
                {children}
            </SearchByPlateProvider>
        </ModalProvider>
    )
}

export default AppProvider;