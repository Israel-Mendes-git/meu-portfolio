import { Link } from 'react-router-dom'
import { useState } from 'react'

const projetos = [
  // JOGOS FINALIZADOS
  { id: 1, nome: 'O Grito da Mata', engine: 'Unity', ano: '2025', descricao: 'Roguelike com mapas procedurais, permadeath e alta rejogabilidade. Projeto para a Feira de Ciências da EEEP Edson Queiroz.', tipo: 'Roguelike', status: 'Finalizado', cor: 'from-green-600 to-emerald-600', icon: '🎮', destaque: true },
  { id: 2, nome: 'Chess Multiplayer', engine: 'Unity', ano: '2025', descricao: 'Jogo de xadrez 3D multiplayer como ferramenta de estudo e aprendizado.', tipo: 'Tabuleiro', status: 'Finalizado', cor: 'from-green-700 to-green-500', icon: '♟️', destaque: true },
  
  // JOGOS EM DESENVOLVIMENTO (WIP)
  { id: 3, nome: 'Um Dia (WIP)', engine: 'Unity', ano: '2024', descricao: 'JRPG educativo sobre conscientização ambiental e uso de produtos químicos na natureza. Projeto social da EEEP Edson Queiroz.', tipo: 'RPG', status: 'WIP', cor: 'from-emerald-600 to-green-400', icon: '🌿', destaque: true },
  { id: 4, nome: 'Zelda 2 (WIP)', engine: 'Unity', ano: '2024', descricao: 'Primeiro projeto de jogo 3D. RPG de aventura e exploração com combate simples e IA para inimigos.', tipo: '3D RPG', status: 'WIP', cor: 'from-yellow-600 to-orange-600', icon: '⚔️', destaque: false },
  { id: 5, nome: 'Tower Defense (WIP)', engine: 'Unity', ano: '2026', descricao: 'Bloons TD like com mecânicas de torres, upgrades e ondas de inimigos.', tipo: 'Tower Defense', status: 'WIP', cor: 'from-red-600 to-orange-600', icon: '🏰', destaque: false },
  { id: 6, nome: 'Card Game Multiplayer (WIP)', engine: 'Unity', ano: '2025', descricao: 'Hearthstone like com sistema de cartas multiplayer. Temática focada nas relações escolares.', tipo: 'Card Game', status: 'WIP', cor: 'from-purple-600 to-pink-600', icon: '🃏', destaque: false },
  { id: 7, nome: 'Balatro 2 (WIP)', engine: 'Unity', ano: '2026', descricao: 'Recriando o sistema do Balatro, jogo de cartas roguelike com pontuação estilo poker.', tipo: 'Card Game', status: 'WIP', cor: 'from-blue-600 to-cyan-600', icon: '🃟', destaque: false },
  
  // PROJETOS NÃO-JOGOS
  { id: 8, nome: 'Rapadura Filmes', engine: 'Web', ano: '2026', descricao: 'Plataforma de streaming para a Rapadura Atômica. https://streaming.rapaduraatomica.com.br', tipo: 'Web App', status: 'Finalizado', cor: 'from-green-600 to-emerald-600', icon: '🎬', destaque: true },
  { id: 9, nome: 'UI Kanban', engine: 'Kotlin', ano: '2026', descricao: 'Aplicativo para TV que recria a interface do Kanban.', tipo: 'Web App', status: 'Finalizado', cor: 'from-blue-600 to-indigo-600', icon: '📋', destaque: false },
  { id: 10, nome: 'Painel PPR', engine: 'Django', ano: '2026', descricao: 'Aplicação Django para armazenar dados de receita anual da empresa.', tipo: 'Web App', status: 'Finalizado', cor: 'from-green-700 to-green-500', icon: '📊', destaque: false },
  
  // PROJETOS SIMPLES DE ESTUDO (Python)
  { id: 11, nome: 'Clovis Bot', engine: 'Python', ano: '2024', descricao: 'Bot do Discord feito para estudo de Python.', tipo: 'Bot', status: 'Finalizado', cor: 'from-gray-600 to-gray-800', icon: '🤖', destaque: false },
  { id: 12, nome: 'Pedra, Papel e Tesoura', engine: 'Python', ano: '2024', descricao: 'Jogo simples que simula uma partida contra o computador.', tipo: 'Estudo', status: 'Finalizado', cor: 'from-green-600 to-teal-600', icon: '✂️', destaque: false },
  { id: 13, nome: 'Jogo da Velha', engine: 'Python', ano: '2024', descricao: 'Jogo da velha clássico em Python.', tipo: 'Estudo', status: 'Finalizado', cor: 'from-cyan-600 to-blue-600', icon: '❌⭕', destaque: false }
]

