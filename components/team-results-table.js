import { memo, useRef } from 'react'
import Table from './table'

const TeamResultsTable = ({ teams, large = false }) => {
  const columns = useRef([
    {
      key: 'id',
      header: '№',
      style: {
        minWidth: '70px',
      },
    },
    {
      key: 'name',
      header: 'Команда',
      style: {
        width: '15%',
        minWidth: '185px',
      },
    },
    {
      key: 'total1',
      header: 'Участник 1',
      style: {
        width: '12.5%',
        minWidth: '235px',
      },
    },
    {
      key: 'total2',
      header: 'Участник 2',
      style: {
        width: '12.5%',
        minWidth: '235px',
      },
    },
    {
      key: 'total3',
      header: 'Участник 3',
      style: {
        width: '12.5%',
        minWidth: '235px',
      },
    },
    {
      key: 'total4',
      header: 'Участник 4',
      style: {
        width: '12.5%',
        minWidth: '235px',
      },
    },
    {
      key: 'total5',
      header: 'Участник 5',
      style: {
        width: '15%',
        minWidth: '235px',
      },
    },
    {
      key: 'result',
      header: 'Общее время',
      style: {
        width: '12.5%',
        minWidth: '280px',
      },
    },
  ]).current

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
