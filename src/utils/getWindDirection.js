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
  
  export function getWindDirection(deg) {
    deg = (deg + 180) % 360;
    const index = Math.floor((deg + 22.5) / 45) % 8;
    return directions[index];
  }