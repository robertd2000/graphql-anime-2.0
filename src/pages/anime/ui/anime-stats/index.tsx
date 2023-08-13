import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { useAnimeStats } from '~pages/anime/model/hooks/useAnimeStats'
import { Row } from 'antd'
import { airingOptions, trendsOptions, watchOptions } from '~pages/anime/const'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const AnimeStats = () => {
  const { airingTrendsData, trendsData, watchData } = useAnimeStats()

  return (
    <Row
      justify={'center'}
      style={{
        margin: '1rem 2rem',
      }}
    >
      <Line options={trendsOptions} data={trendsData} />
      <Line options={airingOptions} data={airingTrendsData} />
      <Line options={watchOptions} data={watchData} />
    </Row>
  )
}
