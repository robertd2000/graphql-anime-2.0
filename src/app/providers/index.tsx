import { BrowserRouter } from "react-router-dom";
import ApolloProvider from "./apollo";
import RouterProvider from "./router";

const Provider = () => {
  return (
    <BrowserRouter>
      <ApolloProvider>
        <RouterProvider />
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default Provider;
