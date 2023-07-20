import { BrowserRouter } from "react-router-dom";
import { ReactNode, Suspense } from "react";

const withRouter = (component: () => ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense fallback="Loading...">{component()}</Suspense>
    </BrowserRouter>
  );

export default withRouter;
