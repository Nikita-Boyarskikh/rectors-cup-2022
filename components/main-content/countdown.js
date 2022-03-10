import styles from './countdown.module.css'
import config from '../../config'
import { pluralize, roundTo } from '../../utils'
import { useMemo } from 'react'

const Countdown = ({ time }) => {
  const seconds = time.getSeconds()
  const minutes = time.getMinutes()
  const hours = time.getHours()
  const date = time.getDate()

  const remainingSecondsNumber = config.cupStartsAt.getSeconds() - seconds
  const remainingMinutesNumber = useMemo(() => {
    return config.cupStartsAt.getMinutes() - minutes - (remainingSecondsNumber > 0 ? 0 : 1)
  }, [minutes, remainingSecondsNumber])
  const remainingHoursNumber = useMemo(() => {
    return config.cupStartsAt.getHours() - hours - (remainingMinutesNumber > 0 ? 0 : 1)
  }, [hours, remainingMinutesNumber])
  const remainingDaysNumber = useMemo(() => {
    return config.cupStartsAt.getDate() - date - (remainingHoursNumber > 0 ? 0 : 1)
  }, [date, remainingHoursNumber])

  const remainingSeconds = useMemo(() => {
    return pluralize(roundTo(remainingSecondsNumber, 60), 'секунду', 'секунды', 'секунд')
  }, [remainingSecondsNumber])

  const remainingMinutes = useMemo(() => {
    return pluralize(roundTo(remainingMinutesNumber, 60), 'минуту', 'минуты', 'минут')
  }, [remainingMinutesNumber])

  const remainingHours = useMemo(() => {
    return pluralize(roundTo(remainingHoursNumber, 24), 'час', 'часа', 'часов')
  }, [remainingHoursNumber])

  const remainingDays = useMemo(() => {
    return pluralize(remainingDaysNumber, 'день', 'дня', 'дней')
  }, [remainingDaysNumber])

  return (
    <div className={styles.countdown}>
      Начало через <br />
      {remainingDays} <br />
      {remainingHours} <br />
      {remainingMinutes} <br />
      {remainingSeconds}
    </div>
  )
}

export default Countdown
