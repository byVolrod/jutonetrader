<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

define('WHOP_API_KEY', 'apik_OFO0IFUFZjxhm_C2475257_C_4de50b1c4bc58fd200c15959bee97f3371f893b5ff18e80c07749b4a9582d5');

function whop_fetch(string $url): ?array {
    $ctx = stream_context_create([
        'http' => [
            'method'  => 'GET',
            'header'  => 'Authorization: Bearer ' . WHOP_API_KEY . "\r\nAccept: application/json\r\n",
            'timeout' => 8,
        ],
    ]);
    $body = @file_get_contents($url, false, $ctx);
    return $body ? json_decode($body, true) : null;
}

// Membres actifs
$memberships = whop_fetch('https://api.whop.com/v5/company/memberships?status=active&per=1');
$memberCount = $memberships['pagination']['total_count'] ?? 0;

// Avis
$reviewsData = whop_fetch('https://api.whop.com/v5/company/reviews?per=25');
$reviews = [];
foreach (($reviewsData['data'] ?? []) as $r) {
    $desc = trim($r['description'] ?? '');
    if (strlen($desc) > 10) {
        $reviews[] = [
            'description' => $desc,
            'stars'       => $r['stars'] ?? 5,
            'created_at'  => $r['created_at'] ?? null,
        ];
    }
}

echo json_encode([
    'memberCount' => $memberCount,
    'reviews'     => $reviews,
], JSON_UNESCAPED_UNICODE);
