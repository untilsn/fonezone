import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

/**
 * Custom React Query hook wrapper để chuẩn hóa xử lý API, toast và callback
 */
export const useApiHandler = () => {
  /**
   * Custom useQuery với xử lý lỗi toast và callback riêng
   */
  const useQueryHook = (queryKey, queryFn, options = {}) => {
    return useQuery({
      queryKey,
      queryFn,
      ...options,
      onError: (err) => {
        toast.error(err?.response?.data?.message || "Lỗi tải dữ liệu!");
        console.error("Lỗi gọi API:", err);

        if (typeof options.onError === "function") {
          options.onError(err);
        }
      },
    });
  };

  /**
   * Custom useMutation với xử lý toast, callback thành công/thất bại
   */
  const useMutationHook = (mutationFn, options = {}) => {
    return useMutation({
      mutationFn,
      ...options,
      onSuccess: (data, variables, context) => {
        toast.success(data?.message || "Thao tác thành công");

        if (typeof options.onSuccess === "function") {
          options.onSuccess(data, variables, context);
        }
      },
      onError: (err, variables, context) => {
        toast.error(
          err?.response?.data?.message || "Có lỗi xảy ra, vui lòng thử lại!",
        );
        console.error("Lỗi chức năng API:", err);

        if (typeof options.onError === "function") {
          options.onError(err, variables, context);
        }
      },
    });
  };

  return {
    useQueryHook,
    useMutationHook,
  };
};
