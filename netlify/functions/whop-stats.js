exports.handler = async function () {
  const API_KEY = process.env.WHOP_API_KEY
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
