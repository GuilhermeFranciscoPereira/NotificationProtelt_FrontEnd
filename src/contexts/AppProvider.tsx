'use client';
import { EditAndDeleteProvider } from "@/contexts/EditAndDeleteContext";
import { SearchByIdProvider } from "@/contexts/SearchByIdContext";
import { FiltersProvider } from "@/contexts/FiltersContext";
import { ModalProvider } from "@/contexts/ModalContext";
import { ToastProvider } from "@/contexts/ToastContext";

const AppProvider = ({children}: {children: React.ReactNode}): React.ReactNode => {
    return (
        <ModalProvider>
            <ToastProvider>
                <FiltersProvider>
                    <SearchByIdProvider>
                        <EditAndDeleteProvider>
                                {children}
                        </EditAndDeleteProvider>
                    </SearchByIdProvider>
                </FiltersProvider>
            </ToastProvider>
        </ModalProvider>
    )
}

export default AppProvider;