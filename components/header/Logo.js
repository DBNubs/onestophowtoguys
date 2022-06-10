import Image from 'next/image'
import Link from 'next/link'
import logoStyles from '../../styles/header/Logo.module.scss'

const Logo = () => {
  return (
    <div className={logoStyles.logo}>
      <Link href='/'>
        <Image
          src="/onestop-logo.png"
          alt='OneStop How to Guys logo'
          width= {151}
          height= {63}
        />
      </Link>
    </div>
  )
}

export default Logo
