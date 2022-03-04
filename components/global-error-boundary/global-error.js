import Link from 'next/link'

import config from '../../config'

const GlobalError = () => {
  const googleTableLink = `https://docs.google.com/spreadsheets/d/${config.api.spreadsheetId}`

  return (
    <main>
      <h1>Упс! Что-то пошло не так :(</h1>
      <div>
        Сообщите об ошибке <Link href="mailto:nboyarskikh@gmail.com"><a>нам по email</a></Link>,
        и мы постараемся поправить как можно скорее

        А пока можете посмотреть результаты в гугл-таблице:
        <Link href={googleTableLink}><a>{googleTableLink}</a></Link>
      </div>
    </main>
  )
}

export default GlobalError