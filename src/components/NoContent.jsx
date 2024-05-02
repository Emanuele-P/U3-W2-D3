import { Container } from 'react-bootstrap'

const NoContent = () => {
  return (
    <Container fluid className="px-4 mb-4">
      <section
        className="carousel d-flex justify-content-center align-items-center"
        style={{ height: '160px' }}
      >
        <p className="my-5">No content available (╯°□°）╯︵ ┻━┻</p>
      </section>
    </Container>
  )
}

export default NoContent
