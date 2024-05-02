import ContentList from './ContentList'

const TVShows = () => {
  return (
    <>
      <ContentList headerText={'Trending Now'} searchQuery={'pokemon'} />
      <ContentList headerText={'Watch It Again'} searchQuery={'digimon'} />
      <ContentList headerText={'New Releases'} searchQuery={'avatar'} />
    </>
  )
}
export default TVShows
