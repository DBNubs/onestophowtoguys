import Link from 'next/link'
import navStyles from '../../styles/header/Nav.module.scss'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/tutorials'>Tutorials</Link>
        </li>
        <li>
          <Link href='/'>Community</Link>
        </li>
        <li>
          <Link href='/'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
