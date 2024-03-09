import './App.css'
import Banner from './components/Banner/Banner'
import DiscussSection from './components/DiscussSection/DiscussSection'
import Posts from './components/Posts/Posts'

function App() {
  

  return (
    <div className='w-4/5 mx-auto'>
      <Banner></Banner>
      <DiscussSection></DiscussSection>
      <Posts></Posts>
    </div>
  )
}

export default App
