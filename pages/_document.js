import { Html, Head, Main, NextScript } from 'next/document'

import Favicons from 'components/favicons'

export default function Document() {
  return (
    <Html lang="ru" dir="ltr">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" key="googleapisPreconnect" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" key="gstaticPreconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet" key="russo" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" key="rubik" />
        <Favicons />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
