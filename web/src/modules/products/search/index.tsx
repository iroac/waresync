import { createAsync } from "@solidjs/router";
import { For, Suspense } from "solid-js";
import { fetchProduct } from "../../../api/products";
import InputField from "../../../components/atoms/InputField";
import { ProductCard } from "./components/productCard";

function ProductsSearch() {
  const products = createAsync(() => fetchProduct(12));

  return (
    <div class="flex flex-col w-full h-screen">
      <div class="flex flex-row justify-start items-center w-full h-20 shadow-sm bg-white-500 px-4 ">
        <h1 class="text-black font-medium text-[30px]">All Product List</h1>
        <InputField
          labelButton="Search"
          class="w-[400px] ml-6 "
          placeholder="Search Products"
          search
        />
      </div>

      <Suspense fallback={<p>Loading...</p>} >
        <div class="flex flex-wrap justify-center items-center gap-4 overflow-y-auto flex-grow p-4">
            <For each={products()?.data}>
              {(product) => <ProductCard product={product} />}
            </For>
          </div>
      </Suspense>

    </div>
  );
}

export default ProductsSearch;
