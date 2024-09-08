import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Subscribe from './components/Subscribe'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import FAQ from './pages/FAQ'
import About from './pages/About'
import AllProducts from './pages/AllProducts'
import Footer from './components/Footer'
function App() {
  return (
    <Router>
      <div className='sm:mx-8 md:mx-30 xl:mx-36 mx-4'>
        <Routes>
          <Route path='/' element={
            <>
              <Navbar />
              <Home />
              <Subscribe />
              <Footer />
            </>
          } />
          <Route path='/products' element={
            <>
              <Navbar />
              <AllProducts />
              <Footer />
            </>
          } />
          <Route path='/about-us' element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          } />
          <Route path='/faq' element={
            <>
              <Navbar />
              <FAQ />
              <Footer />
            </>
          } />
          <Route path='/blog' element={
            <>
              <Navbar />
              <Blog />
              <Footer />
            </>
          } />
          <Route path='/contact' element={
            <>
              <Navbar />
              <Contact />
              <Subscribe />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
