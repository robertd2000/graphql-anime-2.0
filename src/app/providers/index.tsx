import compose from "compose-function";
import withRouter from "./router";
import withApollo from "./apollo";

export const withProviders = compose(withRouter, withApollo);
