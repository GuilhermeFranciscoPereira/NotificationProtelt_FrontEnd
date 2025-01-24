import ToQueryClientProvider from "@/services/queryClient";
import AppProvider from "@/contexts/AppProvider";
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
            {children}
          </body>
        </html>
      </ToQueryClientProvider>
    </AppProvider>
  );
}