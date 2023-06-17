const mapping: Record<string, string> = {
  organizations: 'organization',
  'price-histories': 'price_history',
  users: 'user',
  'video-games': 'video_game',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
