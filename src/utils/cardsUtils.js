export const formatTimeDifference = milliseconds => {
  const totalMinutes = Math.floor(milliseconds / 60000);
  const hours = Math.floor(totalMinutes / 60)
    .toString()
    .padStart(2, '0');
  const minutes = (totalMinutes % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const getWindDirection = angle => {
  const directions = [
    'Северный',
    'Северо-восточный',
    'Восточный',
    'Юго-восточный',
    'Южный',
    'Юго-западный',
    'Западный',
    'Северо-западный',
  ];
  return directions[Math.round(angle / 45) % 8];
};

export const getLocalDate = (
  timestamp = new Date().getTime(),
  timezoneOffsetInMs
) => {
  const date = new Date(timestamp);
  const utcHoursOffset = -date.getTimezoneOffset() * 60 * 1000;
  const newDate = new Date(
    date.getTime() - utcHoursOffset + timezoneOffsetInMs
  );
  return newDate;
};

export const getFormattedTime = timestamp => {
  if (!timestamp) return '—';
  const date = new Date(timestamp);
  return `${String(date.getHours()).padStart(2, 0)}:${String(
    date.getMinutes()
  ).padStart(2, 0)}`;
};

export const getTimeUntilOrAfter = (currentTimestamp, eventTimestamp) => {
  const eventDate = new Date(eventTimestamp);
  const diffMs = eventDate - currentTimestamp;
  const diffMinutes = Math.floor(Math.abs(diffMs) / 60000);
  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;

  if (diffMs >= 0) {
    return `Осталось ${getFormattedTime(new Date(0, 0, 0, hours, minutes))}`;
  } else {
    return `Прошло ${getFormattedTime(new Date(0, 0, 0, hours, minutes))}`;
  }
};

export const getPressureDescription = value => {
  if (value >= 740 && value <= 760) {
    return 'Нормальное';
  } else if (value > 760) {
    return 'Повышенное';
  } else {
    return 'Пониженное';
  }
};
