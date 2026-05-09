function Sobre() {
  const tecnologias = [
    'Unity', 'Godot', 'GameMaker', 'C#', 'GDScript',
    'Python', 'Django', 'JavaScript', 'React', 'Tailwind',
    'HTML', 'CSS', 'Kotlin', 'Git', 'GitHub'
  ]

  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold text-white mb-8 text-center'>Israel Mendes</h1>
        <p className='text-xl text-center text-green-400 mb-8'>Ciência da Computação</p>
        
        <div className='bg-black/50 backdrop-blur-sm rounded-lg p-8 mb-8 border border-green-900/30'>
          <div className='flex flex-col md:flex-row gap-8 items-center mb-8'>
            <div className='w-40 h-40 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center text-6xl shadow-lg shadow-green-900/30'>
              <img src="public/images/WhatsApp Image 2026-05-09 at 15.50.25.jpeg" alt="" />
            </div>
            <div>
              <p className='text-gray-400 mb-2'>
                Sou formado em <span className='text-green-400'>Técnico em Informática</span> pela EEEP Edson Queiroz e 
                atualmente cursando <span className='text-green-400'>Ciência da Computação</span> na Wyden - Unifanor (2026).
              </p>
            </div>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-6 mb-8'>
          <div className='bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-green-900/30'>
            <h2 className='text-xl font-bold text-white mb-4'> Formação</h2>
            <div className='space-y-3'>
              <div>
                <p className='text-green-400 font-semibold'>Ciência da Computação</p>
                <p className='text-gray-500 text-sm'>Wyden - Unifanor | 2026</p>
              </div>
              <div>
                <p className='text-green-400 font-semibold'>Técnico em Informática</p>
                <p className='text-gray-500 text-sm'>EEEP Edson Queiroz | 2025</p>
              </div>
            </div>
          </div>

          <div className='bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-green-900/30'>
            <h2 className='text-xl font-bold text-white mb-4'> Idiomas</h2>
            <div className='space-y-3'>
              <div>
                <p className='text-green-400 font-semibold'>Inglês</p>
                <p className='text-gray-500 text-sm'>Intermediário</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-black/50 backdrop-blur-sm rounded-lg p-8 mb-8 border border-green-900/30'>
          <h2 className='text-2xl font-bold text-white mb-6'> Tech Stack</h2>
          <div className='flex flex-wrap gap-3'>
            {tecnologias.map(tech => (
              <span key={tech} className='bg-green-900/30 px-4 py-2 rounded-lg text-green-400 border border-green-800 hover:bg-green-900/50 transition text-sm'>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre