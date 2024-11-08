"use client";

import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const ClientQueryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const queryClient = useRef<QueryClient>();

  if (!queryClient.current) {
    queryClient.current = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000, // 1 seconds
        },
      },
    });
  }

  return (
    <QueryClientProvider client={queryClient.current}>
      {children}
    </QueryClientProvider>
  );
};
