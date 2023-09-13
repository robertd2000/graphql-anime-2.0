import { MenuProps } from "antd";
import { Link } from "react-router-dom";

export const itemsList: MenuProps["items"] = [
  {
    label: <Link to={"/"}>Home</Link>,
    key: "home",
  },
  {
    label: <Link to={"/search-anime"}>Search anime</Link>,
    key: "search-anime",
  },
  // {
  //   label: <Link to={"/search-character"}>Search character</Link>,
  //   key: "search-character",
  // },
];
