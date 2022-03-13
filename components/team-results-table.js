import { memo, useRef } from 'react'
import Table from './table'

const TeamResultsTable = ({ teams, large = false }) => {
  const columns = useRef([
    {
      key: 'place',
      header: 'Место',
      style: {
        minWidth: large ? '140px' : '100px',
      },
    },
    {
      key: 'id',
      header: '№',
      style: {
        minWidth: large ? '70px' : '50px',
      },
    },
    {
      key: 'name',
      header: 'Команда',
      style: {
        width: '15%',
        minWidth: large ? '185px' : '120px',
      },
    },
    {
      key: 'total1',
      header: 'Участник 1',
      style: {
        width: '12.5%',
        minWidth: large ? '235px' : '150px',
      },
    },
    {
      key: 'total2',
      header: 'Участник 2',
      style: {
        width: '12.5%',
        minWidth: large ? '235px' : '150px',
      },
    },
    {
      key: 'total3',
      header: 'Участник 3',
      style: {
        width: '12.5%',
        minWidth: large ? '235px' : '150px',
      },
    },
    {
      key: 'total4',
      header: 'Участник 4',
      style: {
        width: '12.5%',
        minWidth: large ? '235px' : '150px',
      },
    },
    {
      key: 'total5',
      header: 'Участник 5',
      style: {
        width: '15%',
        minWidth: large ? '235px' : '150px',
      },
    },
    {
      key: 'result',
      header: 'Итог',
      style: {
        width: '12.5%',
        minWidth: large ? '250px' : '175px',
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
