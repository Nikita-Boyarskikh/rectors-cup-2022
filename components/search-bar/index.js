import throttle from 'lodash.throttle'
import { useCallback, useEffect, useMemo, useState } from 'react'

import Input from 'components/input'

const SearchBarX = ({ value = '', onChange = () => {}, wait = 100 } = {}) => {
  const [searchStr, setSearchStr] = useState(value)
  const [throttledSearchValue, setThrottledSearchValue] = useState(searchStr)

  const updateSearchResults = useMemo(() => {
    return throttle(setThrottledSearchValue, wait)
  }, [wait])

  const search = useCallback((event) => {
    setSearchStr(event.target.value)
    updateSearchResults(event.target.value)
  }, [updateSearchResults])

  useEffect(() => {
    onChange(throttledSearchValue)
  }, [onChange, throttledSearchValue])

  useEffect(() => {
    return () => {
      updateSearchResults.cancel()
    }
  }, [updateSearchResults])

  return (
    <Input value={searchStr} onChange={search} />
  )
}

const SearchBar = ({ onChange = () => {} } = {}) => {
  const [value, setValue] = useState('')
  const onInput = useCallback((event) => {
    setValue(event.target.value)
    onChange(event.target.value)
  }, [onChange])
  
  return (
    <input value={value} onInput={onInput} />
  )
}

export default SearchBar
