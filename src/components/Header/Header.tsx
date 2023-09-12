import { Link, useLocation } from 'react-router-dom'

import { Logo, ThemeSwitcher, LangSwitcher, UserProfile } from 'components'

import { ROUTE_NAMES, RouteNamesValues } from 'core/router'

import { ReactComponent as LayersIcon } from 'assets/icons/layers.svg'
import { ReactComponent as SettingsIcon } from 'assets/icons/settings.svg'

import styles from './Header.module.scss'

interface NavItem {
  label: string
  href: RouteNamesValues
  icon: React.ReactElement
}

export const Header = () => {
  const { pathname } = useLocation()

  const nav: NavItem[] = [
    { label: 'Overview', href: ROUTE_NAMES.OVERVIEW, icon: <LayersIcon /> },
    { label: 'Companies settings', href: ROUTE_NAMES.COMPANIES_SETTINGS, icon: <SettingsIcon /> }
  ]

  const navItems = nav.map(({ label, href, icon }) => {
    const isActive = pathname === href

    return (
      <li key={href}>
        <Link to={href} className={isActive ? styles.active : undefined}>
          {icon}
          <span>{label}</span>
        </Link>
      </li>
    )
  })

  return (
    <header className={styles.header}>
      <div className='wrapper'>
        <Logo />

        <nav>
          <ul>{navItems}</ul>
        </nav>

        <div className={styles.right}>
          <ThemeSwitcher />
          <LangSwitcher />
          <UserProfile />
        </div>
      </div>
    </header>
  )
}
