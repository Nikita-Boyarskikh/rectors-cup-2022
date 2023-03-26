import { memo, useRef } from 'react'
import Table from './table'

const PersonalResultsTable = ({ results }) => {
  const columns = useRef([
    {
      key: 'place',
      header: 'Место',
      style: {
        width: '5%',
        minWidth: '100px'
      },
    },
    {
      key: 'id',
      header: '№',
      style: {
        width: '5%',
        minWidth: '70px'
      },
    },
    {
      key: 'name',
      header: 'ФИО',
      style: {
        width: '25%',
        minWidth: '185px',
      },
    },
    {
      key: 'teamName',
      header: 'Команда',
      style: {
        width: '10%',
        minWidth: '125px',
      },
    },
    {
      key: 'swimmingTime',
      header: 'Плавание',
      style: {
        width: '10%',
        minWidth: '135px',
      },
    },
    {
      key: 'climbingTime1',
      header: 'Скалолазание 1',
      style: {
        width: '10%',
        minWidth: '210px',
      },
    },
    {
      key: 'climbingTime2',
      header: 'Скалолазание 2',
      style: {
        width: '10%',
        minWidth: '210px',
      },
    },
    {
      key: 'shootingTime',
      header: 'Стрельба и бег',
      style: {
        width: '12.5%',
        minWidth: '195px',
      },
    },
    {
      key: 'result',
      header: 'Итог',
      style: {
        width: '7.5%',
        minWidth: '125px',
      },
    },
  ]).current

  return (
    <Table
      title="Личные результаты"
      columns={columns}
      data={results}
      dataId="key"
    />
  )
}

export default memo(PersonalResultsTable)
