import axios from "axios";
import { apiClient } from "../../api/apiClient";
import { useQuery } from "@tanstack/react-query";

const fetchBrands = async () => {
  const res = await apiClient.get("/api/brands");
  return res.data;
};

export const useBrand = () => {
  return useQuery({
    queryKey: ["brands"],
    queryFn: fetchBrands,
    staleTime: 5 * 60 * 1000,
  });
};
