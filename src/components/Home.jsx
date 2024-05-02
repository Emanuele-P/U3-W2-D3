import ContentList from './ContentList'

const Home = () => {
  return (
    <>
      <ContentList headerText={'Trending Now'} searchQuery={'Harry Potter'} />
      <ContentList headerText={'Watch It Again'} searchQuery={'Star Wars'} />
      <ContentList headerText={'New Releases'} searchQuery={'Avengers'} />
    </>
  )
}

export default Home
