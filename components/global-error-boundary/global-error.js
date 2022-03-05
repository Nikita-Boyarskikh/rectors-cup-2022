import styles from './global-error.module.css'
import config from '../../config'

const GlobalError = () => {
  const googleTableLink = `https://docs.google.com/spreadsheets/d/${config.api.spreadsheetId}`

  return (
    <main className={styles.container}>
      <h1>Упс! Что-то пошло не так :(</h1>
      <div className={styles.description}>
        <p>
          Сообщите об ошибке <a href="mailto:nboyarskikh@gmail.com">нам по email</a>,<br />
          и мы постараемся поправить как можно скорее
        </p>

        <p>
          А пока можете посмотреть результаты в гугл-таблице:<br />
          <a href={googleTableLink} target="_blank" rel="noreferrer">{googleTableLink}</a>
        </p>
      </div>
    </main>
  )
}

export default GlobalError