import { useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../api/apiClient";
import { getAllBrandsApi } from "../api/brandsApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useBrands = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getAllBrands = async () => {
    const data = await getAllBrandsApi();
    console.log(data, "brnad hôk");
    return data;
  };

  return { getAllBrands };
};
