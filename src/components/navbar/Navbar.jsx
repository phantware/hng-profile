import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>Logo</Link>

      <ul className='nav-links'>
        <li className='nav-items'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-items'>
          <Link to='/about'>About</Link>
        </li>
        <li className='nav-items'>
          <Link to='/shop'>Shop</Link>
        </li>
        <li className='nav-items'>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
