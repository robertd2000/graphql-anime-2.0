import { Menu } from "antd";
import { items } from "../constants";
import { useNavigate } from "react-router";

export const AnimeMenu = () => {
  const navigate = useNavigate();

  const onClick = ({ key }: any) => {
    navigate(key);
  };

  return (
    <Menu
      mode="horizontal"
      items={items}
      onClick={onClick}
      defaultSelectedKeys={[`${location.pathname.replace("/main/", "")}`]}
      style={{
        margin: "0px 10px",
        backgroundColor: "transparent",
      }}
    />
  );
};
