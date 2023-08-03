import { Row } from 'antd'
import { useAnimeCharacters } from '~pages/anime/model/hooks/useAnimeCharacters'
import { CardRole } from '~shared/ui/card-role'
import { ListMiniSkeleton } from '~shared/ui/skeleton'

export const AnimeCharacters = () => {
  const { data, loading, ref } = useAnimeCharacters()

  return loading ? (
    <ListMiniSkeleton dataLength={data?.length || 24} />
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
      {data?.map((title, index) =>
        index === data.length - 1 ? (
          <div ref={ref} key={title.id}>
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
                  title?.voiceActorRoles?.[0]?.voiceActor?.name
                    ?.userPreferred || '',
                image:
                  title?.voiceActorRoles?.[0]?.voiceActor?.image.large || '',
              }}
            />
          </div>
        ) : (
          <CardRole
            key={title.id}
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
        )
      )}
    </Row>
  )
}
