import { Route, Routes } from "react-router";
import { HomePage } from "./home";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
