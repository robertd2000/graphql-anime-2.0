import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'antd'
import { AnimeMiniCard } from '~shared/types/anime'
import { CardItem } from '../card/card-item'
import { CardPopover } from '../card/card-popover'

interface CardMiniProps {
  id: number
  relationType: string
  data: AnimeMiniCard
}

export const CardMini: FC<CardMiniProps> = ({ data }) => {
  return (
    <Col lg={{ span: 4 }} md={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 12 }}>
      <CardPopover title={data.title.userPreferred} content={<></>}>
        <Link to={`/anime/${data.id}`}>
          <CardItem
            title={data.title.userPreferred as string}
            image={data.coverImage.large}
            size="small"
          />
        </Link>
      </CardPopover>
    </Col>
  )
}
