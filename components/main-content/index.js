import { useEffect } from 'react'

import styles from './main-content.module.css'
import config from '../../config'
import { useCurrentTime } from 'hooks/utils'
import { useInfo } from 'hooks/api'
import { pluralize, roundTo } from '../../utils'
import Table from '../table'

const MainContent = () => {
  const info = useInfo()

  const updateInterval = 1000 / config.countdownUpdatePerSecond
  const { time, start, stop } = useCurrentTime({ updateInterval })
  const cupHasStarted = config.cupStartsAt <= time

  useEffect(() => {
    if (!cupHasStarted) {
      start()
      return stop
    }
  })

  if (cupHasStarted) {
    return (
      <Table
        title="Промежуточные результаты"
        columns={[
          // TODO
        ]}
        data={info}
      />
    )
  }

  const remainingSecondsNumber = config.cupStartsAt.getSeconds() - time.getSeconds()
  const remainingSeconds = pluralize(roundTo(remainingSecondsNumber, 60), 'секунду', 'секунды', 'секунд')

  const remainingMinutesNumber = config.cupStartsAt.getMinutes() - time.getMinutes() - (remainingSecondsNumber > 0 ? 0 : 1)
  const remainingMinutes = pluralize(roundTo(remainingMinutesNumber, 60), 'минуту', 'минуты', 'минут')

  const remainingHoursNumber = config.cupStartsAt.getHours() - time.getHours() - (remainingMinutesNumber > 0 ? 0 : 1)
  const remainingHours = pluralize(roundTo(remainingHoursNumber, 24), 'час', 'часа', 'часов')

  const remainingDaysNumber = config.cupStartsAt.getDate() - time.getDate() - (remainingHoursNumber > 0 ? 0 : 1)
  const remainingDays = pluralize(remainingDaysNumber, 'день', 'дня', 'дней')

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

export default MainContent
