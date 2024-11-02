import { AiFillStar, AiFillShopping } from "solid-icons/ai";
import { Products } from "../../../../api/products";

export const ProductCard = (props: { product: Products }) => {
    return (
      <div class=" flex flex-col justify-between items-center p-2 w-[250px] h-[450px] rounded-lg shadow-md border border-solid border-slate-200 ">
        <div class="flex flex-col gap-5 justify-center items-center ">
          <img
            src={props?.product?.image}
            alt={props?.product?.title}
            class=" h-[200px] w-[200px] "
          />
  
          <div class="flex flex-col justify-center items-center gap-2">
            <div class=" flex flex-col justify-center items-center gap-2 ">
              <h3 class=" font-bold text-[20px] ">R${props?.product?.price}</h3>
              <h3 class=" font-bold text-[15px] text-center text-pretty ">{props?.product?.title.slice(0, 40)}...</h3>
            </div>
  
            <p class=" text-center text-balance text-[13px]  ">
              {props?.product?.description.slice(0, 90)}...
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
  
              <div class="w-[1px] h-[25px] bg-slate-300 self-center" />
  
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