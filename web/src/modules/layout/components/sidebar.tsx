import { FaSolidBox, FaSolidBoxArchive, FaSolidChartPie } from "solid-icons/fa";
import { ImSearch } from "solid-icons/im";
import LinkComponent from "../../../components/atoms/Link";
import DropDown from "./dropdown";
import Lettermark from "./logo";

export default function Sidebar() {
  return (
        <aside class=" w-56 h-full bg-blue-800 text-white flex flex-col p-4">
            <Lettermark />
            <hr class=" opacity-40 mt-2 mb-1   " />
            <div class="flex flex-col space-y-1 " >
            <LinkComponent title="Dashboard" icon={FaSolidChartPie} href="/" class={"block p-0 py-2 rounded-md hover:bg-blue-700 hover:translate-y-[-1px] transition-all"} />
            <DropDown title="Products" icon={FaSolidBoxArchive} >
            <LinkComponent title="Search" icon={ImSearch} href="/products/search" class={"block p-2 rounded-md hover:bg-blue-700 hover:translate-y-[-1px] transition-all"} />
            <LinkComponent title="Catalog" icon={FaSolidBox} href="/products/catalog" class={"block p-2 rounded-md hover:bg-blue-700 hover:translate-y-[-1px] transition-all"} />
            </DropDown>
            </div>
        </aside>
  )
}