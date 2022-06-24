import Head from "next/head"
import dynamic from 'next/dynamic'
import tutorialsStyles from '../styles/pages/Tutorials.module.scss'

const PlayListItem = dynamic(() => import("../components/page-components/PlaylistItem"), {
  ssr: false,
});

const YOUTUBE_PLAYlIST_ITEMS_API = 'https://youtube.googleapis.com/youtube/v3/playlists';

export async function getServerSideProps() {
  const res = await fetch(`${YOUTUBE_PLAYlIST_ITEMS_API}?part=snippet&channelId=UCLFvOWP1ScCWuL4oayUyCXA&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`);
  const playLists = await res.json();

  return {
    props: {
      playLists
    }
  }
}

const Tutorials = ({ playLists }) => {
  console.log(playLists);
  return (
    <div>
      <Head>
        <title>Tutorials | OneStop How to Guys</title>
      </Head>
      <div className="container">
        <h1 className='title'>Tutorials</h1>
        <div className={tutorialsStyles.playLists}>
          {playLists.items.map((item) => {
            const { id } = item;
            return (
              <PlayListItem key={id} playListSnippet={item.snippet} id={id} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Tutorials
