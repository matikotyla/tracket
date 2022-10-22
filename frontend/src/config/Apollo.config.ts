import { ApolloClient, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { ApolloCache } from "cache";

namespace ApolloConfig {
  export const httpLink = createHttpLink({
    uri: process.env.REACT_APP_URL,
  });

  export const authLink = setContext((_, { headers }) => {
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
}

export default ApolloConfig;
