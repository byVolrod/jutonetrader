import { useState, useEffect } from 'react'

// Module-level cache — fetches only once per page load
let cache = null
let pending = null

function fetchStats() {
  if (!pending) {
    pending = fetch('/.netlify/functions/whop-stats')
      .then(r => r.json())
      .then(data => { cache = data; return data })
      .catch(() => null)
  }
  return pending
}

export function useWhopStats() {
  const [stats, setStats] = useState(cache ?? { memberCount: 135, reviewCount: 13 })

  useEffect(() => {
    if (cache) return
    fetchStats().then(data => {
      if (data?.memberCount) setStats(data)
    })
  }, [])

  return stats
}
