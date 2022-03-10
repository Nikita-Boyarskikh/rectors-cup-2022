import classNames from 'classnames'
import { memo, useMemo } from 'react'

import QrLinkImage from 'public/images/qr-link.svg'
import styles from './header.module.css'
import config from '../../config'
import { useUUID } from 'hooks/utils'

const Header = ({ withLink = false }) => {
  const linkId = useUUID()

  const headerContent = useMemo(() => {
    return (
      <>
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
      </>
    )
  }, [linkId])

  return (
    <header className={classNames(styles.header, {[styles.withLink]: withLink})}>
      {headerContent}
    </header>
  )
}

export default memo(Header)
