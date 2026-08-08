import { useEffect } from 'react'

export default function MianhuaViewerRedirect() {
  useEffect(() => {
    window.location.replace('/mianhua.htm')
  }, [])

  return null
}
