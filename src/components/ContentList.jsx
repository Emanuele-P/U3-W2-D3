import React, { useEffect, useRef, useState } from 'react'
import { Container, Placeholder } from 'react-bootstrap'
import SingleContent from './SingleContent'
import SingleContentPlaceholder from './SingleContentPlaceholder'
import leftArrow from '../assets/img/svg/left-arrow2.svg'
import rightArrow from '../assets/img/svg/right-arrow2.svg'
import NoContent from './NoContent'
import { Link } from 'react-router-dom'

const ContentList = ({ searchQuery, headerText }) => {
  const [media, setMedia] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
  }
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
  }

  //handle placeholders with a for loop
  const handlePlaceholders = () => {
    let placeholders = []
    for (let i = 0; i < 6; i++) {
      placeholders.push(<SingleContentPlaceholder key={i} />)
    }
    return placeholders
  }

  const fetchMedia = () => {
    // fetch get
    const API_KEY = '5a1fdfe'
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${searchQuery}`
    )
      .then((response) => {
        if (response.ok) {
          console.log('Fetch completed') //fetched correctly
          return response.json()
        } else {
          throw new Error('Fetch error')
        }
      })
      .then((data) => {
        if (data.Search) {
          setMedia(data.Search)
          setLoading(false) //if data is loaded then no loading
        } else {
          throw new Error('No results in Search') // when search is empty
        }
      })
      .catch((error) => {
        console.log('Error fetching data:', error)
        setError(error) //no loading when there's an error
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchMedia()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery])

  if (loading) {
    //loading placeholder
    return (
      <Container fluid className="px-4 mb-4">
        <section className="carousel">
          <Placeholder as="h4">Now loading...</Placeholder>
          <div className="gallery d-flex flex-row">{handlePlaceholders()}</div>
        </section>
      </Container>
    )
  }

  if (error || media.length === 0) {
    //display error to user
    return <NoContent />
  }

  return (
    <Container fluid className="px-4 mb-4">
      <section className="carousel">
        <h4 className="mb-3">{headerText}</h4>
        <div className="gallery">
          <button className="arrow left-arrow" onClick={scrollLeft}>
            <img src={leftArrow} alt="left arrow button" />
          </button>
          <div className="slider row gx-1" ref={scrollRef}>
            {media.map((content) => (
              <div className={`col-6 col-sm-4 col-md-3 col-lg-2 carousel-img`}>
                <Link to={`/details/${content.imdbID}`}>
                  <SingleContent
                    key={`id:${content.imdbID}`}
                    src={content.Poster}
                  />
                </Link>
              </div>
            ))}
          </div>
          <button className="arrow right-arrow" onClick={scrollRight}>
            <img src={rightArrow} alt="right arrow button" />
          </button>
        </div>
      </section>
    </Container>
  )
}

export default ContentList
