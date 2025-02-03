import ToQueryClientProvider from "@/services/queryClient";
import AppProvider from "@/contexts/AppProvider";
import ModalComponent from "@/components/Modal";
import Toast from "@/components/Toast";
import type { Metadata } from "next";
import '../styles/GlobalStyles.css';

export const metadata: Metadata = {
  title: "Protelt - Sistema de infração",
  description: "Sistema para gerar notificações de autuação por infração de velocidade máxima permitida",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>): React.ReactNode {
  return (
    <AppProvider>
      <ToQueryClientProvider>
        <html lang="pt-br">
          <body>
            <Toast></Toast> {/* Rendered only when invoked and set to true, and disappears when set to false */}
            <ModalComponent></ModalComponent> {/* Rendered only when invoked and set to true, and disappears when set to false */}
            {children}
          </body>
        </html>
      </ToQueryClientProvider>
    </AppProvider>
  );
}