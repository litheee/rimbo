import { AdvertisementChart, AudienceCharts, BarChart, Companies, Header } from 'components'

export const OverviewPage = () => {
  return (
    <>
      <Header />
      <Companies title='Overview' />
      <AdvertisementChart />
      <BarChart />
      <AudienceCharts />
    </>
  )
}
