import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Footer from './pages/Footer'
import Contato from './pages/Contato'
import { useState, useEffect } from 'react'

function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', name: 'Home', icon: '' },
    { path: '/sobre', name: 'Sobre', icon: '' },
    { path: '/projects', name: 'Projetos', icon: '' },
    { path: '/contato', name: 'Contato', icon: '' }
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-green-900/20' : 'bg-transparent'}`}>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex justify-between items-center'>
          <Link to='/' className='text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent hover:scale-105 transition'>
            🎮 
          </Link>
          <div className='hidden md:flex gap-8'>
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-green-400 border-b-2 border-green-400 pb-1'
                    : 'text-gray-400 hover:text-green-400 hover:scale-105'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-black'>
        <Navbar />
        <div className='pt-16'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projeto/:id' element={<ProjectDetail />} />
            <Route path='/contato' element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App