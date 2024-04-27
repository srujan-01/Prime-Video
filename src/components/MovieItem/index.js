// Write your code here

import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import "./index.css"

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div className="image-container">
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" className="image" />}
        className="popup-image"
      >
        {close => (
          <div className="container">
            <button
              className="close-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="close" />
            </button>
            <div className="video-container">
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
