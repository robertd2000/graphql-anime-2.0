import { Avatar, Col, Row, Typography } from "antd";
import { FC } from "react";
import { ExternalLink } from "~shared/types/anime";

export interface AnimeLinksProps {
  externalLinks: ExternalLink[];
}

export const AnimeLinks: FC<AnimeLinksProps> = ({ externalLinks }) => {
  return externalLinks.length ? (
    <>
      <Typography.Title level={5}>External & Streaming links</Typography.Title>
      {externalLinks.map((externalLink) => (
        <a
          href={externalLink.url}
          style={{
            color: "rgb(92, 114, 138)",
          }}
        >
          <Row
            key={externalLink.id}
            justify={"start"}
            gutter={16}
            style={{
              backgroundColor: "white",
              margin: "10px 0px",
              padding: "5px 0px",
            }}
          >
            <Col>
              <Avatar
                shape="square"
                src={<img src={externalLink.icon} />}
                style={{
                  color: externalLink.color,
                  backgroundColor: externalLink.color,
                }}
              />
            </Col>

            <Col>{externalLink.site}</Col>
          </Row>
        </a>
      ))}
    </>
  ) : null;
};
