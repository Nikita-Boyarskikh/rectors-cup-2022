import { Html, Head, Main, NextScript } from 'next/document'

import Favicons from 'components/favicons'

export default function Document() {
  return (
    <Html lang="ru" dir="ltr">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=optional" key="font" />
        <Favicons />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
