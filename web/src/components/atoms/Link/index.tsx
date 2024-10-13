import { A } from "@solidjs/router";
import { IconTypes } from "solid-icons";
import { ParentProps, Show } from "solid-js";

export default function LinkComponent(props: ParentProps<{ title: string, icon: IconTypes, href: string, endIcon?: boolean, class?: string }>) {
    const IconComponent = props.icon
    return (
              <A href={props.href} class="block">
        <div class={`w-full flex flex-row justify-start items-center cursor-pointer gap-2 p-2 rounded-md hover:bg-blue-700 hover:translate-y-[-1px] transition-all ${props.class}`} >
              <Show when={!props.endIcon} >
              <IconComponent />
              </Show>

              {props.title}

              <Show when={props.endIcon} >
              <IconComponent />
              </Show>
        </div>
              </A>
    )
  }