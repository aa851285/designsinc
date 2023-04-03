import {BrowserRouter, Route, Routes} from 'react-router-dom'


import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import DigitalMarketing from './pages/DigitalMarketing'
import Ecommerce from './pages/Ecommerce'
import Home from './pages/Home'
import MobileApps from './pages/MobileApps'
import ModernLogoDesign from './pages/ModernLogoDesign'
import NavTest from './pages/NavTest'
import Portfolio from './pages/Portfolio'
import SearchEngine from './pages/SearchEngine'
import SocialMedia from './pages/SocialMedia'
import ThreeDMotion from './pages/ThreeDMotion'
import WebContentWriting from './pages/WebContentWriting'
import WebsiteDesign from './pages/WebsiteDesign'








function App() {
  

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} exact/>
      <Route path="/contact" element={<Contact />} exact/>
      <Route path="/webdesign" element={<WebsiteDesign />} exact/>
      <Route path="/digital-marketing" element={<DigitalMarketing />} exact/>
      <Route path="/3d-motion-graphic" element={<ThreeDMotion />} exact/>
      <Route path="/e-commerce-services" element={<Ecommerce />} exact/>
      <Route path="/mobile-app-services" element={<MobileApps />} exact/>
      <Route path="/modern-logo-design" element={<ModernLogoDesign />} exact/>
      <Route path="/web-content-writing" element={<WebContentWriting />} exact/>
      <Route path="/social-media-marketing" element={<SocialMedia />} exact/>
      <Route path="/search-engine-optimization" element={<SearchEngine />} exact/>
      <Route path="/portfolio" element={<Portfolio />} exact/>
   
  
      <Route path="/navtest" element={<NavTest />} exact/>
      
    </Routes>

    
    </BrowserRouter>
  )
}

export default App
