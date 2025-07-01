const cardsData = [
  {
    title: 'Влажность',
    name: 'humidity',
    value: '75',
    measure: '%',
    hasProgress: true,
  },
  {
    title: 'Давление',
    name: 'pressure',
    value: '761',
    measure: '',
    hasProgress: true,
    addictional: 'Повышенное',
  },
  {
    title: 'Видимость',
    name: 'visibility',
    value: '28',
    measure: 'км',
    hasProgress: true,
    addictional: 'Нормальная',
  },
  {
    title: 'Рассвет',
    name: 'sunrise',
    value: '8:42',
    hasProgress: false,
    addictional: 'Прошло: 02:47',
  },
  {
    title: 'Закат',
    name: 'sunset',
    value: '16:37',
    hasProgress: false,
    addictional: 'Осталось: 05:08',
  },
  {
    title: 'Сила ветра',
    name: 'wind',
    value: '2',
    measure: 'м/с',
    hasProgress: false,
    addictional: 'Северо-западный',
    direction: '315',
  },
];

export default cardsData;
