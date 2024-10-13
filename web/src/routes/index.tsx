import { Route, Router } from "@solidjs/router";
import 'flowbite';
import { render } from "solid-js/web";
import Dashboard from "../modules/dashboard";
import Layout from "../modules/layout";
import ProductsCatalog from "../modules/products/catalog";
import ProductsSearch from "../modules/products/search";
import "./index.css"

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
