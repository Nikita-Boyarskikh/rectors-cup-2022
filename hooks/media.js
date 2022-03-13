import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export const useQuery = ({ query }) => {
  const media = useMemo(() => {
    try {
      return matchMedia(query)
    } catch {
      return {
        matches: false,
        addEventListener: () => {},
        removeEventListener: () => {},
      }
    }
  }, [query])
  const [isMatches, setIsMatches] = useState(media.matches)

  const changeMediaMatch = useCallback(() => {
    setIsMatches(media.matches)
  }, [media.matches])

  useEffect(() => {
    media.addEventListener('change', changeMediaMatch)
    return () => media.removeEventListener('change', changeMediaMatch)
  })

  return isMatches;
}

export const useMobile = () => {
  return useQuery({ query: 'screen and (max-width: 1200px)' })
}
