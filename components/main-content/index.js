import { useEffect } from 'react'

import config from '../../config'
import { useCurrentTime } from 'hooks/utils'
import Countdown from './countdown'
import TeamResultsTable from 'components/team-results-table'
import { useTeamsValue } from '../../hooks/api'
import Invite from './invite'

const MainContent = () => {
  const teams = useTeamsValue()

  const updateInterval = 1000 / config.countdownUpdatePerSecond
  const { time, start, stop } = useCurrentTime({ updateInterval })
  const cupHasStarted = config.cupStartsAt <= time

  useEffect(() => {
    if (!cupHasStarted) {
      start()
      return stop
    }

    stop()
  }, [cupHasStarted, start, stop])

  if (cupHasStarted) {
    return <TeamResultsTable teams={teams || []} />
  }

  return (
    <>
      <Countdown time={time} />
      <Invite />
    </>
  )
}

export default MainContent
