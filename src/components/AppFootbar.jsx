import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={6}>
            <Row>
              <Col className="mb-2">
                <a
                  href="https://www.facebook.com/netflix/"
                  className="icon-link me-2"
                >
                  <i className="bi bi-facebook footer-icon"></i>
                </a>
                <a
                  href="https://www.instagram.com/netflix/"
                  className="icon-link me-2"
                >
                  <i className="bi bi-instagram footer-icon"></i>
                </a>
                <a
                  href="https://www.twitter.com/netflix/"
                  className="icon-link me-2"
                >
                  <i className="bi bi-twitter-x footer-icon"></i>
                </a>
                <a
                  href="https://www.youtube.com/netflix/"
                  className="icon-link me-2"
                >
                  <i className="bi bi-youtube footer-icon"></i>
                </a>
                <a href="https://www.tiktok.com/@netflix" className="icon-link">
                  <i className="bi bi-tiktok footer-icon"></i>
                </a>
              </Col>
            </Row>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
              <Col>
                <div className="footer-links">
                  <p>
                    <a href="link" alt="footer link">
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a href="link" alt="footer link">
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a href="link" alt="footer link">
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a href="link" alt="footer link">
                      Contact us
                    </a>
                  </p>
                </div>
              </Col>
              <Col>
                <div className="footer-links">
                  <p>
                    <a href="link" alt="footer link">
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a href="link" alt="footer link">
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a href="link" alt="footer link">
                      Legal Notices
                    </a>
                  </p>
                </div>
              </Col>
              <Col>
                <div className="footer-links">
                  <p>
                    <a href="link" alt="footer link">
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a href="link" alt="footer link">
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a href="link" alt="footer link">
                      Cookie Preferences
                    </a>
                  </p>
                </div>
              </Col>
              <Col>
                <div className="footer-links">
                  <p>
                    <a href="link" alt="footer link">
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a href="link" alt="footer link">
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a href="link" alt="footer link">
                      Corporate Information
                    </a>
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="footer-button mt-3"
                >
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2 mt-2 copyright">
                © 1997-2024 Netflix, Inc.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
