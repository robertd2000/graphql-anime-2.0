import { LikeFilled } from '@ant-design/icons'
import { Avatar, Col, Row, Tooltip, Typography } from 'antd'
import { FC } from 'react'
import { ReviewNode } from '~shared/types'

interface ReviewProps {
  review: ReviewNode
}

export const Review: FC<ReviewProps> = ({ review }) => {
  return (
    <Col
      lg={12}
      md={12}
      sm={24}
      style={{
        margin: '1rem 0',
      }}
    >
      <Row>
        <Col span={3}>
          <Avatar src={review.user.avatar.large} shape="square" size={48} />
        </Col>
        <Col
          span={21}
          style={{
            backgroundColor: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '0.2rem',
          }}
        >
          <Row justify={'space-between'}>
            <Col span={20}>
              <Typography.Text
                style={{
                  font: 'italic',
                  textAlign: 'center',
                }}
              >
                {review.summary}
              </Typography.Text>
            </Col>
            <Col
              span={2}
              style={{
                float: 'right',
                verticalAlign: 'bottom',
              }}
            >
              {' '}
              <Tooltip
                title={`${review.rating} out of ${review.ratingAmount} liked this review`}
              >
                <LikeFilled /> {review.rating}
              </Tooltip>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}
