import { ParentProps } from "solid-js";
import Sidebar from "./components/sidebar";

function Layout(props: ParentProps) {
    return (
        <div class="flex flex-row w-full h-screen">
        <Sidebar />
        <main class="flex-1 self-start">
          {props.children}
        </main>
        </div>
    );
  }

export default Layout;