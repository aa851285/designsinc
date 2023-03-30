import {BrowserRouter, Route, Routes} from 'react-router-dom'


import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Home from './pages/Home'







function App() {
  

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} exact/>
      <Route path="/contact" element={<Contact />} exact/>
      
    </Routes>

    
    </BrowserRouter>
  )
}

export default App
