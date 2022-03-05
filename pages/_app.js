import 'styles/globals.css'

import ApiConfig from 'hooks/api'
import GlobalErrorBoundary from 'components/global-error-boundary'

const Layout = ({ Component, pageProps }) => {
  return (
    <GlobalErrorBoundary>
      <ApiConfig>
        <Component {...pageProps} />
      </ApiConfig>
    </GlobalErrorBoundary>
  )
}

export default Layout
