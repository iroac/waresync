import { useQueryClient } from '@tanstack/solid-query'
import { createSignal, For } from 'solid-js'
import { resetLimit } from '../../../api/products/getProducts'
import { ProductCard } from '../search/components/productCard'
import { storeProducts } from '../storage'


function ProductsCatalog() {
  const query = useQueryClient()
  const [limit, setLimit] = createSignal("15");
  

  return (
    <div class="flex flex-col w-full h-screen">
      <div class="flex flex-wrap justify-center items-center gap-4 overflow-y-auto flex-grow p-4">
      <For each={storeProducts.products}>
              {(product) => <ProductCard product={product} />}
      </For>
      </div>

      <input 
          class="w-[200px] ml-6 bg-white "
          value={limit()}
          // @ts-ignore
          onChange={(value) => setLimit(value.target.value)}
          placeholder="New limit" />
      <button type='button' onClick={() => resetLimit(Number(limit()), query)}>Aumentar Limite</button>
    </div>
  )
}

export default ProductsCatalog
