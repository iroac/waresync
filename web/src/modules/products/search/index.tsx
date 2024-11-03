import { For, Suspense } from "solid-js";
import { ProductCard } from "./components/productCard";
import { createQuery } from "@tanstack/solid-query";
import { getProducts } from "../../../api/products/getProducts";
import { SearchHearder } from "./components/searchHeader";


function ProductsSearch() {
  const products = createQuery(() => getProducts())


  return (
    <div class="flex flex-col w-full h-screen">
      <SearchHearder />

      <Suspense fallback={<p>Loading...</p>} >
        <div class="flex flex-wrap justify-center items-center gap-4 overflow-y-auto flex-grow p-4">
            <For each={products?.data}>
              {(product) => <ProductCard product={product} />}
            </For>
          </div>
      </Suspense>

    </div>
  );
}

export default ProductsSearch;
