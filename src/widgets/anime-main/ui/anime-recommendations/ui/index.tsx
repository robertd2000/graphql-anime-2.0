import { Row, Typography } from 'antd'
import { FC } from 'react'
import { RecommendationsNode } from '~shared/types/anime'
import { Card } from '~shared/ui'

interface AnimeRecommendationsProps {
  data: RecommendationsNode[]
}

export const AnimeRecommendations: FC<AnimeRecommendationsProps> = ({
  data,
}) => {
  return (
    <>
      <Typography.Title level={5}>Recommendations</Typography.Title>
      <Row gutter={[16, 16]} align={'middle'} justify="start">
        {data?.map((title) => (
          <Card
            data={title.mediaRecommendation}
            key={title.id}
            isPopover={false}
          />
        ))}
      </Row>
    </>
  )
}
