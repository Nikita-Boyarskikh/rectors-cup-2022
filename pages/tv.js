import { useEffect, useMemo, useState } from 'react'

import styles from './tv.module.css'

import Seo from 'components/seo'
import Header from 'components/header'
import Table from 'components/table'
import { useInfo } from 'hooks/api'
import config from '../config'

const Tv = () => {
  const info = useInfo()
  const [page, setPage] = useState(0)

  const pageNumber = useMemo(() => {
    if (!info) {
      return 0
    }

    return Math.ceil(info.length / config.tvTableLinesPerPage)
  }, [info])

  const infoPage = useMemo(() => {
    if (!info) {
      return []
    }

    const start = page * config.tvTableLinesPerPage
    const end = start + config.tvTableLinesPerPage
    return info.slice(start, end).map((row) => {
      return row  // TODO
    })
  }, [info, page])

  useEffect(() => {
    setInterval(() => {
      setPage((page) => {
        if (page === pageNumber - 1) {
          return 0
        }

        return page + 1
      })
    }, config.tvTableUpdateIntervalSeconds * 1000)
  }, [pageNumber])

  return (
    <>
      <Seo />
      <div className={styles.header}>
        <Header withLink />
      </div>
      <Table
        title="Промежуточные результаты"
        columns={[
          // TODO
        ]}
        data={infoPage}
      />
    </>
  )
}

export default Tv
