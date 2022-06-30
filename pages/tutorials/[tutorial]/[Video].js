import dynamic from 'next/dynamic'
import videoStyles from '../../../styles/pages/Video.module.scss'

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});
const YOUTUBE_VIDEO_API = 'https://youtube.googleapis.com/youtube/v3/videos';

export async function getServerSideProps(context) {
    const videoID = context.query.videoId;

    const res = await fetch(`${YOUTUBE_VIDEO_API}?part=snippet,player&id=${videoID}&maxResults=1&key=${process.env.YOUTUBE_API_KEY}`);
    const video = await res.json();

    return {
      props: {
        video
      }
    }
}

const Video = ({ video }) => {
  const URL = `https://www.youtube.com/watch?v=${video.items[0].id}`
  return (
    <div className="container">
      <ReactPlayer className={videoStyles.reactPlayer} url={URL} controls='true'></ReactPlayer>
      <h1 className='title'>{video.items[0].snippet.localized.title}</h1>
      <p>{video.items[0].snippet.localized.description}</p>
    </div>
  )
}

export default Video
