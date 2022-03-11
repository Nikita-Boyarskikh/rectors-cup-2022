import { memo } from 'react'

import styles from './invite.module.css'
import config from '../../config'

const Invite = () => {
  const startAtDate = config.registrationEndsAt.toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const startAtTime = config.registrationEndsAt.toLocaleString('ru', {
    hour: 'numeric',
    minute: 'numeric',
  })
  const localizedStartAt = `${startAtDate} в ${startAtTime}`

  return (
    <p className={styles.invite}>
      Приходи {localizedStartAt} в манеж спортивного комплекса МГТУ
      и получи 2 балла по дисциплине &laquo;Физическое воспитание&raquo;
    </p>
  )
}

export default memo(Invite)
