'use client';
import { ModalProvider } from "./ModalContext";
import { SearchByPlateProvider } from "./SearchByPlateContext";
import { SearchByPrimaryKeyProvider } from "./SearchByPrimaryKey";

const AppProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <ModalProvider>
            <SearchByPlateProvider>
                <SearchByPrimaryKeyProvider>
                    {children}
                </SearchByPrimaryKeyProvider>
            </SearchByPlateProvider>
        </ModalProvider>
    )
}

export default AppProvider;