exports.handler = async function () {
  const API_KEY = 'apik_OFO0IFUFZjxhm_C2475257_C_4de50b1c4bc58fd200c15959bee97f3371f893b5ff18e80c07749b4a9582d5'
  const headers = { Authorization: `Bearer ${API_KEY}` }

  function formatName(raw) {
    if (!raw) return null
    // Capitalize each word, replace dots/underscores/dashes with spaces
    return raw
      .replace(/[._-]/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase())
      .trim()
  }

  try {
    const [membRes, revRes] = await Promise.all([
      fetch('https://api.whop.com/v5/company/memberships?status=active&per=1', { headers }),
      fetch('https://api.whop.com/v5/company/reviews?per=25', { headers }),
    ])

    const [membData, revData] = await Promise.all([membRes.json(), revRes.json()])

    const filtered = (revData.data ?? []).filter(r => (r.description ?? '').trim().length > 10)

    // For each reviewer, fetch their membership to get discord username or email prefix
    const reviews = await Promise.all(filtered.map(async r => {
      let username = null
      try {
        const mRes = await fetch(
          `https://api.whop.com/api/v2/memberships?user_id=${r.user_id}&per=1`,
          { headers: { Authorization: `Bearer ${API_KEY}` } }
        )
        const mData = await mRes.json()
        const mem = mData.data?.[0]
        if (mem) {
          const discord = mem.discord?.username
          const email = mem.email
          if (discord) {
            username = formatName(discord.replace(/#\d+$/, ''))
          } else if (email) {
            username = formatName(email.split('@')[0])
          }
        }
      } catch {}

      return {
        description: r.description.trim(),
        stars: r.stars ?? 5,
        username,
        created_at: r.created_at ?? null,
      }
    }))

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' },
      body: JSON.stringify({
        memberCount: membData.pagination?.total_count ?? 135,
        reviewCount: revData.pagination?.total_count ?? 13,
        reviews,
      }),
    }
  } catch (e) {
    return {
      statusCode: 200,
      body: JSON.stringify({ memberCount: 135, reviewCount: 13, reviews: [] }),
    }
  }
}
