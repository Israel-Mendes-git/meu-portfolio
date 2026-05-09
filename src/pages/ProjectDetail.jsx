import { useParams, Link } from 'react-router-dom'

const projetosData = {
  1: { 
    nome: 'O Grito da Mata', 
    engine: 'Unity', 
    ano: '2025', 
    tipo: 'Roguelike',
    status: 'Finalizado',
    repo: 'https://github.com/Israel-Mendes-git/Roguelike',
    descricao: 'Projeto para a Feira de Ciências da EEEP Edson Queiroz. O projeto é um jogo do estilo roguelike, feito com a engine Unity e programado em C#. Esse gênero se destaca por ter mapas procedurais, permadeath e alta rejogabilidade.',
    detalhes: [
      'Sistema de geração procedural de mapas, que cria salas e corredores diferentes a cada partida',
      'Uso de conceitos de grafos e algoritmos de labirinto para gerar salas no final de cada corredor',
      'Sistema de combate e progressão, onde o jogador pode trocar ou melhorar as armas durante o jogo',
      'Scripts modulares em C#',
      'Loja interna, onde o jogador pode comprar novos equipamentos',
      'Sistema de inimigos e itens que aparecem de forma equilibrada conforme a dificuldade aumenta'
    ]
  },
  2: { 
    nome: 'Chess Multiplayer', 
    engine: 'Unity', 
    ano: '2025', 
    tipo: 'Tabuleiro',
    status: 'Finalizado',
    repo: 'https://github.com/Israel-Mendes-git/Chess-Multiplayer',
    descricao: 'Jogo de xadrez 3D multiplayer desenvolvido como ferramenta de estudo e aprendizado para melhorar habilidades e experiências com Unity.',
    detalhes: [
      'Jogo de xadrez 3D com gráficos completos',
      'Sistema multiplayer online',
      'Regras completas do xadrez implementadas',
      'Interface intuitiva para movimentação das peças',
      'Projeto de estudo para aperfeiçoamento em Unity'
    ]
  },
  3: { 
    nome: 'Um Dia (WIP)', 
    engine: 'Unity', 
    ano: '2024', 
    tipo: 'RPG',
    status: 'WIP',
    repo: 'https://github.com/Israel-Mendes-git/Uma-noite',
    descricao: 'Projeto para o projeto social da escola EEEP Edson Queiroz. O jogo é no estilo JRPG, voltado para a conscientização sobre o uso de produtos químicos na natureza.',
    detalhes: [
      'Estilo JRPG com narrativa envolvente',
      'Foco em conscientização ambiental, especialmente entre os jovens',
      'União entre entretenimento e educação',
      'Experiência envolvente que estimula a reflexão ambiental',
      'Combate e exploração no estilo clássico de JRPG'
    ]
  },
  4: { 
    nome: 'Zelda 2 (WIP)', 
    engine: 'Unity', 
    ano: '2024', 
    tipo: '3D RPG',
    status: 'WIP',
    repo: 'https://github.com/Israel-Mendes-git/Zelda-2',
    descricao: 'Primeiro projeto de um jogo 3D. Projeto feito como estudo para melhorar as habilidades com a engine Unity e com a criação de jogos.',
    detalhes: [
      'RPG de aventura e exploração em 3D',
      'Combate simples implementado',
      'Protótipo de IA para o inimigo',
      'Sistema de exploração de mundo aberto',
      'Projeto de aprendizado e aperfeiçoamento técnico'
    ]
  },
  5: { 
    nome: 'Tower Defense (WIP)', 
    engine: 'Unity', 
    ano: '2026', 
    tipo: 'Tower Defense',
    status: 'WIP',
    repo: 'https://github.com/Israel-Mendes-git/tower-defense',
    descricao: 'Bloons TD like com mecânicas de torres, upgrades e ondas de inimigos. Projeto de estudo usando Unity.',
    detalhes: [
      'Bloons TD like com mecânicas inspiradas no clássico',
      'Sistema de torres com diferentes tipos e upgrades',
      'Ondas de inimigos com dificuldade progressiva',
      'Sistema de economia e gerenciamento de recursos',
      'Projeto disponível no GitHub'
    ]
  },
  6: { 
    nome: 'Card Game Multiplayer (WIP)', 
    engine: 'Unity', 
    ano: '2025', 
    tipo: 'Card Game',
    status: 'WIP',
    repo: 'https://github.com/Israel-Mendes-git/card-game-multiplayer',
    descricao: 'Hearthstone like com sistema de cartas multiplayer. Projeto cuja temática foca o âmbito das relações escolares.',
    detalhes: [
      'Estilo Hearthstone com mecânicas de cartas colecionáveis',
      'Multiplayer em tempo real',
      'Temática focada nas relações escolares',
      'Sistema de mana e turnos',
      'Diferentes classes e estratégias de jogo'
    ]
  },
  7: { 
    nome: 'Balatro 2 (WIP)', 
    engine: 'Unity', 
    ano: '2026', 
    tipo: 'Card Game',
    status: 'WIP',
    repo: 'https://github.com/Israel-Mendes-git/balatro-2',
    descricao: 'Recriando o sistema do Balatro, jogo de cartas roguelike com pontuação estilo poker.',
    detalhes: [
      'Recriação do sistema do Balatro em Godot',
      'Sistema de pontuação estilo poker',
      'Upgrades e modificadores de cartas',
      'Progressão roguelike com desafios crescentes',
      'Estudo de Godot Engine e sistemas de cartas'
    ]
  },
  8: { 
    nome: 'Rapadura Filmes', 
    engine: 'Web', 
    ano: '2026', 
    tipo: 'Web App',
    status: 'Finalizado',
    repo: 'https://github.com/Israel-Mendes-git/Rapadura_filmes',
    descricao: 'Plataforma de streaming para a Rapadura Atômica, estúdio de animações e jogos digitais.',
    detalhes: [
      'Plataforma de streaming completa',
      'Disponível em: https://streaming.rapaduraatomica.com.br',
      'Desenvolvido para a Rapadura Atômica',
      'Sistema de catálogo de vídeos',
      'Interface amigável e responsiva'
    ]
  },
  9: { 
    nome: 'UI Kanban', 
    engine: 'Kotlin', 
    ano: '2026', 
    tipo: 'Web App',
    status: 'Finalizado',
    repo: 'https://github.com/Israel-Mendes-git/Uikanban',
    descricao: 'Aplicativo para TV feito em Kotlin que recria a interface do Kanban.',
    detalhes: [
      'Desenvolvido em Kotlin para TV',
      'Interface Kanban para organização de tarefas',
      'Design otimizado para telas grandes',
      'Projeto de estudo de Kotlin para TV'
    ]
  },
  10: { 
    nome: 'Painel PPR', 
    engine: 'Django', 
    ano: '2026', 
    tipo: 'Web App',
    status: 'Finalizado',
    repo: 'https://github.com/Israel-Mendes-git/painelppr',
    descricao: 'Uma aplicação em Django feita para armazenar os dados de receita do ano inteiro da empresa.',
    detalhes: [
      'Dashboard completo com Django',
      'Armazenamento e visualização de dados de receita anual',
      'Gráficos e relatórios',
      'Sistema de autenticação e segurança',
      'Projeto para uso empresarial'
    ]
  },
  11: { 
    nome: 'Clovis Bot', 
    engine: 'Python', 
    ano: '2024', 
    tipo: 'Bot',
    status: 'Finalizado',
    repo: 'https://github.com/Israel-Mendes-git/Clovis-bot',
    descricao: 'Bot do Discord feito para estudo de Python.',
    detalhes: [
      'Bot para Discord desenvolvido em Python',
      'Comandos interativos',
      'Projeto de estudo da linguagem Python',
      'Integração com API do Discord'
    ]
  },
  12: { 
    nome: 'Pedra, Papel e Tesoura', 
    engine: 'Python', 
    ano: '2024', 
    tipo: 'Estudo',
    status: 'Finalizado',
    repo: 'https://github.com/Israel-Mendes-git/Rock-Paper-Scissor',
    descricao: 'Jogo em Python que simula uma partida contra o computador.',
    detalhes: [
      'Jogo clássico Pedra, Papel e Tesoura',
      'Modo single player contra o computador',
      'Projeto simples para estudo de Python',
      'Interface no terminal'
    ]
  },
  13: { 
    nome: 'Jogo da Velha', 
    engine: 'Python', 
    ano: '2024', 
    tipo: 'Estudo',
    status: 'Finalizado',
    repo: 'https://github.com/Israel-Mendes-git/Tic-Tac-Toe',
    descricao: 'Jogo da velha clássico implementado em Python.',
    detalhes: [
      'Jogo da velha tradicional',
      'Modo dois jogadores',
      'Projeto de estudo de lógica em Python',
      'Interface no terminal'
    ]
  }
}

