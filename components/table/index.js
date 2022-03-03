import { Fragment, useEffect, useRef, useState } from 'react'

import './table.module.css'
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
  } = props
  const containerRef = useRef(null)
  const [scrollable, setScrollable] = useState(false)
  const [captionID] = useUUID()

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
      <div role="group" className="lists-container" aria-labelledby={captionID}>
        <caption id={captionID}>{title}</caption>
        {data.map((row, i) =>
          <dl role="list" key={i}>
              {columns.map((column, i) => {
                if (column.isRowHeader) {
                  return (
                    <h3 role="heading">{renderCell({ row, column })}</h3>
                  )
                }

                const termId = `term-${column.key}`
                return (
                  <Fragment key={i}>
                    <dt role="term" id={termId}>{renderHeader({ column })}</dt>
                    <dd role="definition" aria-labelledby={termId}>{renderCell({ row, column })}</dd>
                  </Fragment>
                )
              })}
            </dl>
        )}
      </div>

      <div
        className="table-container"
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
              {columns.map((column, i) => (
                <th role="columnheader" scope="col" key={i}>{
                  renderHeader(column)
                }</th>
              ))}
            </tr>
          </thead>

          <tbody role="rowgroup">
            {data.map((row, i) =>
              <tr role="row" key={i}>
                {columns.map((column, i) => {
                  if (column.isRowHeader) {
                    return (
                      <th role="rowheader" scope="row" key={i}>{
                        renderCell({ row, column })
                      }</th>
                    )
                  }

                  return (
                    <td role="gridcell" key={i}>{
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