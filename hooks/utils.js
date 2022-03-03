import uuid from 'uuid'
import { useState } from 'react'


export const useUUID = () => {
  const [uuidStr] = useState(uuid.v4())
  return uuidStr
}
