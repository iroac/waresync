import { For, Match, Show, Switch, createResource } from "solid-js";
import InputField from "../../../components/atoms/InputField";
import { Products, fetchProduct } from "../../../api/products";
import { AiFillStar, AiFillShopping } from "solid-icons/ai";

function ProductsSearch() {
  const [products] = createResource(12, fetchProduct);

  return (
    <div class="flex flex-col w-full h-full justify-center items-center">
      <div class="flex flex-row justify-start items-center w-full h-20 shadow-sm bg-white-500 px-4 ">
        <h1 class="text-black font-medium text-[30px]">All Product List</h1>
        <InputField
          labelButton="Search"
          class="w-[400px] ml-6 "
          placeholder="Search Products"
          search
        />
      </div>

      <Show when={products.loading}>
        <p>Loading...</p>
      </Show>
      <Switch>
        <Match when={products.error}>
          <span>Error: {products.error}</span>
        </Match>
        <Match when={products()?.data}>
          <div class="flex flex-row justify-center items-center flex-wrap w-full overflow-y-auto gap-4 h-[85vh] mt-4 mb-4 ">
            <For each={products()?.data}>
              {(product) => <ProductCard product={product} />}
            </For>
          </div>
        </Match>
      </Switch>
    </div>
  );
}

const ProductCard = (props: { product: Products }) => {
  return (
    <div class=" flex flex-col justify-between items-center p-2 w-[250px] h-[450px] rounded-lg shadow-md border border-solid border-slate-200 ">
      <div class="flex flex-col gap-5 justify-center items-center ">
        <img
          src={props?.product?.image}
          alt={props?.product?.title}
          class=" h-[200px] w-[200px] "
        />

        <div class="flex flex-col justify-center items-center gap-2">
          <div class=" flex flex-row justify-between items-center gap-2 ">
            <h3 class=" font-bold text-[20px] ">R${props?.product?.price}</h3>
          </div>

          <p class=" text-center text-balance  ">
            {props?.product?.description.slice(0, 95)}...
          </p>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center w-full space-y-2">
        <div class="flex flex-row justify-around items-center w-full">
          <div class="flex flex-row justify-start items-center gap-2 w-full">
            <div class="flex flex-row justify-center items-center gap-1 w-fit px-3 py-1 rounded-full bg-yellow-300">
              <AiFillStar size={14} />
              <h6 class="text-sm font-medium">{props?.product?.rating.rate}</h6>
            </div>

            <div class="w-[1px] h-[25px] bg-slate-300 self-center"></div>

            <h6 class="text-sm text-slate-600">
              Sold {props?.product?.rating.count}
            </h6>
          </div>

          <div class="flex w-7 h-7 bg-blue-500 rounded-full justify-center items-center mr-2 flex-shrink-0">
            <AiFillShopping size={16} class="text-white" />
          </div>
        </div>

        <h5 class="text-xs text-slate-500 font-semibold">
          {props?.product?.category}
        </h5>
      </div>
    </div>
  );
};

export default ProductsSearch;
