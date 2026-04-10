import { useState, useEffect } from 'react'

// Fallback reviews (displayed until API responds)
const FALLBACK_REVIEWS = [
  { description: "Il m'a beaucoup aidé surtout le service Data Trading Pro, franchement y'a pas plus simple. Ça aide vraiment, magnifique personne et magnifique service, je vous le recommande.", stars: 5, username: 'Anis Messaoud' },
  { description: "Franchement j'ai jamais vu quelqu'un d'aussi discipliné et à l'écoute. C'est vraiment quelqu'un de bon conseil et le seul Discord que je recommanderai.", stars: 5, username: 'Nelson' },
  { description: "Je le connais depuis presque deux ans maintenant. C'est une super personne, toujours là pour aider. Quelqu'un d'honnête, ambitieux et qui cherche vraiment à faire évoluer les gens autour de lui.", stars: 5, username: 'Soufiane' },
  { description: "Les explications sont claires, structurées, et vont droit au but. Parfait pour ceux qui veulent apprendre le trading sérieusement, sans bullshit.", stars: 5, username: 'Azedine' },
  { description: "Ça fait plus d'un an que je le connais, il est très passionné par ce qu'il fait et est toujours à l'écoute. Vous pouvez rejoindre sans risque, votre portefeuille vous remerciera.", stars: 5, username: 'Maalot' },
  { description: "Pas de vendeur de rêve, que du sérieux, très à l'écoute et de bons conseils. Le top pour apprendre ou bien progresser dans la crypto.", stars: 5, username: 'Le_G' },
  { description: "JustOneTrader est excellent : analyses crypto claires, résumés économiques efficaces. J'ai fait du profit en suivant leurs placements.", stars: 5, username: 'Adrien B.' },
  { description: "Super initiation, mode de fonctionnement simple, de la communication, de l'échange. Hâte de continuer et d'en apprendre plus !", stars: 5, username: 'Wahib' },
]

const FALLBACK = { memberCount: 113, reviewCount: 13, reviews: FALLBACK_REVIEWS }

let cache = null
let pending = null

function fetchStats() {
  if (!pending) {
    pending = fetch('/.netlify/functions/whop-stats', { cache: 'no-store' })
      .then(r => r.json())
      .then(data => {
        // If API returned no reviews, keep fallback reviews
        if (!data.reviews?.length) data.reviews = FALLBACK_REVIEWS
        cache = data
        return data
      })
      .catch(() => null)
  }
  return pending
}

export function useWhopStats() {
  const [stats, setStats] = useState(cache ?? FALLBACK)

  useEffect(() => {
    if (cache) return
    fetchStats().then(data => {
      if (data?.memberCount) setStats(data)
    })
  }, [])

  return stats
}
