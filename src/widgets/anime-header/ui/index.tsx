import { Col, Row, Image, Typography } from 'antd'
import { useAnimeHeader } from '../model/hooks/useAnimeHeader'
import { LayoutCustom } from '~shared/ui/layout'
import { AnimeDetailsSkeleton } from '~shared/ui/skeleton'

export const AnimeHeader = () => {
  const { data, loading } = useAnimeHeader()

  return loading ? (
    <AnimeDetailsSkeleton />
  ) : (
    <Row>
      <Col
        span={24}
        style={{
          width: '100vw',
          height: '50vh',
          backgroundImage: `url(${data?.bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 35%',
          background:
            'linear-gradient(180deg,rgba(var(--color-shadow-dark),0) 40%,rgba(var(--color-shadow-dark),.6))',
        }}
      >
        <Col
          style={{
            width: '100vw',
            height: '50vh',
            backgroundImage: `url(${data?.bannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 35%',
          }}
        ></Col>
      </Col>
      <Col span={24}>
        <LayoutCustom backgroundColor="white">
          <Row>
            <Col span={6}>
              <Image
                src={data?.coverImage.extraLarge}
                width={210}
                preview={false}
                style={{
                  marginTop: '-8rem',
                  boxShadow: '1px grey',
                }}
              />
            </Col>
            <Col span={18}>
              <Typography.Title level={4}>
                {data?.title.english || data?.title.native}
              </Typography.Title>
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.description as string,
                }}
              ></div>
            </Col>
          </Row>
        </LayoutCustom>
      </Col>
    </Row>
  )
}
