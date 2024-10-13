import { IconTypes } from "solid-icons"
import { RiArrowsArrowDropDownLine, RiArrowsArrowDropUpLine } from "solid-icons/ri"
import { ParentProps, createSignal, Switch, Match, Show } from "solid-js"

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

  
export default DropDown