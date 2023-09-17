import { HashRouter } from "react-router-dom";
import { ReactNode, Suspense } from "react";

const withRouter = (component: () => ReactNode) => () =>
  (
    <HashRouter>
      <Suspense fallback="Loading...">{component()}</Suspense>
    </HashRouter>
  );

export default withRouter;
