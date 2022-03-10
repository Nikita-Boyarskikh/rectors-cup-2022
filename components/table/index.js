import { Fragment, useEffect, useRef, useState } from 'react'

import styles from './table.module.css'

import { useUUID } from 'hooks/utils'

const renderDefaultHeader = ({ column }) => {
  return column.header
}

const renderDefaultCell = ({ row, column }) => {
  return row[column.key]
}

const Table = (props) => {
  const {
    title,
    columns,
    data,
    renderNoData,
    renderHeader = renderDefaultHeader,
    renderCell = renderDefaultCell,
    dataId = 'id',
  } = props
  const containerRef = useRef(null)
  const [scrollable, setScrollable] = useState(false)
  const captionID = useUUID()

  useEffect(() => {
    const container = containerRef.current
    const scrollable = container.scrollWidth > container.clientWidth
    setScrollable(scrollable)
  }, [])

  if (data.length === 0 && renderNoData) {
    return renderNoData(props)
  }

  return (
    <>
      <div role="group" className={styles.lists} aria-labelledby={captionID}>
        <h2 id={captionID}>{title}</h2>
        {data.map((row) =>
          <dl role="list" key={row[dataId]}>
              {columns.map((column) => {
                if (column.isRowHeader) {
                  return (
                    <h3 role="heading">{renderCell({ row, column })}</h3>
                  )
                }

                const termId = `term-${column.key}`
                return (
                  <Fragment key={column.key}>
                    <dt role="term" id={termId}>{renderHeader({ column })}</dt>
                    <dd role="definition" aria-labelledby={termId}>{renderCell({ row, column })}</dd>
                  </Fragment>
                )
              })}
            </dl>
        )}
      </div>

      <div
        className={styles.table}
        role="group"
        ref={containerRef}
        tabIndex={scrollable ? '0' : null}
        aria-labelledby={captionID}
      >
        <table role="grid">
          <caption id={captionID}>
            {title}
            {scrollable && (
              <small>(scroll to see more)</small>
            )}
          </caption>

          <thead role="rowgroup">
            <tr role="row">
              {columns.map((column) => (
                <th role="columnheader" scope="col" key={column.key}>{
                  renderHeader(column)
                }</th>
              ))}
            </tr>
          </thead>

          <tbody role="rowgroup">
            {data.map((row) =>
              <tr role="row" key={row[dataId]}>
                {columns.map((column) => {
                  if (column.isRowHeader) {
                    return (
                      <th role="rowheader" scope="row" key={column.key}>{
                        renderCell({ row, column })
                      }</th>
                    )
                  }

                  return (
                    <td role="gridcell" key={column.key}>{
                      renderCell({ row, column })
                    }</td>
                  )
                })}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table