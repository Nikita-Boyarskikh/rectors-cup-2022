const config = {
  baseUrl: 'bg.netlify.com',

  seo: {
    title: 'Кубок ректора 2022 — таблица результатов',
    description: 'Официальные результаты Кубка ректора ',
    keywords: 'кубок ректора 2022, таблица результатов, смотреть результаты кубка ректора онлайн, будь готов соревнования мгту имени баумана, скалодром, бассейн, бег, стрельба, спорт'
  },

  api: {
    spreadsheetId: '1J4zdyvbm3qD3O5ZOOzfjIyh1JH24sjrETPOF5qgEwuo',
    apiKey: 'AIzaSyDkSzvnIny9wTOdEf6V_gPABamvHtYxrI4',
    infoGridId: 'info',
    studentsGridId: 'students',
    teamsGridId: 'teams',
    updateInterval: 1000,
    focusThrottleInterval: 5000,
    dedupingInterval: 5000,
    errorRetryInterval: 1000,
    errorRetryCount: 5,
  }
}

export default config
