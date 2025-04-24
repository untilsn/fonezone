import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useQueryHook = (queryKey, queryFn, options = {}) => {
  return useQuery({
    queryKey,
    queryFn,
    ...options,
    onError: (err) => {
      const message = err?.data?.responseve?.message || "Lỗi gọi dữ liệu"
      toast.error(message)
    }
  })


};
