import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/netflix_logo.png'
import avatar from '../assets/img/avatar.png'
import { Dropdown } from 'react-bootstrap'

function ProfilePage() {
  const [username, setUsername] = useState('')
  const [autoplayNext, setAutoplayNext] = useState(true)
  const [autoplayPreviews, setAutoplayPreviews] = useState(true)

  return (
    <div data-bs-theme="dark" className="style-two profile bg-body-darker">
      <nav className="navbar bg-body-darker container-fluid">
        <div className="d-flex justify-content-center justify-content-md-start">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Netflix Logo" width="100" />
          </Link>
        </div>
      </nav>

      <main className="py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-lg-6 px-0">
              <h1>Edit Profile</h1>
            </div>
            <div className="row justify-content-center">
              <div className="d-flex s-one px-0 col-12 col-sm-10 col-lg-6">
                <div className="avatar mb-3">
                  <img src={avatar} alt="Avatar" className="img-fluid" />
                </div>
                <div className="login mb-3 d-flex flex-column align-items-start justify-content-between">
                  <div>
                    <input
                      type="text"
                      className="form-control pointy"
                      placeholder="Your New Username"
                      aria-label="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div>
                    <span>Language:</span>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-light"
                        className="pointy border"
                      >
                        English
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Español</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Français
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Deutsch</Dropdown.Item>
                        <Dropdown.Item href="#/action-5">
                          Italiano
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-6">한국어</Dropdown.Item>
                        <Dropdown.Item href="#/action-7">日本語</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="maturity mb-4 d-flex flex-column s-two col-12 col-sm-10 col-lg-5 offset-lg-1 px-0">
                <span>Maturity Settings:</span>
                <div>
                  <button type="button" className="btn btn-dark pointy mb-2">
                    ALL MATURITY RATINGS
                  </button>
                </div>
                <p>Show titles of all maturity ratings for this profile.</p>
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-secondary pointy border"
                  >
                    EDIT
                  </button>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="controls d-flex flex-column s-three px-0 mb-3 col-12 col-sm-10 col-lg-5 offset-lg-1">
                <span>Autoplay controls</span>
                <div className="form-check">
                  <input
                    className="form-check-input checkbox-new"
                    type="checkbox"
                    id="autoplayNext"
                    checked={autoplayNext}
                    onChange={() => setAutoplayNext(!autoplayNext)}
                  />
                  <label
                    className="form-check-label align-middle"
                    htmlFor="autoplayNext"
                  >
                    Autoplay next episode in a series on all devices.
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input checkbox-new"
                    type="checkbox"
                    id="autoplayPreviews"
                    checked={autoplayPreviews}
                    onChange={() => setAutoplayPreviews(!autoplayPreviews)}
                  />
                  <label
                    className="form-check-label align-middle"
                    htmlFor="autoplayPreviews"
                  >
                    Autoplay previews while browsing on all devices.
                  </label>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="save d-flex justify-content-between px-0 s-four col-12 col-sm-10 col-lg-6 ">
                <button type="button" className="btn btn-light pointy">
                  SAVE
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary pointy border"
                >
                  CANCEL
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary pointy border"
                >
                  DELETE PROFILE
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProfilePage
