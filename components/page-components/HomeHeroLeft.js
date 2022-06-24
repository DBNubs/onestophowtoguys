import Link from 'next/link'
import homeHeroStyles from '../../styles/pages/Home.module.scss'

const HomeHeroLeft = () => {
  return (
    <div className={homeHeroStyles.left}>
      <h1>Education is far to valuable not to free!</h1>
      <p> Our mission is to provide the best FREE online education cover a wide variety of courses from programming to drink making.We hope you find something here that enriches your life and unlocks your potential!</p>
      <Link href='/tutorials'>Start Learning</Link>
    </div>
  )
}

export default HomeHeroLeft
