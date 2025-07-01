export function getLocalDateTime(timezone) {
  if (typeof timezone !== 'number' || isNaN(timezone)) {
    return undefined;
  }
  const now = Date.now();
  const utc = now + new Date().getTimezoneOffset() * 60000;
  const target = utc + timezone * 1000;
  const local = new Date(target);
  return [
    local.toLocaleDateString('ru-RU', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
    }),
    local.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
    }),
  ];
}