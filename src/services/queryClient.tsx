'use client';
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient: QueryClient = new QueryClient();

export default function ToQueryClientProvider({children}: {children: React.ReactNode}) {
    return (
        <>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
        </>
    )
}