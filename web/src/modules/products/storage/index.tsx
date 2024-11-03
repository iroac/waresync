import { createStore } from "solid-js/store"

export const [storeProducts, setStoreProducts] = createStore({
  limit: 10,
})

