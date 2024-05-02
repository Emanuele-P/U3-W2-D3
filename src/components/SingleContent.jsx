import React from 'react'

function SingleContent({ src }) {
  return (
    <div className={`col-6 col-sm-4 col-md-3 col-lg-2 carousel-img`}>
      <div className="img-wrapper">
        <img src={src} alt="Content card" className="img-fluid" />
      </div>
    </div>
  )
}

export default SingleContent
