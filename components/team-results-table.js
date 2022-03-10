import { memo, useRef } from 'react'
import Table from './table'

const TeamResultsTable = ({ info }) => {
  const columns = useRef([
    // TODO
  ]).current

  return (
    <Table
      title="Промежуточные результаты"
      columns={columns}
      data={info}
    />
  )
}

export default memo(TeamResultsTable)
