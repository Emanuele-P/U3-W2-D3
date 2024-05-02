import React from 'react'
import { Link } from 'react-router-dom'

const SingleContent = ({ src }) => {
  return (
    <div className="img-wrapper">
      <img src={src} alt="Content card" className="img-fluid" />
    </div>
  )
}

export default SingleContent
