import config from '../config';

const GlobalError = () => {
  const googleTableLink = `https://docs.google.com/spreadsheets/d/${config.api.spreadsheetId}`

  return (
    <main>
      <h1>Упс! Что-то пошло не так :(</h1>
      <div>
        Сообщите об ошибке нам по <a href="mailto:nboyarskikh@gmail.com">email</a>,
        и мы постараемся поправить как можно скорее

        А пока можете посмотреть результаты в гугл-таблице: <a href={googleTableLink}>{googleTableLink}</a>
      </div>
    </main>
  )
}

export default GlobalError