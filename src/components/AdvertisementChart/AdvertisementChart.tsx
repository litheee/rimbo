import { Box } from 'components'

import styles from './AdvertisementChart.module.scss'

export const AdvertisementChart = () => {
  return (
    <section className={styles['advertisement-chart']}>
      <div className='wrapper'>
        <Box>line chart</Box>
      </div>
    </section>
  )
}
