import type { Metadata } from "next";
import '../styles/GlobalStyles.css'

export const metadata: Metadata = {
  title: "Protelt - Sistema de infração",
  description: "Sistema para gerar notificações de autuação por infração de velocidade máxima permitida",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}