import { Row, Typography } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { StaffPreviewEdge } from "~shared/types/anime";
import { CardRole } from "~shared/ui/card-role";

interface AnimeStaffPreviewProps {
  data: StaffPreviewEdge[];
}

export const AnimeStaffPreview: FC<AnimeStaffPreviewProps> = ({ data }) => {
  return (
    <>
      <Link to={"staff"}>
        <Typography.Title level={5}>Staff</Typography.Title>
      </Link>
      <Row gutter={[32, 32]} align={"middle"} justify="start">
        {data?.map((title) => (
          <CardRole
            left={{
              description: "",
              id: title.node.id,
              title: title.node.name.userPreferred || "",
              image: title.node.image.large || "",
            }}
          />
        ))}
      </Row>
    </>
  );
};
