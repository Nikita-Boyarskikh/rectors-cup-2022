import { useEffect, useState } from 'react';

const SPREADSHEET_ID = '1J4zdyvbm3qD3O5ZOOzfjIyh1JH24sjrETPOF5qgEwuo'
const API_KEY = 'AIzaSyDkSzvnIny9wTOdEf6V_gPABamvHtYxrI4'
const INFO_GRID_ID = 'info'
const STUDENTS_GRID_ID = 'students'
const TEAMS_GRID_ID = 'teams'
const UPDATE_INTERVAL = 15000

const getRangeValue = async ({ range, gid = null }) => {
  // https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
  const rangeWithGid = gid ? `${gid}!${range}` : range
  const url =`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${rangeWithGid}?key=${API_KEY}`
  const response = await fetch(url)
  const json = await response.json()
  return json.values ?? []
}

const getValue = async ({ index = null, endIndex = index, columns = [], gid = null } = {}) => {
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

  const rows = await getRangeValue({ gid, range })

  if (rows.length === 0) {
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

const getInfoValue = async ({ index, endIndex = index } = {}) => {
  return await getValue({
    index,
    endIndex,
    gid: INFO_GRID_ID,
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

const getStudentValue = async ({ index, endIndex = index } = {}) => {
  return await getValue({
    index,
    endIndex,
    gid: STUDENTS_GRID_ID,
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

const getTeamValue = async ({ index, endIndex = index } = {}) => {
  return await getValue({
    index,
    endIndex,
    gid: TEAMS_GRID_ID,
    columns: [
      'teamNumber',
      'faculty',
      'name',
    ],
  })
}

const checkIfEnabled = async () => {
  const rows = await getRangeValue({ gid: INFO_GRID_ID, range: 'L2' })
  return rows.length === 1 && rows[0][0] === 'TRUE'
}

const getInfo = async () => {
  if (await checkIfEnabled()) {
    return await getInfoValue()
  }

  return null;
}

export const useInfo = () => {
  const [info, setInfo] = useState(null)

  const updateInfo = () => {
    getInfo().then(data => {
      setInfo(data)
    })
  }

  useEffect(() => {
    updateInfo()

    const interval = setInterval(updateInfo, UPDATE_INTERVAL)

    return () => {
      clearInterval(interval)
    }
  }, [setInfo])

  return info
}
