import ContentList from './ContentList'

const TVShows = () => {
  return (
    <>
      <ContentList headerText={'Trending Now'} searchQuery={'mandalorian'} />
      <ContentList headerText={'Watch It Again'} searchQuery={'naruto'} />
      <ContentList headerText={'New Releases'} searchQuery={'one piece'} />
    </>
  )
}
export default TVShows
