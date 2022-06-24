import Image from 'next/image'
import Link from 'next/link'
import playlistItemStyles from '../../styles/playlists/Playlist.module.scss'

const myLoader = ({ src, width, quality }) => {
  return `${src}`
}

const PlaylistItem = ({playListSnippet, id}) => {
  let parsedTitleForLink = playListSnippet.title.replace(/ /g, '-').toLowerCase();
  let link = `/tutorials/${parsedTitleForLink}?playlist=${id}`
  return (
    <div>
      <a href={link} className={playlistItemStyles.playlist}>
        <Image
          loader={myLoader}
          src={playListSnippet.thumbnails.medium.url}
          alt="Jason Blanda"
          width={playListSnippet.thumbnails.medium.width}
          height={playListSnippet.thumbnails.medium.height}
        />
        <div className={playlistItemStyles.details}>
          <h2>{playListSnippet.title}</h2>
          <p>{playListSnippet.description}</p>

          <Link href={link}>View Playlist</Link>
        </div>
      </a>
    </div>
  )
}

export default PlaylistItem
