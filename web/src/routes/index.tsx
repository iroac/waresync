import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import "./index.css"
import Layout from "../modules/layout";
import Dashboard from "../modules/dashboard";
import ProductsSearch from "../modules/products/search";
import ProductsCatalog from "../modules/products/catalog";

const root = document.getElementById("root") as HTMLElement

render(() => (
            <Router root={Layout} >
                <Route path="/" component={Dashboard} />
                <Route path="/products/search" component={ProductsSearch} />
                <Route path="/products/catalog" component={ProductsCatalog} />
            </Router>
        ),
        root
    );
