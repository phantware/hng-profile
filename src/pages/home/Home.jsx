import './home.css'
import Profile from '../../components/profile/Profile'
import SocialCard from '../../components/socialCard/SocialCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import slackImg from '../../assets/slack.png'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className='homeContainer'>
      <Profile />
      <SocialCard title='Twitter Link' />

      <SocialCard
        title='Zuri Team'
        href='https://training.zuri.team/'
        target='_blank'
        rel='noreferrer'
        id='btn__zuri'
      />
      <SocialCard
        title='Zuri Book'
        href='https://books.zuri.team/'
        target='_blank'
        rel='noreferrer'
        id='books'
      />

      <SocialCard
        title='Python Book'
        href='https://books.zuri.team/'
        target='_blank'
        rel='noreferrer'
        id='book__python'
      />

      <SocialCard
        title='Background Check for Coders'
        href='https://background.zuri.team/'
        target='_blank'
        rel='noreferrer'
        id='pitch'
      />

      <SocialCard
        title='Design Books'
        href='https://books.zuri.team/design-rules'
        target='_blank'
        rel='noreferrer'
        id='book__design'
      />

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
