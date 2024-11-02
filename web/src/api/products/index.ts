import axios from 'axios';

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

export const fetchProduct = async (limit: number) => {
    const response = await axios.get<Products[]>(`https://fakestoreapi.com/products?limit=${limit}`);
    return response
  }