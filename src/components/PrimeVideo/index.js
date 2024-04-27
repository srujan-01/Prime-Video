// Write your code here

import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(eachItem => {
    if (eachItem.categoryId === 'ACTION') {
      return eachItem
    }
  })
  const comedyMovies = moviesList.filter(eachItem => {
    if (eachItem.categoryId === 'COMEDY') {
      return eachItem
    }
  })

  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="prime-image"
        alt="prime video"
      />
      <div className="card">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMovies} />
      </div>
      <div className="card">
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
