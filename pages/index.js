import styles from './index.module.css'

import Seo from 'components/seo'
import Header from 'components/header'
import Footer from 'components/footer'
import MainContent from 'components/main-content'

const Index = () => {
  return (
    <div className={styles.container}>
      <Seo />
      <Header />

      <main className={styles.main}>
        <MainContent />
      </main>

      <Footer />
    </div>
  )
}

export default Index