import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Image, Typography } from 'antd'

interface CardRoleProps {
  left: {
    id: number
    title: string
    description?: string
    image: string
  }
  right?: {
    id: number
    title: string
    description?: string
    image: string
  }
}

export const CardRole: FC<CardRoleProps> = ({ left, right }) => {
  return (
    <Col lg={12} md={12} xs={24}>
      <Row justify={'space-between'} gutter={[16, 32]}>
        <Col span={12}>
          <Row>
            <Col span={8}>
              <Image width={60} src={left.image} />
            </Col>
            <Col span={16}>
              <Link to={`/character/:${left.id}`}>
                <Typography.Text>{left.title}</Typography.Text>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          {right && (
            <Row justify={'end'}>
              <Col span={16}>
                <Link to={`/actor/:${right.id}`}>
                  <Typography.Text>{right.title}</Typography.Text>
                </Link>
              </Col>
              <Col span={8}>
                <Image width={60} src={right.image} />
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Col>
  )
}
