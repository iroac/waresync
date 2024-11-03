import { useQueryClient } from '@tanstack/solid-query'
import { For } from 'solid-js'
import { getProducts } from '../../../api/products/getProducts'
import { ProductCard } from '../search/components/productCard'
import { setStoreProducts } from '../storage'

function ProductsCatalog() {
  const query = useQueryClient()
  const products = query.getQueryData(getProducts().queryKey)

  const resetLimit = () => {
    //@ts-ignore
    setStoreProducts("limit", (item) => item + 1)
    query.refetchQueries({ queryKey: getProducts().queryKey})
  }
  

  return (
    <div class='flex flex-row w-full h-full flex-wrap gap-2 overflow-y-auto p-2 mt-2 ' >
      <For each={products}>
              {(product) => <ProductCard product={product} />}
      </For>
      
      <button type='button' onClick={resetLimit}>Aumentar Limite</button>
    </div>
  )
}

export default ProductsCatalog
