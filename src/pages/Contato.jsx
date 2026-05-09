import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faMapMarkerAlt, faBuilding, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simula envio
    setEnviado(true)
    setTimeout(() => setEnviado(false), 3000)
    setForm({ nome: '', email: '', mensagem: '' })
  }

  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-4xl font-bold text-white text-center mb-4'>Contato</h1>
        <p className='text-gray-500 text-center mb-12'>Bora fazer alguma coisa</p>
        
        <div className='bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-green-900/30'>
          <div className='space-y-4 mb-8'>
            <div className='flex items-center gap-4 text-gray-400 p-3 bg-green-900/10 rounded-lg border border-green-900/30 transition hover:bg-green-900/20'>
              <FontAwesomeIcon icon={faEnvelope} className='text-2xl text-green-400 w-6' />
              <a href='mailto:israelmendesmzs@gmail.com' className='hover:text-green-400 transition'>
                israelmendesmzs@gmail.com
              </a>
            </div>
            
            <div className='flex items-center gap-4 text-gray-400 p-3 bg-green-900/10 rounded-lg border border-green-900/30 transition hover:bg-green-900/20'>
              <FontAwesomeIcon icon={faPhone} className='text-2xl text-green-400 w-6' />
              <span>(85) 9 97401-6045</span>
            </div>
            
            <div className='flex items-center gap-4 text-gray-400 p-3 bg-green-900/10 rounded-lg border border-green-900/30 transition hover:bg-green-900/20'>
              <FontAwesomeIcon icon={faMapMarkerAlt} className='text-2xl text-green-400 w-6' />
              <span>Rua Coronel Bia 2008 - Cascavel/CE</span>
            </div>
            
            <a href='https://github.com/Israel-Mendes-git' target='_blank' rel='noopener noreferrer' 
               className='flex items-center gap-4 text-gray-400 p-3 bg-green-900/10 rounded-lg border border-green-900/30 hover:bg-green-900/20 transition'>
              <FontAwesomeIcon icon={faGithub} className='text-2xl text-green-400 w-6' />
              <span>github.com/Israel-Mendes-git</span>
            </a>
            
             <a href='https://rapaduraatomica.com.br' target='_blank' rel='noopener noreferrer' 
               className='flex items-center gap-4 text-gray-400 p-3 bg-green-900/10 rounded-lg border border-green-900/30 hover:bg-green-900/20 transition'>            
                <FontAwesomeIcon icon={faBuilding} className='text-2xl text-green-400 w-6' />
                <span>  Rapadura Atômica - Membro</span>
              </a>
          </div>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <input 
              type='text' 
              placeholder='Seu nome' 
              value={form.nome}
              onChange={(e) => setForm({...form, nome: e.target.value})}
              className='w-full bg-black/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-green-900/30 placeholder:text-gray-600'
              required
            />
            <input 
              type='email' 
              placeholder='Seu email' 
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
              className='w-full bg-black/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-green-900/30 placeholder:text-gray-600'
              required
            />
            <textarea 
              placeholder='Sua mensagem' 
              rows='5'
              value={form.mensagem}
              onChange={(e) => setForm({...form, mensagem: e.target.value})}
              className='w-full bg-black/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-green-900/30 placeholder:text-gray-600'
              required
            ></textarea>
            
            <button 
              type='submit'
              className='w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 py-3 rounded-lg transition font-bold text-white flex items-center justify-center gap-2'
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              {enviado ? 'Mensagem enviada! ' : 'Enviar Mensagem'}
            </button>
          </form>
          
          {enviado && (
            <div className='mt-4 p-3 bg-green-900/30 border border-green-500 rounded-lg text-center text-green-400 text-sm'>
               Mensagem enviada com sucesso! Em breve entrarei em contato.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contato