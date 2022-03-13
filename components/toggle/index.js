import classNames from 'classnames'

import styles from './toggle.module.css'

const Toggle = ({ variants, value, onChange }) => {
  return <div className={styles.toggle}>
    {variants.map((variant) => {
      return (
        <div
          key={variant.id}
          className={classNames(styles.variant, {[styles.active]: variant.id === value})}
          onClick={() => {
            onChange(variant.id)
          }}
        >
          {variant.value}
        </div>
      )
    })}
  </div>
}

export default Toggle
