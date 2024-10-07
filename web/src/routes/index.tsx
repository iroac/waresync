import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import "./index.css"

import App from "../modules/App";
const root = document.getElementById("root") as HTMLElement

render(() => (
            <Router>
                <Route path="/" component={App} />
            </Router>
        ),
        root
    );
