import Head from 'next/head'
import { memo } from 'react'

import config from '../config'

const Seo = ({
  pageTitle = config.seo.title,
  siteName = config.seo.title,
  description = config.seo.description,
  keywords = config.seo.keywords,
} = {}) => {
  const previewImage = ''
  const previewImageAlt = ''

  let currentUrl = `https://${config.baseUrl}`
  try {
    currentUrl = window.location.href
  } catch {
    // ignore window is undefined during SSR
  }

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta charSet="utf-8" key="charset" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="xuicompatible" />
      <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
      <meta name="mobile-web-app-capable" content="yes" key="mobilewebcap" />
      <meta name="description" content={description} key="description" />
      <link rel="canonical" href="https://bg-2020.vercel.app" />

      <meta name="application-name" content={siteName} key="appmobilename" />
      <meta name="apple-mobile-web-app-capable" content="yes" key="appmobilecap" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" key="appmobilestatbarstyle" />
      <meta name="apple-mobile-web-app-title" content={siteName} key="appmobiletitle" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:url" content={currentUrl} key="twurl" />
      <meta property="twitter:image" content={previewImage} key="twimage" />
      <meta property="twitter:image:alt" content={previewImageAlt} key="twimagealt" />
      <meta property="twitter:title" content={pageTitle} key="twtitle" />
      <meta property="twitter:description" content={description} key="twdesc" />

      {/* Open Graph */}
      <meta property="og:url" content={currentUrl} key="ogurl" />
      <meta property="og:type" content={currentUrl} key="ogtype" />
      <meta property="og:image" content={previewImage} key="ogimage" />
      <meta property="og:image:alt" content={previewImageAlt} key="ogimagealt" />
      <meta property="og:site_name" content={siteName} key="ogsitename" />
      <meta property="og:title" content={pageTitle} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />

      <meta name="keywords" content={keywords} key="keywords" />
      <meta name="robots" content="all" key="robots" />
    </Head>
  )
}

export default memo(Seo)
