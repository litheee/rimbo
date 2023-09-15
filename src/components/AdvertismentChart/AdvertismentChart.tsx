import { Line } from 'react-chartjs-2'
import type { ChartData, ChartArea, ChartOptions } from 'chart.js'
import { Chart as ChartJS, Filler, LineElement, Tooltip } from 'chart.js'

import { AdvertismentTypesCarousel, Box } from '..'

import styles from './AdvertismentChart.module.scss'

ChartJS.register(LineElement, Filler, Tooltip)

function generateRandomNumber(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const AdvertismentChart = () => {
  function createGradient(ctx: CanvasRenderingContext2D, chartArea: ChartArea, color: string) {
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)

    if (color === 'purple') {
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
      // gradient.addColorStop(1, 'rgba(143, 59, 183, 0.5)')
      gradient.addColorStop(1, 'rgba(71, 83, 190, 0.10)')
    } else {
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
      // gradient.addColorStop(1, 'rgba(94, 236, 230, 0.5)')
      gradient.addColorStop(1, 'rgba(94, 236, 230, 0.10)')
    }

    return gradient
  }

  const generateLabels = () => {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const lastMonthDay = new Date(year, month, 0).getDate()

    return new Array(lastMonthDay).fill(null).map((_, idx) => idx + 1)
  }

  // AQUA
  // rgba(255, 255, 255, 0), rgba(94, 236, 230, 1)
  // fill: linear-gradient(0deg, rgba(255, 255, 255, 0.00) -8.2%, rgba(94, 236, 230, 0.10) 60.8%);

  // PURPLE
  // rgba(71, 83, 190, 1), rgba(255, 255, 255, 0)
  // fill: linear-gradient(180deg, rgba(71, 83, 190, 0.10) 43.68%, rgba(255, 255, 255, 0.00) 103.68%);

  const data: ChartData<'line'> = {
    labels: generateLabels(),
    datasets: [
      {
        label: 'Dataset 1',
        data: new Array(generateLabels().length).fill(null).map(() => generateRandomNumber(200, 300)),
        borderColor: '#5DE5E8',
        cubicInterpolationMode: 'monotone',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0,
        fill: true,
        backgroundColor: function (context) {
          const chart = context.chart
          const { ctx, chartArea } = chart
          if (!chartArea) return

          return createGradient(ctx, chartArea, 'aqua')
        },
        order: 0
      },
      {
        label: 'Dataset 1',
        data: new Array(generateLabels().length).fill(null).map(() => generateRandomNumber(100, 300)),
        borderColor: '#8F3BB7',
        cubicInterpolationMode: 'monotone',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0,
        fill: true,
        backgroundColor: function (context) {
          const chart = context.chart
          const { ctx, chartArea } = chart
          if (!chartArea) return

          return createGradient(ctx, chartArea, 'purple')
        },
        order: 1
      }
    ]
  }

  const chartOptions: ChartOptions<'line'> = {
    aspectRatio: 1296 / 310,
    scales: {
      x: {
        border: {
          display: false
        },
        grid: {
          offset: false,
          display: false,
          drawTicks: false
        },
        ticks: {
          display: false
          // font: {
          //   family: 'Inter',
          //   weight: '300',
          //   size: 14
          // },
          // color: theme === Theme.LIGHT ? '#ABADB8' : 'rgba(255, 255, 255, 0.6)',
          // callback(_, idx, ticks) {
          //   const currentDate = new Date()
          //   const monthLabel = currentDate.toDateString().slice(4, 8)

          //   const dayNumber = idx === 0 || ticks.length === idx + 1 ? idx + 1 : idx

          //   return idx % 5 === 0 ? `${dayNumber} ${monthLabel}` : null
          // }
        }
      },
      y: {
        border: {
          display: false
        },
        grid: {
          display: false,
          drawTicks: false
        },
        ticks: {
          display: false
        }
      }
    }
  }

  return (
    <section className={styles['advertisment-chart']}>
      <div className='wrapper'>
        <Box>
          <AdvertismentTypesCarousel />

          <div className={styles.chart}>
            <Line data={data} options={chartOptions} />
          </div>
        </Box>

        <ul className={styles['chart-labels']}>
          {generateLabels()
            .filter((value, idx) => value % 5 === 0 || idx === 0)
            .map((value) => {
              const currentDate = new Date()
              const monthLabel = currentDate.toDateString().slice(4, 8)

              return (
                <li key={value}>
                  {value} {monthLabel}
                </li>
              )
            })}
        </ul>
      </div>
    </section>
  )
}
