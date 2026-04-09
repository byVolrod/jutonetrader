/**
 * Whop live stats widget
 * Usage: <script src="whop-widget.js"></script>
 *
 * Targets:
 *   - [data-whop="member-count"]  → replaced with member count number
 *   - [data-whop="reviews"]       → filled with review cards
 */

(async function () {
  let data;
  try {
    const res = await fetch('/whop-data.php', { cache: 'no-store' });
    data = await res.json();
  } catch (e) {
    console.warn('[Whop widget] fetch failed', e);
    return;
  }

  // --- Member count ---
  document.querySelectorAll('[data-whop="member-count"]').forEach(el => {
    el.textContent = '+' + data.memberCount;
  });

  // --- Reviews slider ---
  const containers = document.querySelectorAll('[data-whop="reviews"]');
  if (!containers.length || !data.reviews?.length) return;

  const stars = n => '★'.repeat(n) + '☆'.repeat(5 - n);

  containers.forEach(container => {
    container.innerHTML = data.reviews.map(r => `
      <div class="whop-review-card">
        <div class="whop-review-stars">${stars(r.stars)}</div>
        <p class="whop-review-text">${r.description.replace(/</g, '&lt;')}</p>
      </div>
    `).join('');
  });
})();
