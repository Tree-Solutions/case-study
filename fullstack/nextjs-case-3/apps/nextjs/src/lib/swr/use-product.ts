import useSWR from "swr";

import { Product } from "@case-study/db";

import { fetcher } from "./utils";

export const useProduct = (id: number) => {
  return useSWR<Product>(`/api/product/${id}`, fetcher);
};
