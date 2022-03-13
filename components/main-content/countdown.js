import styles from './countdown.module.css'
import config from '../../config'
import { pluralize, roundTo } from '../../utils'

const Countdown = ({ time }) => {
  const dateDiff = new Date(config.cupStartsAt - time)
  console.error(dateDiff)
  const remainingSecondsNumber = dateDiff.getUTCSeconds()
  const remainingMinutesNumber = roundTo(dateDiff.getUTCMinutes(), 60)
  const remainingHoursNumber = roundTo(dateDiff.getUTCHours(), 24)
  const remainingDaysNumber = dateDiff.getUTCDate() - 1

  const remainingSeconds = pluralize(remainingSecondsNumber, 'секунду', 'секунды', 'секунд')
  const remainingMinutes = pluralize(remainingMinutesNumber, 'минуту', 'минуты', 'минут')
  const remainingHours = pluralize(remainingHoursNumber, 'час', 'часа', 'часов')
  const remainingDays = pluralize(remainingDaysNumber, 'день', 'дня', 'дней')

  return (
    <p className={styles.countdown}>
      Начало через <br />
      {remainingDays} <br />
      {remainingHours} <br />
      {remainingMinutes} <br />
      {remainingSeconds}
    </p>
  )
}

export default Countdown
