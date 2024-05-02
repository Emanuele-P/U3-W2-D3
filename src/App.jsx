import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/scss/bootstrap.scss'
import './style/App.scss'
import AppNavbar from './components/AppNavbar'
import AppFootbar from './components/AppFootbar'
import TopHeader from './components/TopHeader'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import TVShows from './components/TVShows'
import MovieDetails from './components/MovieDetails'

function App() {
  return (
    <>
      <BrowserRouter>
        <AppNavbar />
        <TopHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tvshows" element={<TVShows />} />
          <Route path="/details/:imdbID" element={<MovieDetails />} />
        </Routes>
        <AppFootbar />
      </BrowserRouter>
    </>
  )
}

export default App
