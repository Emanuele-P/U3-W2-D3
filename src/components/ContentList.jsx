import React, { Component } from 'react'
import { Container, Placeholder } from 'react-bootstrap'
import SingleContent from './SingleContent'
import SingleContentPlaceholder from './SingleContentPlaceholder'
import leftArrow from '../assets/img/svg/left-arrow2.svg'
import rightArrow from '../assets/img/svg/right-arrow2.svg'
import NoContent from './NoContent'

class ContentList extends Component {
  state = {
    media: [], //initializing media
    error: null, //error state
    loading: true, // initializing loading state
  }

  scrollRef = React.createRef() //handle scroll with buttons
  scrollLeft = () => {
    this.scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
  }
  scrollRight = () => {
    this.scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
  }

  //handle placeholders with a for loop
  handlePlaceholders() {
    let placeholders = []
    for (let i = 0; i < 6; i++) {
      placeholders.push(<SingleContentPlaceholder key={i} />)
    }
    return placeholders
  }

  //important
  componentDidMount() {
    this.fetchMedia()
  }

  fetchMedia = () => {
    // fetch get
    const API_KEY = '5a1fdfe'
    const { searchQuery } = this.props
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
          this.setState({ media: data.Search, loading: false }) //if data is loaded then no loading
        } else {
          throw new Error('No results in Search') // when search is empty
        }
      })
      .catch((error) => {
        console.log('Error fetching data:', error)
        this.setState({ error, loading: false }) //no loading when there's an error
      })
  }

  render() {
    const { media, loading, error } = this.state
    const { headerText } = this.props

    if (loading) {
      //loading placeholder
      return (
        <Container fluid className="px-4 mb-4">
          <section className="carousel">
            <Placeholder as="h4">Now loading...</Placeholder>
            <div className="gallery d-flex flex-row">
              {this.handlePlaceholders()}
            </div>
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
            <button className="arrow left-arrow" onClick={this.scrollLeft}>
              <img src={leftArrow} alt="left arrow button" />
            </button>
            <div className="slider row gx-1" ref={this.scrollRef}>
              {media.map((content) => (
                <SingleContent key={content.imdbID} src={content.Poster} />
              ))}
            </div>
            <button className="arrow right-arrow" onClick={this.scrollRight}>
              <img src={rightArrow} alt="right arrow button" />
            </button>
          </div>
        </section>
      </Container>
    )
  }
}

export default ContentList
