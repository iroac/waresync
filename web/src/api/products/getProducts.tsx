import { QueryClient, queryOptions } from '@tanstack/solid-query';
import axios from 'axios';
import { setStoreProducts, storeProducts } from '../../modules/products/storage';

export type Products = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
      rate: number
      count: number
    }
  }

export function getProducts() {
  const fetchProducts = async () => {
    const response = await axios.get<Products[]>(`https://fakestoreapi.com/products?limit=${storeProducts.limit || 3}`);
    setStoreProducts("products", response?.data || [])
    return response.data
  }

return queryOptions({
      queryKey: ["products"],
      queryFn: fetchProducts,
      staleTime:  1000 * 60 * 10, // 10 minutes 
      throwOnError: true
    })

  }

export const resetLimit = (newLimit: number, query: QueryClient) => {
    setStoreProducts("limit", () => newLimit)
    query.refetchQueries({ queryKey: ["products"]})
}
  


  // Funcao API 
  // Salve to global state store 
  // Access in external component using the store
  // Reset the query needs a external function
  // 