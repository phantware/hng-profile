import './home.css'
import Profile from '../components/profile/Profile'
import SocialCard from '../components/socialCard/SocialCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import slackImg from '../assets/slack.png'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div className='homeContainer'>
      <Profile />
      <SocialCard title='Twitter Link' />
      <a
        href='https://training.zuri.team/'
        target='_blank'
        rel='noreferrer'
        id='btn__zuri'
      >
        <SocialCard title='Zuri Team' />
      </a>
      <a
        href='https://books.zuri.team/'
        target='_blank'
        rel='noreferrer'
        id='books'
      >
        <SocialCard title='Zuri Book' />
      </a>
      <a
        href='https://books.zuri.team/'
        target='_blank'
        rel='noreferrer'
        id='book__python'
      >
        <SocialCard title='Python Book' />
      </a>
      <a
        href='https://background.zuri.team/'
        target='_blank'
        rel='noreferrer'
        id='pitch'
      >
        <SocialCard title='Background Check for Coders' />
      </a>
      <a
        href='https://books.zuri.team/design-rules'
        target='_blank'
        rel='noreferrer'
        id='book__design'
      >
        <SocialCard title='Design Books' />
      </a>
      <div className='socialLinks'>
        <div className='slackImg'>
          <img src={slackImg} alt='slack' className='slack' />
        </div>
        <FontAwesomeIcon icon={faGithub} className='socialLinksIcon' />
      </div>
      <Footer />
    </div>
  )
}

export default Home
