import { FC } from "react";
import { ReactionIconProps } from "./ui.interface";
import { Row } from "antd";

export const ReactionIcon: FC<ReactionIconProps> = ({
  icon,
  color,
  averageScore,
}) => {
  return (
    <Row align={"middle"}>
      <span
        style={{
          color,
          marginRight: "5px",
          fontSize: "1.2rem",
        }}
      >
        {icon}
      </span>
      <span>{averageScore} %</span>
    </Row>
  );
};