function ProjectDetail() {
  const { id } = useParams()
  const projeto = projetosData[id]

  if (!projeto) {
    return <div className='container mx-auto px-4 py-16 text-white text-center'>Projeto não encontrado</div>
  }

  return (
    <div className='container mx-auto px-4 py-16'>
      <Link to='/projects' className='text-green-400 hover:text-green-300 mb-6 inline-block'>
        ← Voltar para projetos
      </Link>

      <div className='bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden border border-green-900/30'>
        <div className='h-64 bg-gradient-to-br from-green-800 to-green-600 flex items-center justify-center relative'>
          <span className='text-8xl'>🎮</span>
          <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-sm font-bold ${
            projeto.status === 'Finalizado' ? 'bg-green-600 text-white' : 'bg-yellow-600 text-white'
          }`}>
            {projeto.status === 'Finalizado' ? 'Finalizado' : 'Em desenvolvimento'}
          </div>
        </div>
        
        <div className='p-8'>
          <h1 className='text-3xl font-bold text-white mb-4'>{projeto.nome}</h1>
          
          <div className='flex flex-wrap gap-3 mb-6'>
            <span className='bg-green-600 px-3 py-1 rounded text-sm'>{projeto.engine}</span>
            <span className='bg-black/50 px-3 py-1 rounded text-sm text-gray-400 border border-green-900/30'>{projeto.ano}</span>
            <span className='bg-black/50 px-3 py-1 rounded text-sm text-gray-400 border border-green-900/30'>{projeto.tipo}</span>
          </div>

          <p className='text-gray-400 text-lg mb-8'>
            {projeto.descricao}
          </p>

          <div className='border-t border-green-900/30 pt-6'>
            <h2 className='text-xl font-bold text-white mb-4'> Funcionalidades e Diferenciais</h2>
            <ul className='list-disc list-inside text-gray-400 space-y-2 mb-8'>
              {projeto.detalhes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className='flex gap-4'>
            {projeto.repo && (
              <a 
                href={projeto.repo} 
                target='_blank' 
                rel='noopener noreferrer'
                className='bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition font-bold inline-flex items-center gap-2'
              >
                <span>🔗</span>
                Acessar Projeto
              </a>
            )}
            <a 
              href='https://github.com/Israel-Mendes-git' 
              target='_blank' 
              rel='noopener noreferrer'
              className='bg-black/50 hover:bg-green-900/30 px-6 py-3 rounded-lg transition font-bold text-green-400 border border-green-800 text-center inline-flex items-center gap-2'
            >
              <span>📦</span>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail