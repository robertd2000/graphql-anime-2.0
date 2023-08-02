import { FC } from 'react'
import { Card, Typography } from 'antd'

const { Meta } = Card

interface CardItemProps {
  image: string
  title: string
  size?: 'small' | 'medium'
}

export const CardItem: FC<CardItemProps> = ({
  image,
  title,
  size = 'medium',
}) => {
  return (
    <Card
      hoverable
      style={{
        maxWidth: size === 'medium' ? '350px' : '250px',
        width: '100%',
        alignItems: 'center',
        margin: 'auto',
      }}
      cover={
        <img
          src={image}
          style={{
            width: '100%',
            objectFit: 'cover',
            height: size === 'medium' ? '400px' : '250px',
          }}
        />
      }
    >
      <Meta
        title={
          <Typography
            style={{
              color: 'rgb(116,136,153)',
            }}
          >
            {title}
          </Typography>
        }
      />
    </Card>
  )
}
