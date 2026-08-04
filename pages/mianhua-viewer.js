import { useEffect } from 'react'

export default function MianhuaViewerRedirect() {
  useEffect(() => {
    window.location.replace('/mianhua.html')
  }, [])

  return null
}
