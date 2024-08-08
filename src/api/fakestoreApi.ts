import { Product } from "../models/Product";

export async function getProducts(): Promise<Product[]> {
  const api = "https://fakestoreapi.com/products";
  const response = await fetch(api);
  return await response.json();
}

export async function getProductInformation(id?: string): Promise<Product> {
  const api = `https://fakestoreapi.com/products/${id}`;
  const response = await fetch(api);
  return await response.json();
}
