import styles from './Index.module.css'

import Head from 'next/head'

import Seo from 'components/seo'
import config from '../config'
import { useInfo } from '../hooks/api'

const Index = () => {
  const info = useInfo()

  let currentUrl = `https://${config.baseUrl}`
  try {
    currentUrl = window.location.href
  } catch {
    // ignore window is undefined during SSR
  }

  return (
    <>
      <Head>
        <Seo
          currentURL={currentUrl}
          pageTitle={config.seo.title}
          siteName={config.seo.title}
          description={config.seo.description}
          keywords={config.seo.keywords}
        />
      </Head>
      <pre>
        {JSON.stringify(info, null, 2)}
      </pre>
    </>
  )
}

export default Index