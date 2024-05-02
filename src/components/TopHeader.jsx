import React from 'react'
import { Button, Dropdown, ButtonGroup, Container } from 'react-bootstrap'

const TopHeader = () => {
  return (
    <Container fluid className="px-4">
      <section className="my-4 d-flex align-items-center justify-content-between">
        <div className="d-flex flex-grow-1 align-items-center justify-content-between justify-content-sm-start">
          <h1 className="me-3">TV Shows</h1>
          <Dropdown>
            <Dropdown.Toggle variant="outline-light" className="interactive">
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Adventure</Dropdown.Item>
              <Dropdown.Item href="#">Animation</Dropdown.Item>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Romantic</Dropdown.Item>
              <Dropdown.Item href="#">Science Fiction</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <ButtonGroup
          className="d-none d-sm-flex"
          role="group"
          aria-label="Basic outlined example"
        >
          <Button variant="outline-secondary" className="interactive">
            <i class="bi bi-grid icons"></i>
          </Button>
          <Button variant="outline-light" className="interactive">
            <i class="bi bi-grid-3x3 icons"></i>
          </Button>
        </ButtonGroup>
      </section>
    </Container>
  )
}

export default TopHeader
