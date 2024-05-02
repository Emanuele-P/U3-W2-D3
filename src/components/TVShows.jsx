import ContentList from './ContentList'

const TVShows = () => {
  return (
    <>
      <ContentList
        headerText={'Trending Now'}
        searchQuery={'Stranger Things'}
      />
      <ContentList headerText={'Watch It Again'} searchQuery={'sherlock'} />
      <ContentList headerText={'New Releases'} searchQuery={'avatar'} />
    </>
  )
}
export default TVShows
