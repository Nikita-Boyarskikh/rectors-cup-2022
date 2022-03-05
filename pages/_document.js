import { Html, Head, Main, NextScript } from 'next/document'

import Favicons from 'components/favicons'

const Document = () => {
  return (
    <Html lang="ru" dir="ltr">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />
        <Favicons />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
