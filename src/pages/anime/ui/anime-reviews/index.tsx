import { Col, Row } from 'antd'
import { Review } from '~entities/review'
import { useAnimeReviews } from '~pages/anime/model/hooks/useAnimeReviews'

export const AnimeReviews = () => {
  const { data, loading } = useAnimeReviews()

  return (
    <Row
      gutter={16}
      style={{
        margin: '1rem',
      }}
    >
      {data?.map((review) => (
        <Review review={review} />
      ))}
    </Row>
  )
}
