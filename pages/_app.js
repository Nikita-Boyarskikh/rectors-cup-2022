import 'styles/globals.css'

import GlobalErrorBoundary from 'components/global-error-boundary'

export default function Layout({ Component, pageProps }) {
  return (
    <GlobalErrorBoundary>
      <Component {...pageProps} />
    </GlobalErrorBoundary>
  )
}