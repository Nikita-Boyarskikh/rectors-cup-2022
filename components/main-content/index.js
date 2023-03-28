import { useCallback, useEffect, useMemo, useState } from 'react'

import styles from './index.module.css'

import config from '../../config'
import { useCurrentTime, useUUID } from 'hooks/utils'
import { useCommonValue, useTeamsValue } from 'hooks/api'
import TeamResultsTable from 'components/team-results-table'
import PersonalResultsTable from 'components/personal-results-table'
import Toggle from 'components/toggle'
import SearchBar from 'components/search-bar'
import Countdown from './countdown'
import Invite from './invite'

const MainContent = () => {
  const toggleId = useUUID()
  const teams = useTeamsValue({ endIndex: config.teamsNumber })
  const results = useCommonValue({
    // Because of space of one row between start numbers
    endIndex: (config.teamsNumber + 1) * config.participantsNumber + config.personalMembersNumber,
  })
  const isLoading = teams === null

  const updateInterval = 1000 / config.countdownUpdatePerSecond
  const { time, start, stop } = useCurrentTime({ updateInterval })
  const cupHasStarted = config.cupStartsAt <= time

  const [currentTableVariant, setTableVariant] = useState('personal')
  const tableVariants = useMemo(() => {
    return [
      {
        id: 'personal',
        value: 'ЛИЧНЫЕ',
      },
      {
        id: 'team',
        value: 'КОМАНДНЫЕ',
      },
    ]
  }, [])

  useEffect(() => {
    if (!cupHasStarted) {
      start()
      return stop
    }

    stop()
  }, [cupHasStarted, start, stop])

  const [searchStr, setSearchStr] = useState('')

  const filteredTeams = useMemo(() => {
    if (!teams) {
      return []
    }

    if (!searchStr) {
      return teams
    }

    return teams.filter((team) => {
      const searchLower = searchStr.toLowerCase()
      return team.id.toLowerCase().includes(searchLower) || team.name.toLowerCase().includes(searchLower)
    })
  }, [searchStr, teams])

  const filteredResults = useMemo(() => {
    if (!results) {
      return []
    }

    if (!searchStr) {
      return results
    }

    return results.filter((result) => {
      const searchLower = searchStr.toLowerCase()
      return result.id.toLowerCase().includes(searchLower) || result.name.toLowerCase().includes(searchLower)
    })
  }, [searchStr, results])

  if (cupHasStarted) {
    return (
      <main className={styles.main}>
        <div className={styles.controls}>
          {/*<SearchBar onChange={setSearchStr} />*/}
          <input
            placeholder="Поиск"
            className={styles.searchInput}
            value={searchStr}
            onInput={(event) => {
              setSearchStr(event.target.value)
            }}
          />

          <div className={styles.toggleView}>
            <label className={styles.label} htmlFor={toggleId}>ПРОМЕЖУТОЧНЫЕ РЕЗУЛЬТАТЫ</label>
            <Toggle variants={tableVariants} value={currentTableVariant} onChange={setTableVariant} id={toggleId} />
          </div>
        </div>
        <div className={styles.table}>
          {
            currentTableVariant === 'team' ? (
              <TeamResultsTable teams={filteredTeams} />
            ) : (
              <PersonalResultsTable results={filteredResults} />
            )
          }
        </div>
      </main>
    )
  }

  return (
    <main className={styles.main}>
      <Countdown time={time} />
      <Invite />
    </main>
  )
}

export default MainContent
