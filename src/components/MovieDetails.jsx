import { useEffect, useState } from 'react'
import { Card, Col, Container, Image, Row, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import NoContent from './NoContent'

const MovieDetails = () => {
  const [details, setDetails] = useState(null)
  const [error, setError] = useState(null)
  const { imdbID } = useParams() // Destructure for direct access

  const API_KEY = '5a1fdfe'
  const fetchDetails = () => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === 'False') {
          throw new Error(data.Error)
        }
        setDetails(data)
      })
      .catch((error) => {
        console.error('Fetch Error:', error)
        setError(error.message)
      })
  }

  useEffect(() => {
    fetchDetails()
  }, [imdbID])

  if (error) return <NoContent message={error} />
  if (!details) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '58vh', width: '100%' }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }

  return (
    <Container
      style={{ minHeight: '58vh' }}
      className="d-flex align-items-center justify-content-center"
    >
      <Card className="details mt-5 mb-5 justify-content-center align-items-center py-0 py-lg-5">
        <Row className="g-0">
          <Col xs={12} md={5} className="d-flex justify-content-center">
            <Image
              src={details.Poster}
              alt={details.Title}
              fluid
              className="mt-4 mt-md-0 p-4 p-lg-0"
            />
          </Col>
          <Col xs={12} md={7}>
            <Card.Body className="d-flex flex-column justify-content-center align-items-top p-5 p-lg-0 pe-lg-5 mt-lg-0">
              <Card.Title>{details.Title}</Card.Title>
              <Card.Text>
                <strong>Year:</strong> {details.Year}
              </Card.Text>
              <Card.Text>
                <strong>Type:</strong> {details.Type}
              </Card.Text>
              <Card.Text>
                <strong>Plot:</strong> {details.Plot}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default MovieDetails
