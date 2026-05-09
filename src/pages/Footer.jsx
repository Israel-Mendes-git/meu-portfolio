import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt, faPhone, faCode, faGamepad } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className='bg-black/80 backdrop-blur-sm border-t border-green-900/30 mt-20'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
          {/* Logo */}
          <div>
            <h3 className='text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-4'>
              🎮 Israel Mendes
            </h3>
            <p className='text-gray-500 text-sm'>
              Fazer jogo é massa demais
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className='text-white font-bold mb-4 text-sm'>Links Rápidos</h4>
            <ul className='space-y-2'>
              <li>
                <Link to='/' className='text-gray-400 hover:text-green-400 transition text-sm'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/sobre' className='text-gray-400 hover:text-green-400 transition text-sm'>
                  Sobre
                </Link>
              </li>
              <li>
                <Link to='/projects' className='text-gray-400 hover:text-green-400 transition text-sm'>
                  Projetos
                </Link>
              </li>
              <li>
                <Link to='/contato' className='text-gray-400 hover:text-green-400 transition text-sm'>
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Tecnologias */}
          <div>
            <h4 className='text-white font-bold mb-4 text-sm'>Tecnologias</h4>
            <ul className='space-y-2'>
              <li className='flex items-center gap-2 text-gray-400 text-sm'>
                <FontAwesomeIcon icon={faGamepad} className='text-green-400 w-3' />
                Unity & C#
              </li>
              <li className='flex items-center gap-2 text-gray-400 text-sm'>
                <FontAwesomeIcon icon={faGamepad} className='text-green-400 w-3' />
                Godot & GDScript
              </li>
              <li className='flex items-center gap-2 text-gray-400 text-sm'>
                <FontAwesomeIcon icon={faCode} className='text-green-400 w-3' />
                Python & Django
              </li>
              <li className='flex items-center gap-2 text-gray-400 text-sm'>
                <FontAwesomeIcon icon={faCode} className='text-green-400 w-3' />
                React & Tailwind
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className='text-white font-bold mb-4 text-sm'>Contato</h4>
            <ul className='space-y-3'>
              <li className='flex items-center gap-3 text-gray-400 text-sm'>
                <FontAwesomeIcon icon={faEnvelope} className='text-green-400 w-4' />
                <a href='mailto:israelmendesmzs@gmail.com' className='hover:text-green-400 transition break-all text-xs'>
                  israelmendesmzs@gmail.com
                </a>
              </li>
              <li className='flex items-center gap-3 text-gray-400 text-sm'>
                <FontAwesomeIcon icon={faPhone} className='text-green-400 w-4' />
                <span>(85) 9 97401-6045</span>
              </li>
              <li className='flex items-center gap-3 text-gray-400 text-sm'>
                <FontAwesomeIcon icon={faMapMarkerAlt} className='text-green-400 w-4' />
                <span>Cascavel/CE</span>
              </li>
              <li className='flex items-center gap-3 text-gray-400 text-sm'>
                <FontAwesomeIcon icon={faGithub} className='text-green-400 w-4' />
                <a href='https://github.com/Israel-Mendes-git' target='_blank' rel='noopener noreferrer' className='hover:text-green-400 transition'>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer