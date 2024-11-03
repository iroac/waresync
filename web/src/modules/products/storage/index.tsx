import { createStore } from "solid-js/store"
import { Products } from "../../../api/products/getProducts"

interface StoreProducts {
  limit: number
  products: Products[]
}
 
export const [storeProducts, setStoreProducts] = createStore<StoreProducts>({
  limit: 10,
  products: []
})

