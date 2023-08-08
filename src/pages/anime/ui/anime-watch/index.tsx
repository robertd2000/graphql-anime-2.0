import { Col, Row } from 'antd'
import { useParams } from 'react-router'
import { getAnimeWatch } from '~pages/anime/api'
import { Spinner } from '~shared/ui'
import { CardItem } from '~shared/ui/card/card-item'

export const AnimeWatchPage = () => {
  const { id } = useParams()

  const { data, loading } = getAnimeWatch(+id!, 1)

  return loading ? (
    <Spinner isLoading />
  ) : (
    <Row gutter={16}>
      {data?.streamingEpisodes.map((episode) => (
        <Col
          lg={6}
          md={6}
          sm={{ span: 12 }}
          xs={{ span: 24 }}
          style={{
            margin: '1rem 0',
          }}
        >
          <a href={episode.url} target="_blank">
            <CardItem
              image={episode.thumbnail}
              title={episode.title}
              size="small"
            />
          </a>
        </Col>
      ))}
    </Row>
  )
}
