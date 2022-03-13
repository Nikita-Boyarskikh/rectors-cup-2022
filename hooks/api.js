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
  const endIndexStr = formatIndex(endIndex - 1)
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

export const useCommonValue = ({ index = 0, endIndex = index } = {}) => {
  const indexOffset = 7

  const results = useValue({
    index: index + indexOffset,
    endIndex: endIndex + indexOffset,
    gid: config.api.commonGridId,
    columns: [
      'id',
      'teamId',
      'participantNumber',
      'surname',
      'name',
      'teamName',
      'faculty',
      'birthYear',
      'sex',
      'swimmingTime',
      'swimmingPenalty',
      'climbingTime1',
      'climbingPenalty1',
      'climbingTime2',
      'climbingPenalty2',
      'shootingPenalty1',
      'shootingPenalty2',
      'shootingTime',
      'totalTime',
      'coefficient',
      'result',
    ],
  })

  if (!results) {
    return null
  }

  return results.filter((value) => {
    return value.name
  }).map((result) => {
    return {
      ...result,
      name: result.surname + ' ' + result.name,
    }
  })
}

export const useTeamsValue = ({ index = 0, endIndex = index } = {}) => {
  const indexOffset = 4

  const teams = useValue({
    index: index + indexOffset,
    endIndex: endIndex + indexOffset,
    gid: config.api.teamsGridId,
    columns: [
      'id',
      'name',
      'faculty',
      'total1',
      'total2',
      'total3',
      'total4',
      'total5',
      'result',
    ],
  })

  if (!teams) {
    return null
  }

  return teams.filter((team) => {
    const isResultCorrect = /\d{2}:\d{2}.\d{2}/.test(team.result)
    if (!isResultCorrect) {
      console.error(`Team result is not in correct format: ${team.result}`)
    }
    return team.name && isResultCorrect
  }).sort((a, b) => {
    return a.result.localeCompare(b.result)
  })
}

export default Config
