import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Shop from './pages/shop/Shop'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/about' element={<Contact />} />
          <Route path='/about' element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
