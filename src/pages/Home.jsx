import { Link } from 'react-router-dom'

function Home() {
  const projetos = [
    { id: 1, nome: 'O Grito da Mata', engine: 'Unity', ano: '2025', cor: 'from-green-600 to-emerald-600', icon: '🎮', status: 'Finalizado', destaque: 'Roguelike com mapas procedurais' },
    { id: 2, nome: 'Chess Multiplayer', engine: 'Unity', ano: '2025', cor: 'from-green-700 to-green-500', icon: '♟️', status: 'Finalizado', destaque: 'Xadrez 3D multiplayer' },
    { id: 3, nome: 'Rapadura Filmes', engine: 'Web', ano: '2026', cor: 'from-emerald-600 to-green-400', icon: '🎬', status: 'Finalizado', destaque: 'Plataforma de streaming' },
    { id: 6, nome: 'Card Game Multiplayer', engine: 'Unity', ano: '2025', cor: 'from-purple-600 to-pink-600', icon: '🃏', status: 'WIP', destaque: 'Hearthstone like' },
    { id: 7, nome: 'Balatro 2', engine: 'Unity', ano: '2026', cor: 'from-blue-600 to-cyan-600', icon: '🃟', status: 'WIP', destaque: 'Recriando sistema Balatro' },
    { id: 9, nome: 'UI Kanban', engine: 'Kotlin', ano: '2026', descricao: 'Aplicativo para TV que recria a interface do Kanban.', tipo: 'Web App', status: 'Finalizado', cor: 'from-blue-600 to-indigo-600', icon: '📋', destaque: 'Aplicativo para TV' }
 
]

  return (
    <div>
      {/* Hero Section com wave */}
      <div className='relative'>
        <img 
          src="https://capsule-render.vercel.app/api?type=waving&height=200&section=header&reversal=false&fontSize=39&fontAlign=50&fontAlignY=50&stroke=-&animation=scaleIn&descSize=20&descAlign=50&descAlignY=50&textBg=false&theme=merko" 
          className="w-full"
          alt="header"
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center px-4 mt-20'>
            <h1 className='text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent'>
              Israel Mendes
            </h1>
            <p className='text-xl md:text-2xl text-gray-400'>
              Game Developer | Técnico em Informática | Ciência da Computação
            </p>
            <div className='flex flex-wrap gap-4 justify-center mt-8'>
              <Link to='/projects' className='bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105'>
                Explorar Projetos →
              </Link>
              <Link to='/contato' className='border-2 border-green-500 text-green-400 hover:bg-green-500/10 font-bold py-3 px-8 rounded-full transition'>
                Contato 
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='bg-black/50 backdrop-blur-sm py-16 border-y border-green-900/30'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            {[
              { numero: '7+', label: 'Projetos Completos', icon: '' },
              { numero: '3', label: 'Engines Dominadas', icon: '' },
              { numero: '1 ano', label: 'Dev Rapadura Atômica', icon: '' },
              { numero: '13', label: 'Projetos no Total', icon: '' }
            ].map(stat => (
              <div key={stat.label} className='group hover:scale-105 transition'>
                <div className='text-4xl mb-2'>{stat.icon}</div>
                <div className='text-3xl font-bold text-green-400 mb-1'>{stat.numero}</div>
                <div className='text-gray-500 text-sm'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Destaques */}
      <div className='container mx-auto px-4 py-16'>
        <h2 className='text-4xl font-bold text-white text-center mb-4'>Projetos em Destaque</h2>
        <p className='text-gray-500 text-center mb-12 max-w-2xl mx-auto'>
          Conheça alguns dos meus melhores trabalhos
        </p>
        
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projetos.map((proj, index) => (
            <Link key={proj.id} to={`/projeto/${proj.id}`}>
              <div 
                className='group bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden hover-glow-green transition-all duration-500 hover:-translate-y-2 border border-green-900/30 h-full'
              >
                <div className={`h-56 bg-gradient-to-br ${proj.cor} flex items-center justify-center relative overflow-hidden`}>
                  <div className='absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500'></div>
                  <span className='text-8xl group-hover:scale-110 transition duration-500'>{proj.icon}</span>
                  <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-bold ${
                    proj.status === 'Finalizado' ? 'bg-green-600 text-white' : 'bg-yellow-600 text-white'
                  }`}>
                    {proj.status === 'Finalizado' ? ' Finalizado' : ' WIP'}
                  </div>
                </div>
                <div className='p-6'>
                  <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition'>
                    {proj.nome}
                  </h3>
                  <p className='text-gray-400 text-sm mb-3'>{proj.destaque}</p>
                  <div className='flex justify-between items-center'>
                    <span className='text-green-400 font-semibold text-sm'>{proj.engine}</span>
                    <span className='text-gray-600 text-sm'>{proj.ano}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className='text-center mt-12'>
          <Link 
            to='/projects' 
            className='inline-flex items-center gap-2 bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500/10 font-bold py-3 px-8 rounded-full transition'
          >
            Ver todos os projetos
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Call to Action */}
      <div className='container mx-auto px-4 py-16 mb-16'>
        <div className='bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-12 text-center border border-green-800/50'>
          <h2 className='text-3xl font-bold text-white mb-4'>Vamos criar alguma coisa?</h2>
          <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>
            Estou sempre aberto a novos projetos e colaborações.  <br />
            Se você tem uma ideia, me chame!
          </p>
          <Link 
            to='/contato' 
            className='inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105'
          >
            Entrar em contato →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home