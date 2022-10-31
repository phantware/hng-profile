import './home.css'
import Profile from '../components/profile/Profile'
import SocialCard from '../components/socialCard/SocialCard'

const Home = () => {
  return (
    <div className='homeContainer'>
      <Profile />
      <SocialCard title='Twitter Link' />
      <SocialCard title='Zuri Team' />
      <SocialCard title='Zuri Book' />
      <SocialCard title='Python Book' />
      <SocialCard title='Background Check for Coders' />
      <SocialCard title='Design Books' />
      <SocialCard lolo='lolo' />
    </div>
  )
}

export default Home
