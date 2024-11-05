import { verifyToken } from "@/features/management/auth";
import { useQuery } from "@tanstack/react-query";

export const useVerifyTokenQuery = () => {
  return useQuery({
    queryKey: ["verify"],
    queryFn: verifyToken,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};
