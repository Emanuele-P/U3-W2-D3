import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/scss/bootstrap.scss'
import './style/App.scss'
import AppNavbar from './components/AppNavbar'
import AppFootbar from './components/AppFootbar'
import TopHeader from './components/TopHeader'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <AppNavbar />
        <TopHeader />
        <Home />
        <AppFootbar />
      </BrowserRouter>
    </>
  )
}

export default App
