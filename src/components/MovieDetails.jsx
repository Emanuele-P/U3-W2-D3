import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const MovieDetails = () => {
  const [details, setDetails] = useState(null)
  const [error, setError] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  console.log(params.imdbID)

  useEffect(() => {
    const API_KEY = '5a1fdfe'
    fetch(`http://www.omdbapi.com/?i=${params.imdbID}&apikey=${API_KEY}&`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Fetching error')
        }
      })
      .then((data) => {
        if (data) {
          setDetails(data)
        } else {
          throw new Error()
        }
      })
      .catch((error) => {
        console.error('Fetch Error', error)
        setError('Failed to load movie details')
      })
  }, [params.imdbID])

  return <></>
}
export default MovieDetails
