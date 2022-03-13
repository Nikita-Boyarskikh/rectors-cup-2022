import { useCallback, useEffect, useRef, useState } from 'react'

export const useQuery = ({ query }) => {
  const media = useRef(matchMedia(query)).current
  const [isMatches, setIsMatches] = useState(media.matches)

  const changeMediaMatch = useCallback(() => {
    setIsMatches(media.matches)
  }, [media.matches])

  useEffect(() => {
    media.addEventListener('change', changeMediaMatch)
    return () => media.removeEventListener('change', changeMediaMatch)
  })

  console.log(isMatches)
  return isMatches;
}

export const useMobile = () => {
  return useQuery({ query: 'screen and (max-width: 1200px)' })
}
