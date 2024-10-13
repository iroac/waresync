import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import "./index.css"

import App from "../modules/App";
import Layout from "../modules/layout";
const root = document.getElementById("root") as HTMLElement

render(() => (
            <Router root={Layout} >
                <Route path="/" component={App} />
            </Router>
        ),
        root
    );
