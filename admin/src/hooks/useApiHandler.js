import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useApiHandler = () => {
  const useQueryHook = (queryKey, queryFn, options = {}) => {
    return useQuery({
      queryKey,
      queryFn,
      ...options,
      onError: (err) => {
        toast.error(err?.response?.data?.message || "Lỗi tải dữ liệu!");
        //call back onSuccess thêm các hành động cho onSuccess
        if (options.onError) {
          options.onError(err);
        }

        console.log("lỗi gọi API", err);
      },
    });
  };

  const useMutationHook = (mutationFn, options = {}) => {
    return useMutation({
      mutationFn,
      ...options,
      onSuccess: (data) => {
        toast.success(data.message || "Thao tác thành công");
        //call back onSuccess thêm các hành động cho onSuccess
        if (options.onSuccess) {
          options.onSuccess(data);
        }
      },
      onError: (err) => {
        toast.error(
          err?.response?.data?.message || "Có lỗi xảy ra vui lòng thử lại!",
        );
        //call back onError thêm các hành động cho onError
        if (options.onError) {
          options.onError(err);
        }
        console.log("lỗi chức năng API", err);
      },
    });
  };
  return {
    useQueryHook,
    useMutationHook,
  };
};
