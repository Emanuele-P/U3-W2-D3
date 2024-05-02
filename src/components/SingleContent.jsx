import React from 'react'
import { Link } from 'react-router-dom'

const SingleContent = ({ src, imdbID }) => {
  return (
    <div className={`col-6 col-sm-4 col-md-3 col-lg-2 carousel-img`}>
      <div className="img-wrapper">
        <Link to={`/details/${imdbID}`}>
          <img src={src} alt="Content card" className="img-fluid" />
        </Link>
      </div>
    </div>
  )
}

export default SingleContent
