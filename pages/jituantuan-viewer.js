import { useEffect } from 'react'

export default function JituantuanViewerRedirect() {
  useEffect(() => {
    window.location.replace('/jituantuan.htm')
  }, [])

  return null
}
