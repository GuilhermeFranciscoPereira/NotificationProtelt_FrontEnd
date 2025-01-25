'use client';
import { SearchByPrimaryKeyProvider } from "./SearchByPrimaryKey";
import { SearchByPlateProvider } from "./SearchByPlateContext";
import { EditAndDeleteProvider } from "./EditAndDeleteContext";
import { ModalProvider } from "./ModalContext";

const AppProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <ModalProvider>
            <SearchByPlateProvider>
                <SearchByPrimaryKeyProvider>
                    <EditAndDeleteProvider>
                        {children}
                    </EditAndDeleteProvider>
                </SearchByPrimaryKeyProvider>
            </SearchByPlateProvider>
        </ModalProvider>
    )
}

export default AppProvider;