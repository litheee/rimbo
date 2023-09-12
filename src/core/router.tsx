import { createBrowserRouter } from 'react-router-dom'

import { OverviewPage, CampaignsSettingsPage } from 'pages'

export type Keys = keyof typeof ROUTE_NAMES
export type RouteNamesValues = (typeof ROUTE_NAMES)[Keys]

export const ROUTE_NAMES = {
  OVERVIEW: '/overview',
  COMPANIES_SETTINGS: '/companies-settings'
} as const

export const router = createBrowserRouter([
  {
    path: '/',
    element: <OverviewPage />
  },
  {
    path: ROUTE_NAMES.COMPANIES_SETTINGS,
    element: <CampaignsSettingsPage />
  }
])
