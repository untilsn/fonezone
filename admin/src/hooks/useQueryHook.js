import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useQueryHook = ({ queryKey, queryFn, options = {} }) => {
  return useQuery({
    queryKey,
    queryFn,
    ...options,
    onError: (err) => {
      const message = err?.response?.data?.message || "lỗi tải dữ liệu";
      toast.error(message);
      if (options.onError) options.onError(err);
    },
  });
};
