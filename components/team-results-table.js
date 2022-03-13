import { memo, useMemo, useRef } from 'react'

import { useMobile } from 'hooks/media'
import Table from './table'

const TeamResultsTable = ({ teams, large = false }) => {
  const isMobile = useMobile()
  
  const columns = useMemo(() => {
    const result = {
      key: 'result',
      header: 'Итог',
      style: {
        width: '12.5%',
        minWidth: large ? '250px' : '175px',
      },
    }

    return [
      {
        key: 'place',
        header: isMobile ? '' : 'Место',
        style: {
          minWidth: isMobile ? '50px' : (
            large ? '140px' : '100px'
          )
        },
      },
      {
        key: 'name',
        header: isMobile ? '' : 'Команда',
        isRowHeader: true,
        style: {
          width: isMobile ? '10%' : '15%',
          minWidth: isMobile ? '75px' : (
            large ? '185px' : '125px'
          ),
        },
      },
      ...(isMobile ? [result] : []),
      {
        key: 'total1',
        header: isMobile ? '1' : 'Участник 1',
        style: {
          width: '12.5%',
          minWidth: large ? '235px' : '150px',
        },
      },
      {
        key: 'total2',
        header: isMobile ? '2' : 'Участник 2',
        style: {
          width: '12.5%',
          minWidth: large ? '235px' : '150px',
        },
      },
      {
        key: 'total3',
        header: isMobile ? '3' : 'Участник 3',
        style: {
          width: '12.5%',
          minWidth: large ? '235px' : '150px',
        },
      },
      {
        key: 'total4',
        header: isMobile ? '4' : 'Участник 4',
        style: {
          width: '12.5%',
          minWidth: large ? '235px' : '150px',
        },
      },
      {
        key: 'total5',
        header: isMobile ? '5' : 'Участник 5',
        style: {
          width: '15%',
          minWidth: large ? '235px' : '150px',
        },
      },
      ...(isMobile ? [] : [result]),
    ]
  }, [isMobile, large])

  return (
    <Table
      title="Промежуточные результаты"
      columns={columns}
      data={teams}
      large={large}
    />
  )
}

export default memo(TeamResultsTable)
