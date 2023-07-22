import { FC } from "react";
import { Link } from "react-router-dom";
import { Avatar, Col, List, Tag } from "antd";
import { baseColors } from "~shared/constants/colors";
import { TopOverviewTitleProps } from "./top-overview-title.interface";

export const TopOverviewTitle: FC<TopOverviewTitleProps> = ({
  index,
  item,
}) => {
  return (
    <List.Item.Meta
      avatar={<Avatar shape="square" size={64} src={item.coverImage.large} />}
      title={
        <Link to={`/title/${item.id}`}>
          <span
            style={{
              color: baseColors.purple,
            }}
          >
            #{index + 1}{" "}
          </span>
          {item.title.userPreferred || item.title.english || item.title.native}
        </Link>
      }
      description={
        <Col span={24}>
          {item.genres.slice(0, 5).map((genre) => (
            <Tag
              key={genre}
              color="#2db7f5"
              style={{
                margin: "0.2rem 0.3rem",
              }}
            >
              {genre}
            </Tag>
          ))}
        </Col>
      }
    />
  );
};
