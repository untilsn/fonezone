import { brandService } from "../../services/brandService";
import { useApiHandler } from "./useApiHandler";

export const useBrands = () => {
  const { useMutationHook, useQueryHook } = useApiHandler();

  const useGetAllBrands = (params) => {
    const allBrand = useQueryHook(["brands", params], () =>
      brandService.getAll(params),
    );
    return allBrand;
  };

  const useCreateBrand = (options) => {
    return useMutationHook(({ ...data }) => brandService.create(data), options);
  };

  const useUpdateBrand = (options) => {
    return useMutationHook(
      ({ id, ...data }) => brandService.update(id, data),
      options,
    );
  };

  const useToogleActiveBrand = (options) => {
    return useMutationHook(({ id }) => brandService.toggleActive(id), options);
  };

  const useDeleteBrand = (options) => {
    return useMutationHook(({ id }) => brandService.delete(id), options);
  };

  return {
    useGetAllBrands,
    useCreateBrand,
    useUpdateBrand,
    useToogleActiveBrand,
    useDeleteBrand,
  };
};
