import { Col, Pagination, Row } from 'antd'
import { useAnimeCharacters } from '~pages/anime/model/hooks/useAnimeCharacters'
import { CardRole } from '~shared/ui/card-role'
import { ListMiniSkeleton } from '~shared/ui/skeleton'

export const AnimeCharacters = () => {
  const { data, loading, currentPage, totalPages, onChangePage } =
    useAnimeCharacters()

  return loading ? (
    <ListMiniSkeleton />
  ) : (
    <Row
      gutter={[16, 32]}
      align={'middle'}
      justify="start"
      style={{
        margin: '3rem 1rem',
        marginTop: '3rem',
      }}
    >
      {data?.map((title) => (
        <CardRole
          left={{
            description: '',
            id: title.id,
            title: title.node.name.userPreferred || '',
            image: title.node.image.large || '',
          }}
          right={{
            description: '',
            id: title.id,
            title:
              title?.voiceActorRoles?.[0]?.voiceActor?.name?.userPreferred ||
              '',
            image: title?.voiceActorRoles?.[0]?.voiceActor?.image.large || '',
          }}
        />
      ))}

      <Col span={24}>
        {totalPages! > 1 && data && (
          <Pagination
            current={currentPage}
            onChange={onChangePage}
            total={totalPages}
            showSizeChanger={false}
            style={{
              margin: '1rem',
            }}
          />
        )}
      </Col>
    </Row>
  )
}
