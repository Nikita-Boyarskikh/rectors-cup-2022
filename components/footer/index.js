import Image from 'next/image'
import { memo } from 'react'

import styles from './footer.module.css'
import FvLogo from 'public/images/fv.jpg'
import PandasLogo from 'public/images/pandas.png'
import GoClimbLogo from 'public/images/goclimb.png'
import ProfcomLogo from 'public/images/profcom.png'
import BmstuLogo from 'public/images/bmstu.png'

import config from '../../config'
import { useUUID } from 'hooks/utils'

const Footer = () => {
  const startsAtStr = config.cupStartsAt.toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  const organizersId = useUUID()

  const icons = [
    {
      src: BmstuLogo,
      alt: 'Логотип МГТУ им. Баумана',
      href: 'https://vk.com/bmstu1830',
    },
    {
      src: ProfcomLogo,
      alt: 'Логотип профсоюза студентов МГТУ им. Баумана',
      href: 'https://vk.com/profkom_bmstu',
    },
    {
      src: FvLogo,
      alt: 'Логотип кафедры физического воспитания МГТУ им. Баумана',
      href: 'https://vk.com/fv.bmstu',
    },
    {
      src: PandasLogo,
      alt: 'Логотип ФОК "Бауманские панды"',
      href: 'https://vk.com/bauman_pandas',
    },
    {
      src: GoClimbLogo,
      alt: 'Логотип секции скалолазания и альпинизма МГТУ им. Баумана',
      href: 'https://vk.com/goclimb.bmstu',
    },
  ]

  return (
    <footer className={styles.footer}>
      <label htmlFor={organizersId} className={styles.footerLabel}>ОРГАНИЗАТОРЫ СОРЕВНОВАНИЙ</label>
      <span id={organizersId} role="group" className={styles.footerIcons}>
        {icons.map(({ src, alt, href }) => {
          return (
            <a
              key={href}
              className={styles.footerIcon}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <Image src={src} alt={alt} placeholder="blur" />
            </a>
          )
        })}
      </span>
      <span className={styles.startsAt}>{startsAtStr}</span>
    </footer>
  )
}

export default memo(Footer)
