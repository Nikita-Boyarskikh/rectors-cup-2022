import { v4 as uuidV4 } from 'uuid'
import { useCallback, useRef, useState } from 'react'

export const useUUID = () => {
  return useRef(uuidV4()).current
}

export const useCurrentTime = ({ updateInterval = 0 } = {}) => {
  const requestRef = useRef(null)
  const previousTimeRef = useRef(null)
  const elapsedTimeRef = useRef(0)
  const [time, setTime] = useState(new Date())

  const loop = useCallback((time) => {
    if (!previousTimeRef.current) {
      previousTimeRef.current = time
      requestRef.current = requestAnimationFrame(loop)
      return
    }

    const deltaTime = time - previousTimeRef.current
    elapsedTimeRef.current += deltaTime
    previousTimeRef.current = time

    if (elapsedTimeRef.current > updateInterval) {
      elapsedTimeRef.current = 0
      setTime(new Date())
    }

    requestRef.current = requestAnimationFrame(loop)
  }, [updateInterval])

  const stop = useCallback(() => {
    requestRef.current && cancelAnimationFrame(requestRef.current)
    previousTimeRef.current = null
  }, [])

  const start = useCallback(() => {
    requestRef.current = requestAnimationFrame(loop)
  }, [loop])

  return { time, stop, start }
}
