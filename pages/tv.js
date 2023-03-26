import { useEffect, useMemo, useState } from 'react'

import styles from './tv.module.css'

import Seo from 'components/seo'
import Header from 'components/header'
import TeamResultsTable from 'components/team-results-table'
import { useTeamsValue } from 'hooks/api'
import config from '../config'

const Tv = () => {
  const teams = useTeamsValue({ endIndex: config.teamsNumber })
  const [page, setPage] = useState(0)

  const pageNumber = useMemo(() => {
    if (!teams) {
      return 0
    }

    return Math.ceil(teams.length / config.tvTableLinesPerPage)
  }, [teams])

  const teamsPage = useMemo(() => {
    if (!teams) {
      return []
    }

    const start = page * config.tvTableLinesPerPage
    const end = start + config.tvTableLinesPerPage
    return teams.slice(start, end)
  }, [teams, page])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPage((page) => {
        if (page === pageNumber - 1) {
          return 0
        }

        return page + 1
      })
    }, config.tvTableUpdateIntervalSeconds * 1000)

    return () => clearInterval(intervalId)
  }, [pageNumber])

  return (
    <div className={styles.container}>
      <Seo />

      <div className={styles.header}>
        <Header withLink large />
      </div>

      <main>
        <TeamResultsTable large teams={teamsPage} />
      </main>
    </div>
  )
}

export default Tv
