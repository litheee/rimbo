import { Chart } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  BarElement,
  BarController,
  LineElement,
  LineController,
  LinearScale,
  CategoryScale,
  PointElement,
  ChartData,
  ChartType,
  DefaultDataPoint,
  CartesianTickOptions as TickProps,
  ChartOptions
} from 'chart.js'

import { Box } from '..'

import { useTheme } from 'hooks/useTheme'
import { Theme } from 'providers/Theme/Context'

import styles from './BarChart.module.scss'

ChartJS.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement, LineController, BarController)

function generateRandomNumber(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const BarChart = () => {
  // 3. only 4 ticks and grid borders for Y (0, 50, 100, 150)

  const { theme } = useTheme()

  const max = 150
  const min = 25

  const labels = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']

  const barBaseDataset = {
    type: 'bar' as const,
    label: 'Dataset 1',
    backgroundColor: '#5DE5E8',
    hoverBackgroundColor: '#5DE5E8',
    categoryPercentage: 1,
    barPercentage: 0.67
  }

  const generateBarDataset = () => {
    return {
      ...barBaseDataset,
      data: labels.map(() => generateRandomNumber(min, max))
    }
  }

  const tickStyles: Partial<TickProps> = {
    color: theme === Theme.LIGHT ? '#ABADB8' : 'rgba(255, 255, 255, 0.6)',
    font: {
      family: 'Inter',
      size: 14,
      weight: '300'
    },
    align: 'inner'
  }

  // const lineBaseDataset = {
  //   type: 'line' as const,
  //   label: 'Dataset 12',
  //   borderColor: '#8F3BB7',
  //   borderWidth: 2,
  //   fill: false,
  //   cubicInterpolationMode: 'monotone',
  //   pointRadius: 0,
  //   pointHoverRadius: 0
  // }

  const barDatasets = new Array(11).fill(null).map(generateBarDataset)

  const data: ChartData<ChartType, DefaultDataPoint<ChartType>, string> = {
    labels,
    // xLabels,
    // yLabels,

    datasets: [
      {
        type: 'line' as const,
        label: 'Dataset 1',
        borderColor: '#8F3BB7',
        borderWidth: 2,
        fill: false,
        data: [75, 100, 129, 75, 100, 140, 80, 130, 80, 0, 0],
        cubicInterpolationMode: 'monotone',
        pointRadius: 0,
        pointHoverRadius: 0
      },
      ...barDatasets
    ]
  }

  const chartOptions: ChartOptions = {
    responsive: true,
    aspectRatio: 1262 / 199,
    scales: {
      y: {
        ticks: {
          ...tickStyles,
          padding: 8,
          callback(tickValue, index, ticks) {
            // [0, 50, 100, 150]
            console.log(tickValue, index, ticks)
            return index % 4 === 0 ? tickValue : null
          }
        },
        border: {
          display: false
        },
        grid: {
          lineWidth: 0.87,
          color: theme === Theme.LIGHT ? '#F3F3F3' : '#444866',
          drawTicks: false
        }
      },
      x: {
        offset: false,
        ticks: {
          ...tickStyles
        },
        border: {
          display: false
        },
        grid: {
          offset: false,
          lineWidth: 1.245,
          tickWidth: 1.245,
          color: theme === Theme.LIGHT ? '#E3E3E3' : '#414563'
        }
      }
    }
  }

  return (
    <section className={styles['bar-chart']}>
      <div className='wrapper'>
        <Box>
          <div className={styles.chart}>
            <Chart type='bar' data={data} options={chartOptions} />
          </div>
        </Box>
      </div>
    </section>
  )
}
