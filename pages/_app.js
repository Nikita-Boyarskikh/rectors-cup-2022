import 'styles/globals.css'

import ApiConfig from 'hooks/api';
import GlobalErrorBoundary from 'components/global-error-boundary'

export default function Layout({ Component, pageProps }) {
  return (
    <GlobalErrorBoundary>
      <ApiConfig>
        <Component {...pageProps} />
      </ApiConfig>
    </GlobalErrorBoundary>
  )
}