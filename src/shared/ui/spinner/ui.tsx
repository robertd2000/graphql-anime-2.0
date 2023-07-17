import { FC } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

interface IProps {
  isLoading: boolean;
  size?: number;
}
/**
 * Компонент-спиннер - отображает элемент загрузки данных
 * @property {boolean} isLoading
 * @property {number} size
 * @returns
 */
export const Spinner: FC<IProps> = ({ isLoading, size = 48 }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: size }} spin />;

  return (
    <div
      style={{
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
    >
      <Spin indicator={antIcon} spinning={isLoading} size="large" />
    </div>
  );
};
