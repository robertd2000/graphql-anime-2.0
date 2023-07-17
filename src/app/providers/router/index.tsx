import { Route, Routes } from "react-router";
import { HomePage } from "../../../pages/home";

const RouterProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default RouterProvider;
