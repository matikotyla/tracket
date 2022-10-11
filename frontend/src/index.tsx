import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { LocalizationConfig } from "config";

import App from "./App";

import "./index.scss";
import { AuthProvider, LayoutProvider } from "context";
import { ApolloCache } from "cache";

LocalizationConfig.initialize();

const httpLink = createHttpLink({
  // uri: "https://app-tracket.herokuapp.com/",
  uri: "http://localhost:4000/",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: ApolloCache,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <AuthProvider>
          <LayoutProvider>
            <App />
          </LayoutProvider>
        </AuthProvider>
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);
