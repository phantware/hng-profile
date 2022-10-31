import './footer.css'
import zuri from '../../assets/zuri.svg'
import I4G from '../../assets/I4G.svg'

const Footer = () => {
  return (
    <div className='footerContainer'>
      <img src={zuri} alt='zuri' />
      <h1 className='footerTitle'>HNG Internship 9 Frontend Task</h1>
      <img src={I4G} alt='Ingressive food' />
    </div>
  )
}

export default Footer
