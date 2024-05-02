import React from 'react'
import { Placeholder } from 'react-bootstrap'

const SingleContentPlaceholder = () => {
  return (
    <div
      className="col-6 col-sm-4 col-md-3 col-lg-2"
      style={{ flex: '0 0 auto', height: '160px', margin: '2px' }}
    >
      <div className="img-wrapper" style={{ width: '100%', height: '100%' }}>
        <Placeholder
          as="div"
          animation="glow"
          className="d-flex align-items-center justify-content-center w-100 h-100"
        >
          <Placeholder className="img-fluid  carousel-img-placeholder" />
        </Placeholder>
      </div>
    </div>
  )
}

export default SingleContentPlaceholder
