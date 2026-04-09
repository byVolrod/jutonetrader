exports.handler = async function () {
  const API_KEY = 'apik_OFO0IFUFZjxhm_C2475257_C_4de50b1c4bc58fd200c15959bee97f3371f893b5ff18e80c07749b4a9582d5'
  const headers = { Authorization: `Bearer ${API_KEY}` }

  try {
    const [membRes, revRes] = await Promise.all([
      fetch('https://api.whop.com/api/v2/memberships', { headers }),
      fetch('https://api.whop.com/api/v2/reviews', { headers }),
    ])

    const [membData, revData] = await Promise.all([membRes.json(), revRes.json()])

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300', // cache 5 min
      },
      body: JSON.stringify({
        memberCount: membData.pagination?.total_count ?? 135,
        reviewCount: revData.pagination?.total_count ?? 13,
      }),
    }
  } catch {
    return {
      statusCode: 200,
      body: JSON.stringify({ memberCount: 135, reviewCount: 13 }),
    }
  }
}
