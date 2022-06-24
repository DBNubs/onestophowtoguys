import Head from "next/head"
import dynamic from 'next/dynamic'
import tutorialsStyles from '../../styles/pages/Tutorials.module.scss'

const VideoLinkItem = dynamic(() => import("../../components/page-components/VideoLinkItem"), {
  ssr: false,
});

const YOUTUBE_PLAYLIST_VIDEOS_API = 'https://youtube.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps(context) {
  const playlist = context.query.playlist;
  const title = context.query.tutorial.toString().replace(/-/g, " ");

  const res = await fetch(`${YOUTUBE_PLAYLIST_VIDEOS_API}?part=snippet&playlistId=${playlist}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`);
  const videos = await res.json();

  return {
    props: {
      videos,
      title
    }
  }
}

const Tutorial = ({videos, title}) => {
  console.log(videos)
  return (
    <>
      <Head>
        <title>Tutorials | OneStop How to Guys</title>
      </Head>
      <div className="container">
        <h1 className='title'>Tutorials {title}</h1>
         <div className={tutorialsStyles.playLists}>
          {videos.items.map((item) => {
            const { id } = item;
            return (
              <VideoLinkItem key={id} playListSnippet={item.snippet} id={id} playlistTitle={title}></VideoLinkItem>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Tutorial
