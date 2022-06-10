import Head from 'next/head'
import Image from 'next/image'
import aboutStyles from '../styles/pages/About.module.scss'

const about = () => {
  return (
    <div>
      <Head>
        <title>About | OneStop How to Guys</title>
      </Head>

      <div className={aboutStyles.hero}></div>
      <div className="container">
        <h1 className={aboutStyles.title}>About OneStop</h1>

        <div className={aboutStyles.info}>
          <p className={aboutStyles.quote}>"Education is far to valuable not to free!"</p>

          <p> I could be a career college student if my bank account would allow it. My wife thinks I'm crazy, but I guess it's just the way I'm wired.</p>
          <p>I also love to teach.Having a lot of information and no one to share it with always seem kind of pointless to me.</p>
          <p>So, OneStop How to Guys was born out of my passion to learn and my desire to share what I've learned with others looking to do the same.</p>
          <p>It's my hope that you find exactly what your looking for here. If not, send me an email and I'll do my best to provide you with the training and education your looking for.</p>
        </div>

        <div className={aboutStyles.instructors}>
          <h2>Our Instructors</h2>

          <div className={aboutStyles.instructor}>
            <Image
              src="/me.webp"
              alt="Jason Blanda"
              width={366}
              height={378}
            />

            <div className={aboutStyles.content}>
              <h3>Jason Blanda</h3>
              <p> I am a Drupal developer with 10+ years experience. It is my goal to develop and deploy great website solutions that provide end - users with a seamless and quality experience. I am very passionate about learning in all areas of my life and welcome the challenge of new ideas.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default about
