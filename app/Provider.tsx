"use client";

import { useState } from "react";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import {
  ReactQueryDevtools,
} from "@tanstack/react-query-devtools";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({
  children,
}: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // داده تا 1 دقیقه Fresh محسوب می‌شود
            staleTime: 60 * 1000,

            // Cache بعد از 5 دقیقه بلااستفاده بودن پاک می‌شود
            gcTime: 5 * 60 * 1000,

            // وقتی کاربر به تب برمی‌گردد درخواست خودکار نزن
            refetchOnWindowFocus: false,

            // بعد از برگشت اینترنت دوباره درخواست بزن
            refetchOnReconnect: true,

            // هنگام Mount در صورت stale بودن دوباره بگیر
            refetchOnMount: true,

            // اگر درخواست شکست خورد، 2 بار Retry
            retry: 2,

            // فاصله Retryها
            retryDelay: (attemptIndex) =>
              Math.min(1000 * 2 ** attemptIndex, 30000),
          },

          mutations: {
            // POST / PUT / DELETE خودکار Retry نشوند
            retry: 0,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}

      <ReactQueryDevtools
        initialIsOpen={false}
      />
    </QueryClientProvider>
  );
}