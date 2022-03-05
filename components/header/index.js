import classNames from 'classnames'

import QrLinkImage from 'public/images/qr-link.svg'
import styles from './header.module.css'
import config from '../../config'
import { useUUID } from 'hooks/utils'

const Header = ({ withLink = false }) => {
  const linkId = useUUID()

  return (
    <header className={classNames(styles.header, {[styles.withLink]: withLink})}>
      <div role="group" className={styles.titles}>
        <h1 className={classNames(styles.titleText, styles.title)}>КУБОК РЕКТОРА</h1>
        <h2 className={classNames(styles.titleText, styles.subtitle)}>БУДЬ ГОТОВ!</h2>
      </div>

      <div className={styles.link}>
        <span aria-labelledby={linkId} className={styles.linkQr}>
          <a href={`https://${config.minifiedUrl}`} target="_blank" rel="noreferrer">
            <QrLinkImage />
          </a>
        </span>

        <span id={linkId} className={styles.linkLabel}>
          Подробные результаты
        </span>
      </div>
    </header>
  )
}

export default Header
