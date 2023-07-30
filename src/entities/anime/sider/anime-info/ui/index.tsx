import { List, Typography } from "antd";
import { FC, ReactNode } from "react";

interface AnimeInfoProps {
  info: {
    title: string;
    data: string | string[] | ReactNode | ReactNode[];
  }[];
}

export const AnimeInfo: FC<AnimeInfoProps> = ({ info }) => {
  return (
    <List
      dataSource={info || []}
      split={false}
      renderItem={({ title, data }) =>
        data ? (
          <List.Item
            key={Math.random() * 1000}
            style={{
              margin: "0 10px",
              padding: "0px 15px",
            }}
          >
            <List.Item.Meta
              title={
                <Typography.Title
                  level={5}
                  style={{
                    fontSize: "0.8rem",
                    color: "rgb(92, 114, 138)",
                  }}
                >
                  {title}
                </Typography.Title>
              }
              description={data}
            />
          </List.Item>
        ) : null
      }
      style={{
        backgroundColor: "white",
      }}
    />
  );
};
