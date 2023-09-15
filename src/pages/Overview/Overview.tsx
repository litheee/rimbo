import { AdvertismentChart, AudienceCharts, BarChart, Companies, Header, TrafficTable } from 'components'

export const OverviewPage = () => {
  return (
    <>
      <Header />
      <Companies title='Overview' />
      <TrafficTable />
      <AdvertismentChart />
      <BarChart />
      <AudienceCharts />
    </>
  )
}
