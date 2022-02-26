import useSWR, { SWRConfig } from 'swr'

import config from '../config'

const Config = ({ children }) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: config.api.updateInterval,
        focusThrottleInterval: config.api.focusThrottleInterval,
        dedupingInterval: config.api.dedupingInterval,
        errorRetryInterval: config.api.errorRetryInterval,
        errorRetryCount: config.api.errorRetryCount,
        async fetcher(...args) {
          const response = await fetch(...args)
          return await response.json()
        },
        onLoadingSlow(key) {
          console.warn(`${key} is loading slow...`)
        },
        onError: (error, key) => {
          if (error.status !== 403 && error.status !== 404) {
            console.error(`${key} is failed to load`)
          }
        },
      }}
    >
      {children}
    </SWRConfig>
  )
}

export const useRangeValue = ({ range, gid = null }) => {
  // https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
  const baseUrl = 'https://sheets.googleapis.com'
  const rangeWithGid = gid ? `${gid}!${range}` : range
  const params = `key=${config.api.apiKey}`
  const url = `${baseUrl}/v4/spreadsheets/${config.api.spreadsheetId}/values/${rangeWithGid}?${params}`
  const { data } = useSWR(url)

  if (data) {
    return data.values ?? []
  }

  return null
}

export const useValue = ({ index = null, endIndex = index, columns = [], gid = null } = {}) => {
  const formatIndex = (index) => {
    if (!index) {
      return ''
    }

    // starts from 1 and +1 additionally because of header line
    return `${index + 2}`
  }

  const startColumn = 'A'
  // assume that we have less than 26 columns :)
  const endColumnCharCode = startColumn.charCodeAt(0) + columns.length - 1
  const endColumn = String.fromCharCode(endColumnCharCode)

  const startIndexStr = formatIndex(index)
  const endIndexStr = formatIndex(endIndex)
  const range = `${startColumn}${startIndexStr}:${endColumn}${endIndexStr}`

  const rows = useRangeValue({ gid, range })

  if (!rows || rows.length === 0) {
    return null
  }

  return rows.map((row) => {
    return row.reduce((object, value, index) => {
      const key = columns[index]
      object[key] = value
      return object
    }, {})
  })
}

export const useInfoValue = ({ index, endIndex = index } = {}) => {
  return useValue({
    index,
    endIndex,
    gid: config.api.infoGridId,
    columns: [
      'time',
      'startNumber',
      'swimmingResult',
      'climbingResult1',
      'climbingPenalty1',
      'climbingResult2',
      'climbingPenalty2',
      'runningAndShootingResult',
      'shootingPenalty',
      'total',
    ],
  })
}

export const useStudentValue = ({ index, endIndex = index } = {}) => {
  return useValue({
    index,
    endIndex,
    gid: config.api.studentsGridId,
    columns: [
      'startNumber',
      'surname',
      'name',
      'secondName',
      'sex',
      'birthYear',
      'participantNumber',
      'teamNumber',
    ],
  })
}

export const useTeamValue = ({ index, endIndex = index } = {}) => {
  return useValue({
    index,
    endIndex,
    gid: config.api.teamsGridId,
    columns: [
      'teamNumber',
      'faculty',
      'name',
    ],
  })
}

export const useUpdateEnabled = () => {
  const rows = useRangeValue({ gid: config.api.infoGridId, range: 'L2' })
  return rows && rows.length === 1 && rows[0][0] === 'TRUE'
}

export const useInfo = () => {
  const isEnabled = useUpdateEnabled()
  const info = useInfoValue()
  return isEnabled ? info : null
}

export default Config
