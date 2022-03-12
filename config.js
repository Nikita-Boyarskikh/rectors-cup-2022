const config = {
  baseUrl: 'bg-2020.vercel.app',
  minifiedUrl: 'clck.ru/dVwtp',

  seo: {
    title: 'Кубок ректора 2022 — таблица результатов',
    description: 'Официальный сайт с результатами "Кубка ректора 2022". Здесь вы можете смотреть результаты "Кубка ректора" в реальном времени, следить за результатами команды любомого факультета или конкретного участника.',
    keywords: 'кубок ректора 2022, таблица результатов, смотреть результаты кубка ректора онлайн, будь готов соревнования мгту имени баумана, скалодром, бассейн, бег, стрельба, спорт'
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
  cupStartsAt: new Date('2022-03-13T11:00:00+03:00'),
  registrationEndsAt: new Date('2022-03-13T10:40:00+03:00'),

  tvTableUpdateIntervalSeconds: 5,
  tvTableLinesPerPage: 7,

  teamsNumber: 19,
}

export default config
