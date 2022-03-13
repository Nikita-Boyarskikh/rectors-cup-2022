import { memo, useRef } from 'react'
import Table from './table'

const PersonalResultsTable = ({ results }) => {
  const columns = useRef([
    {
      key: 'id',
      header: '№',
      style: {
        width: '5%',
        minWidth: '50px'
      },
    },
    {
      key: 'name',
      header: 'ФИО',
      style: {
        width: '15%',
        minWidth: '185px',
      },
    },
    {
      key: 'teamName',
      header: 'Команда',
      style: {
        width: '5%',
        minWidth: '125px',
      },
    },
    {
      key: 'swimmingTime',
      header: 'Плаванье',
      style: {
        width: '10%',
        minWidth: '135px',
      },
    },
    {
      key: 'climbingTime1',
      header: 'Скалолазанье 1',
      style: {
        width: '10%',
        minWidth: '205px',
      },
    },
    {
      key: 'climbingTime2',
      header: 'Скалолазанье 2',
      style: {
        width: '10%',
        minWidth: '205px',
      },
    },
    {
      key: 'shootingTime',
      header: 'Стрельба и бег',
      style: {
        width: '25%',
        minWidth: '200px',
      },
    },
    {
      key: 'result',
      header: 'Итог',
      style: {
        width: '10%',
        minWidth: '200px',
      },
    },
  ]).current

  return (
    <Table
      title="Личные результаты"
      columns={columns}
      data={results}
    />
  )
}

export default memo(PersonalResultsTable)
