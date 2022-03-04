import classNames from 'classnames'

import QrLinkImage from 'public/images/qr-link.svg'
import styles from './header.module.css'
import config from '../../config'

const Header = ({ withLink = false }) => {
  const minifiedHref = `https://${config.minifiedUrl}`

  return (
    <header className={classNames(styles.header, {[styles.withLink]: withLink})}>
      <div role="group" className={styles.titles}>
        <h1 className={classNames(styles.titleText, styles.title)}>КУБОК РЕКТОРА</h1>
        <h2 className={classNames(styles.titleText, styles.subtitle)}>БУДЬ ГОТОВ!</h2>
      </div>

      <div className={styles.link}>
        <span className={styles.linkLabel}>
          Подробные результаты <br/> по ссылке &nbsp;
          <a href={minifiedHref} target="_blank" rel="noreferrer">
            {config.minifiedUrl}
          </a>
        </span>

        <span className={styles.linkQr}>
          <a href={minifiedHref} target="_blank" rel="noreferrer">
            <QrLinkImage />
          </a>
        </span>
      </div>
    </header>
  )
}

export default Header
