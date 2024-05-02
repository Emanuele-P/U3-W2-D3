import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/scss/bootstrap.scss'
import './style/App.scss'
import AppNavbar from './components/AppNavbar'
import AppFootbar from './components/AppFootbar'
import TopHeader from './components/TopHeader'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home'
import TVShows from './components/TVShows'
import MovieDetails from './components/MovieDetails'
import ProfilePage from './components/ProfilePage'
import NoContent from './components/NoContent'

function App() {
  return (
    <>
      <BrowserRouter>
        <ConditionalLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tvshows" element={<TVShows />} />
            <Route path="/details/:imdbID" element={<MovieDetails />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NoContent />} />
          </Routes>
        </ConditionalLayout>
      </BrowserRouter>
    </>
  )
}

function ConditionalLayout({ children }) {
  const location = useLocation()
  const hideElements = ['/profile']
  const showElement = !hideElements.includes(location.pathname)

  return (
    <>
      {showElement && <AppNavbar />}
      {showElement && <TopHeader />}
      {children}
      {showElement && <AppFootbar />}
    </>
  )
}

export default App