function Projects() {
  const [filter, setFilter] = useState('todos')
  const [statusFilter, setStatusFilter] = useState('todos')
  const [tipoFilter, setTipoFilter] = useState('todos')
  
  const filtrados = projetos.filter(p => {
    const matchCategoria = filter === 'todos' || 
      (filter === 'jogos' && ['Roguelike', 'Tabuleiro', 'RPG', '3D RPG', 'Tower Defense', 'Card Game'].includes(p.tipo)) ||
      (filter === 'web' && p.tipo === 'Web App') ||
      (filter === 'estudo' && ['Bot', 'Estudo'].includes(p.tipo))
    
    const matchStatus = statusFilter === 'todos' || p.status === statusFilter
    const matchTipoProjeto = tipoFilter === 'todos' || p.tipo === tipoFilter
    
    return matchCategoria && matchStatus && matchTipoProjeto
  })
  
  const categorias = [
    { id: 'todos', nome: ' Todos', icon: '' },
    { id: 'jogos', nome: ' Jogos', icon: '' },
    { id: 'web', nome: ' Web Apps', icon: '' },
    { id: 'estudo', nome: ' Estudos', icon: '' }
  ]
  
  const statuses = [
    { id: 'todos', nome: ' Todos', icon: '' },
    { id: 'Finalizado', nome: ' Finalizado', icon: '' },
    { id: 'WIP', nome: ' Em desenvolvimento', icon: '' }
  ]
  
  const tipos = ['todos', 'Roguelike', 'Tabuleiro', 'RPG', '3D RPG', 'Tower Defense', 'Card Game', 'Web App', 'Bot', 'Estudo']

  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className='text-5xl font-bold text-white text-center mb-4'>Meus Projetos</h1>
      <p className='text-xl text-gray-500 text-center mb-12'>Jogos, aplicações e estudos que desenvolvi</p>
      
      {/* Filtros por categoria */}
      <div className='flex flex-wrap justify-center gap-3 mb-6'>
        {categorias.map(cat => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              filter === cat.id
                ? 'bg-green-600 text-white shadow-lg shadow-green-900/50'
                : 'bg-black/50 text-gray-400 hover:bg-green-900/30 hover:text-green-400 border border-green-900/30'
            }`}
          >
            {cat.nome}
          </button>
        ))}
      </div>
      
      {/* Filtros por status */}
      <div className='flex flex-wrap justify-center gap-3 mb-6'>
        {statuses.map(status => (
          <button
            key={status.id}
            onClick={() => setStatusFilter(status.id)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              statusFilter === status.id
                ? 'bg-green-600 text-white shadow-lg shadow-green-900/50'
                : 'bg-black/50 text-gray-400 hover:bg-green-900/30 hover:text-green-400 border border-green-900/30'
            }`}
          >
            {status.nome}
          </button>
        ))}
      </div>
      
      {/* Filtros por tipo */}
      <div className='flex flex-wrap justify-center gap-2 mb-12'>
        {tipos.map(tipo => (
          <button
            key={tipo}
            onClick={() => setTipoFilter(tipo)}
            className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
              tipoFilter === tipo
                ? 'bg-green-600/50 text-white border border-green-500'
                : 'bg-black/30 text-gray-500 hover:text-gray-300 border border-gray-800'
            }`}
          >
            {tipo === 'todos' ? 'Todos os tipos' : tipo}
          </button>
        ))}
      </div>
      
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {filtrados.map((proj, index) => (
          <Link key={proj.id} to={`/projeto/${proj.id}`}>
            <div className='group bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden hover-glow-green transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-green-900/30 h-full flex flex-col'>
              <div className={`h-48 bg-gradient-to-br ${proj.cor} flex items-center justify-center relative overflow-hidden`}>
                <div className='absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500'></div>
                <span className='text-7xl group-hover:scale-110 transition duration-500'>{proj.icon}</span>
                <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold z-10 ${
                  proj.status === 'Finalizado' ? 'bg-green-600 text-white' : 'bg-yellow-600 text-white'
                }`}>
                  {proj.status === 'Finalizado' ? ' Finalizado' : ' WIP'}
                </div>
                {proj.destaque && (
                  <div className='absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold bg-green-600 text-white'>
                     Destaque
                  </div>
                )}
              </div>
              <div className='p-5 flex-1 flex flex-col'>
                <div className='flex justify-between items-start mb-2'>
                  <h3 className='text-xl font-bold text-white group-hover:text-green-400 transition line-clamp-1'>
                    {proj.nome}
                  </h3>
                  <span className='bg-green-900/30 text-green-400 text-xs px-2 py-0.5 rounded-full border border-green-800 whitespace-nowrap ml-2'>
                    {proj.tipo}
                  </span>
                </div>
                <p className='text-gray-500 text-sm mb-3 line-clamp-2 flex-1'>{proj.descricao}</p>
                <div className='flex justify-between items-center mt-2'>
                  <span className='text-green-400 text-sm font-semibold'>{proj.engine}</span>
                  <span className='text-gray-600 text-xs'>{proj.ano}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Contador de projetos */}
      <div className='text-center mt-12 text-gray-500 text-sm'>
        Mostrando {filtrados.length} de {projetos.length} projetos
      </div>
    </div>
  )
}

export default Projects