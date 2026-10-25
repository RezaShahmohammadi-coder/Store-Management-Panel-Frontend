"use client";

import { useQuery } from "@tanstack/react-query";
import { getCurrentAdmin } from "./getServise";

export function useCurrentAdmin() {
  return useQuery({
    queryKey: ["currentAdmin"],
    queryFn: getCurrentAdmin,
    retry: false,
  });
}