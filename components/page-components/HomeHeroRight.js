import Link from 'next/link'
import homeHeroStyles from '../../styles/pages/Home.module.scss'

const HomeHeroRight = () => {
  return (
    <div className={homeHeroStyles.right}>
      <iframe
        width="848"
        height="484"
        src="https://www.youtube.com/embed/ocBA9YAUZcw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
  )
}

export default HomeHeroRight
