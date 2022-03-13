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
      <MainContent />
      <Footer />
    </div>
  )
}

export default Index