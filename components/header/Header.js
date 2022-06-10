import Nav from './Nav'
import Logo from './Logo'
import Search from './Search'
import headerStyles from '../../styles/header/Header.module.scss'

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <Logo />
      <Nav />
      <Search />
    </div>
  )
}

export default Header
