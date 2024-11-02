import { Route, Router } from "@solidjs/router";
import 'flowbite';
import { render } from "solid-js/web";
import Dashboard from "../modules/dashboard";
import Layout from "../modules/layout";
import ProductsCatalog from "../modules/products/catalog";
import ProductsSearch from "../modules/products/search";
import "./index.css"
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";

const root = document.getElementById("root") as HTMLElement
const client = new QueryClient()

render(() => (
    <QueryClientProvider client={client}>
            <Router root={Layout} >
                <Route path="/" component={Dashboard} />
                <Route path="/products/search" component={ProductsSearch} />
                <Route path="/products/catalog" component={ProductsCatalog} />
            </Router>
    </QueryClientProvider>
        ),
        root
    );
