import { createSignal, Match, ParentProps, Show, Switch } from "solid-js";
import Lettermark from "./logo";
import { IconTypes } from "solid-icons";
import { RiArrowsArrowDropDownLine, RiArrowsArrowDropUpLine } from "solid-icons/ri";
import { FaSolidBox, FaSolidBoxArchive } from "solid-icons/fa";
import LinkComponent from "../../../components/Link";

export default function Sidebar() {
  return (
        <aside class=" w-56 h-full bg-blue-800 text-white flex flex-col p-4">
            <Lettermark />
            <hr class=" opacity-40 mt-2 mb-4 " />
            <DropDown title="Products" icon={FaSolidBoxArchive} >
            <LinkComponent title="Search" icon={FaSolidBox} href="/products/search" class={"block p-2 rounded-md hover:bg-blue-700 hover:translate-y-[-1px] transition-all"} />
            </DropDown>
        </aside>
  )
}


function DropDown(props: ParentProps<{ title: string, icon: IconTypes }>) {
  const [open, setOpen] = createSignal(false)
  const IconComponent = props.icon

  return (
    <>
    <div class="flex flex-row w-full h-[20px] items-center justify-between cursor-pointer " onClick={() => setOpen(!open())} onKeyDown={(e) => console.log(e)}  >
      <div class="flex flex-row justify-start items-center gap-2 space-x-1 " >
      <IconComponent />
      {props.title}
      </div>

      <Switch>
        <Match when={!open()} >
      <RiArrowsArrowDropDownLine size={40} class="mt-1" />
        </Match>
        <Match when={open()} >
      <RiArrowsArrowDropUpLine size={40} class="mt-1" />
        </Match>
      </Switch>
    </div>
    <Show when={open()} >
    <nav class="transition-all duration-300 ease-in-out overflow-hidden">
          <div class="space-y-1 p-2">
            {props.children}
          </div>
        </nav>

    </Show>
    </>
  )
}
