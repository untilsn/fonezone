import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

export const useMutationHook = (fnCallback) => {
  const mutation = useMutation({
    mutationFn: fnCallback,
    onSuccess: (res) => {
      console.log(res)
      toast.success(res.message || "success")
    },
    onError: (e) => {
      const errorMessage = e?.response?.data?.message || "Có lỗi xảy ra, vui lòng thử lại"
      toast.error(errorMessage)
      console.log(e)
    }
  })
  return mutation
}