import Header from './header/Header'
import styles from '../styles/Layout.module.scss'

const Layout = ({children}) => {
  return (
    <>

      <Header />
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}

export default Layout
