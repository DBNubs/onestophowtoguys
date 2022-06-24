import Image from 'next/image'
import Link from 'next/link'
import playlistItemStyles from '../../styles/playlists/Playlist.module.scss'

const myLoader = ({ src, width, quality }) => {
  return `${src}`
}

const VideoLinkItem = ({playListSnippet, playlistTitle, id}) => {
  let parsedTitleForLink = playListSnippet.title.replace(/ /g, '-').toLowerCase();
  let parsedPlaylistTitleForLink = playlistTitle.replace(/ /g, '-').toLowerCase();
  let link = `/tutorials/${parsedPlaylistTitleForLink}/${parsedTitleForLink}`

  return (
    <div>
      <a href={link} className={playlistItemStyles.playlist}>
        <div>
          <Image
            loader={myLoader}
            src={playListSnippet.thumbnails.medium.url}
            alt="Jason Blanda"
            width={playListSnippet.thumbnails.medium.width}
            height={playListSnippet.thumbnails.medium.height}
          />
        </div>
        <div className={playlistItemStyles.details}>
          <h2>{playListSnippet.title}</h2>
          <p>{playListSnippet.description}</p>

          <Link href={link}>View Video</Link>
        </div>
      </a>
    </div>
  )
}

export default VideoLinkItem
