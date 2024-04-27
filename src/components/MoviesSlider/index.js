// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
}

const MovieSlider = props => {
  const {moviesList} = props
  return (
    <Slider {...settings}>
      {moviesList.map(eachItem => (
        <MovieItem movieDetails={eachItem} key={eachItem.id} />
      ))}
    </Slider>
  )
}

export default MovieSlider
