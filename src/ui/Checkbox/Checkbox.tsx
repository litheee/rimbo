import { useState } from 'react'

import styles from './Checkbox.module.scss'

import { ReactComponent as CheckmarkIcon } from 'assets/icons/checkbox-checkmark.svg'

export const Checkbox = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div className={styles.container}>
      <label>
        <input
          type='checkbox'
          checked={checked}
          onChange={() => {
            setChecked((prev) => !prev)
          }}
        />

        {checked ? <CheckmarkIcon /> : null}
      </label>
    </div>
  )
}
