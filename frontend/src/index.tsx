import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";
import { ApolloConfig, LocalizationConfig } from "config";
import { AuthProvider, LayoutProvider } from "context";

import App from "./App";

import "./index.scss";

LocalizationConfig.initialize();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={ApolloConfig.client}>
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
