import { queryOptions } from '@tanstack/solid-query';
import axios from 'axios';
import { storeProducts } from '../../modules/products/storage';

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
    return response.data
  }

const res = queryOptions({
      queryKey: ["products"],
      queryFn: fetchProducts,
      staleTime:  1000 * 60 * 10, // 10 minutes 
      throwOnError: true
    })

    return { ...res,  }
  }
