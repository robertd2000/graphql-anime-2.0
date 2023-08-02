import { Col, Row, Skeleton } from 'antd'

export const ListMiniSkeleton = () => {
  return (
    <Row
      gutter={[16, 32]}
      align={'middle'}
      justify="start"
      style={{
        margin: '3rem 1rem',
        marginTop: '3rem',
      }}
    >
      {[...Array(24).keys()]?.map((i) => (
        <Col lg={12} md={12} xs={24} key={i}>
          <Row justify={'space-between'} gutter={[16, 32]}>
            <Col span={12}>
              <Row>
                <Col span={8}>
                  <Skeleton.Image />
                </Col>
                <Col span={16}>
                  <Skeleton.Input />
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={8}>
                  <Skeleton.Image />
                </Col>
                <Col span={16}>
                  <Skeleton.Input />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  )
}
