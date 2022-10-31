import './footer.css'
import zuri2 from '../../assets/zuri2.jpg'
import I4G from '../../assets/I4G.svg'

const Footer = () => {
  return (
    <div className='footerContainer'>
      <img src={zuri2} alt='zuri' className='zuri' />
      <h1 className='footerTitle'>HNG Internship 9 Frontend Task</h1>
      <img src={I4G} alt='Ingressive food' className='ingressive' />
    </div>
  )
}

export default Footer
