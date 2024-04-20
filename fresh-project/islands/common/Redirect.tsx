import { useEffect } from 'preact/hooks'

interface IRedicrectProps {
  path: string
}

export const Redirect = ({ path }: IRedicrectProps) => {
  useEffect(() => {
    window.location.href = path
  }, [])

  return null
}

export default Redirect