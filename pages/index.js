import Head from 'next/head'
import HomeHeroLeft from '../components/page-components/HomeHeroLeft'
import HomeHeroRight from '../components/page-components/HomeHeroRight'
import homeStyles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>OneStop How to Guys</title>
      </Head>

      <div className={homeStyles.hero}>
        <HomeHeroLeft />
        <HomeHeroRight />
      </div>
    </>
  )
}
