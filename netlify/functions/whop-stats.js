exports.handler = async function () {
  const API_KEY = 'apik_OFO0IFUFZjxhm_C2475257_C_4de50b1c4bc58fd200c15959bee97f3371f893b5ff18e80c07749b4a9582d5'
  const headers = { Authorization: `Bearer ${API_KEY}` }

  try {
    const [membRes, revRes] = await Promise.all([
      fetch('https://api.whop.com/v5/company/memberships?status=active&per=1', { headers }),
      fetch('https://api.whop.com/v5/company/reviews?per=25', { headers }),
    ])

    const [membData, revData] = await Promise.all([membRes.json(), revRes.json()])

    const filtered = (revData.data ?? []).filter(r => (r.description ?? '').trim().length > 10)

    // Fetch username for each reviewer
    const reviews = await Promise.all(filtered.map(async r => {
      let username = null
      try {
        const uRes = await fetch(`https://api.whop.com/v5/users/${r.user}`, { headers })
        const uData = await uRes.json()
        // Try all possible name fields
        username = uData.name || uData.username || uData.public_name || uData.display_name || null
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
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
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
