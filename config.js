const config = {
  baseUrl: 'bg-2023.vercel.app',

  seo: {
    title: 'Кубок ректора 2023 — таблица результатов',
    description: 'Официальный сайт с результатами "Кубка ректора 2023". Здесь вы можете смотреть результаты "Кубка ректора" в реальном времени, следить за результатами команды любомого факультета или конкретного участника.',
    keywords: 'кубок ректора 2023, таблица результатов, смотреть результаты кубка ректора онлайн, будь готов соревнования мгту имени баумана, скалодром, бассейн, бег, стрельба, спорт'
  },

  api: {
    spreadsheetId: '1R3T3QSOs9FiSRaKx6sGuUUC4zMqfKit6Z99KrzCyQEY',
    apiKey: 'AIzaSyDkSzvnIny9wTOdEf6V_gPABamvHtYxrI4',
    commonGridId: 'common',
    teamsGridId: 'teams',
    updateInterval: 1000,
    focusThrottleInterval: 5000,
    dedupingInterval: 5000,
    errorRetryInterval: 1000,
    errorRetryCount: 5,
  },

  countdownUpdatePerSecond: 10,
  cupStartsAt: new Date('2023-03-25T11:00:00+03:00'),
  registrationEndsAt: new Date('2023-03-25T10:40:00+03:00'),

  tvTableUpdateIntervalSeconds: 5,
  tvTableLinesPerPage: 7,

  teamsNumber: 18,
  participantsNumber: 5,
}

export default config
