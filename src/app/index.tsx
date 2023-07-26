import { Grid, Layout } from "antd";
import { Routing } from "~pages";
import { Header } from "~widgets/header/ui";
import { withProviders } from "./providers";
import "./index.scss";

// const { useBreakpoint } = Grid;

const App = () => {
  // const screens = useBreakpoint();

  return (
    <Layout>
      <Header />
      {/* <Layout.Content
        style={{
          margin: screens.lg ? "2rem 10rem 1.5rem" : "1rem 3rem",
        }}
      > */}
      <Routing />
      {/* </Layout.Content> */}
    </Layout>
  );
};

export default withProviders(App);
