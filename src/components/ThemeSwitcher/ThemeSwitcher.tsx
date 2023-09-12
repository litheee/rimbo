import { useTheme } from 'hooks'

import { ReactComponent as SunIcon } from 'assets/icons/sun.svg'
import { ReactComponent as CrescentIcon } from 'assets/icons/crescent.svg'

import styles from './ThemeSwitcher.module.scss'
import { Theme } from 'providers/Theme/Context'

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={styles['theme-switcher']} onClick={toggleTheme}>
      <div className={styles.theme}>
        <SunIcon />
      </div>

      <div className={theme === Theme.DARK ? `${styles.track} ${styles.right}` : styles.track}></div>

      <div className={styles.theme}>
        <CrescentIcon />
      </div>
    </div>
  )
}
