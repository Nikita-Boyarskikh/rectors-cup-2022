import 'styles/globals.css'
import ApiConfig from '../hooks/api';

export default function Layout({ Component, pageProps }) {
  return (
    <ApiConfig>
      <Component {...pageProps} />
    </ApiConfig>
  )
}