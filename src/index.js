import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { ProductList } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));

//dom: dev-qtb7c8kc5q1ax3ql.au.auth0.com

//client: WhmHZpRksOPjH7mGMELm9EAJSpWoJgWv

root.render(
  <Auth0Provider
    domain="dev-qtb7c8kc5q1ax3ql.au.auth0.com"
    clientId="WhmHZpRksOPjH7mGMELm9EAJSpWoJgWv"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
