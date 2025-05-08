import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useMutationHook = (fnCallback, option = {}) => {
  const mutation = useMutation({
    mutationFn: fnCallback,
    onSuccess: (res) => {
      toast.success(res.message || "success");
      // if (typeof option?.onSuccess === "function") {
      //   option.onSuccess(res); // gọi thêm logic tuỳ chỉnh
      // }
    },
    onError: (e) => {
      const errorMessage =
        e?.response?.data?.message || "Có lỗi xảy ra, vui lòng thử lại";
      toast.error(errorMessage);
      // if (typeof option?.onError === "function") {
      //   option.onError(err);
      // }
      console.log(e);
    },
    option,
  });
  return mutation;
};
