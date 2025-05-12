import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy } from 'lucide-react';
import Confetti from 'react-confetti';
import './App.css';
import { useWindowSize } from 'react-use';


function CursoCompleto() {

  const { width, height } = useWindowSize();
  // Estado para controlar o tema (claro ou escuro)
  const [darkMode, setDarkMode] = useState(false);
  // Estado para controlar a seção atual exibida
  const [showSection, setShowSection] = useState('inicio');
  // Estado para controlar o progresso dos tópicos
  const [progress, setProgress] = useState(Array(14).fill(false));
  // Estado para controlar os projetos selecionados
  const [checkedProjects, setCheckedProjects] = useState(() => {
  // Verifica se há dados salvos no localStorage
  const saved = localStorage.getItem('checkedProjects');
  return saved ? JSON.parse(saved) : new Array(5).fill(false); // Supondo 5 projetos
  });
  // Estado para controlar a mensagem motivacional 
  const [motivationalMessage, setMotivationalMessage] = useState('');
  // Estado para controlar a exibição do toast
  const [showToast, setShowToast] = useState(false);
  // Estado para controlar o texto do comando diário
  const [comandoTexto, setComandoTexto] = useState('');
  // Estado para controlar o tópico selecionado no dropdown
  const [selectedTopic, setSelectedTopic] = useState('1. Revisão Rápida');
  // Estado para controlar se o comando foi copiado
  const [copied, setCopied] = useState(false);
 

  // Hook para salvar checkedProjects no localStorage sempre que ele mudar
  useEffect(() => {
  // Salva os projetos selecionados no localStorage
  localStorage.setItem('checkedProjects', JSON.stringify(checkedProjects));
  }, [checkedProjects]); // Executa sempre que checkedProjects mudar
  
  // Mensagem do dia aleatória
  const [mensagemDoDia, setMensagemDoDia] = useState(() => {
          const mensagens = [
          "Cada erro é uma oportunidade de aprender!",
          "Você está mais perto de ser fluente em Python!",
          "Persistência é o caminho do sucesso!",
          "Não desista, até os maiores programadores começaram do zero!",
          "Seu esforço de hoje é o sucesso de amanhã!",
          "Code um pouco todo dia, e os resultados virão.",
          "Se está difícil, é porque você está evoluindo!",
          "Aprender leva tempo, confie no processo.",
          "A consistência vale mais do que a velocidade.",
          "Você já sabe mais do que sabia ontem!",
          "Programar é resolver problemas: celebre cada um vencido.",
          "Seu compromisso com o hoje constrói o seu amanhã.",
          "Não precisa ser perfeito, só constante.",
          "Estudar com intenção é mais valioso do que horas perdidas.",
          "A dúvida de hoje é a resposta de amanhã.",
          "Errar faz parte da programação — faz parte do aprendizado!",
          "Um passo por dia já é um caminho inteiro no fim do mês.",
          "Você tem tudo o que precisa pra continuar.",
          "Cada print, cada erro, cada console.log te fortalece.",
          "Concluir um exercício já é uma vitória!",
          "Hoje é um ótimo dia para aprender algo novo.",
          "O importante é não parar.",
          "Você está construindo algo valioso: conhecimento.",
          "Confie em você. O código, com o tempo, vai ficando claro.",
          "Repetição é a chave do domínio.",
          "Mesmo um código simples é uma conquista.",
          "Não subestime o poder de 30 minutos focados.",
          "A jornada é mais importante que a velocidade.",
          "Você está aprendendo algo que muda vidas.",
          "Continue. O seu futuro programador(a) agradece!",
        ];
  
  return mensagens[Math.floor(Math.random() * mensagens.length)];
  });
 
  // Atualiza o texto do comando sempre que muda o tópico selecionado

useEffect(() => {
  const topicObj = dailyCommandTopics.find((t) => t.title === selectedTopic);
  if (topicObj) {
    const textoFormatado = `COMANDO DIÁRIO: ${topicObj.title}\n\n` +
      topicObj.subtopics.map((s, idx) => `- ${s}`).join('\n');
    setComandoTexto(textoFormatado);
  }
    }, [selectedTopic]);



  // Lista dos tópicos do curso
  const topics = [
    '1. Revisão Rápida ',
    '2. Funções e Estruturação do Código',
    '3. Manipulação Avançada de Estruturas de Dados',
    '4. Manipulação de Arquivos',
    '5. Módulos e Pacotes',
    '6. Orientação a Objetos (POO)',
    '7. Tratamento de Erros e Exceções',
    '8. Programação Funcional',
    '9. Testes Automatizados',
    '10. Programação Assíncrona e Concorrente',
    '11. Manipulação e Análise de Dados',
    '12. Projetos e Aplicações Práticas',
    '13. Git e GitHub (revisão prática)',
    '14. Boas Práticas e Estilo Profissional'
  ];

  // Lista de tópicos para o dropdown do comando diário
  const dailyCommandTopics = [
    { id: 1,
      title: '1. Revisão Rápida',
      subtopics: [`Olá, ChatGPT! Hoje você vai ser meu tutor de Python.
A gente vai estudar o seguinte conteúdo: Revisão Rápida.
Quero que você me passe a teoria uma de cada vez explicada em palavras simples,
com exemplos práticos e depois exercícios pra eu resolver no meu ritmo.
Se possível, com feedback ou correção se eu errar.
•	Sintaxe básica
•	Tipos de dados primitivos (int, float, str, bool)
•	Variáveis e constantes
•	Operadores (aritméticos, relacionais, lógicos, de atribuição)
•	Entrada e saída (input(), print())
•	Condicionais (if, elif, else)
•	Laços de repetição (for, while, break, continue)
•	Listas e tuplas
•	Dicionários e conjuntos
•	Funções simples (def, parâmetros, return)
`] },
    { id: 2,
      title: '2. Funções e Estruturação do Código',
      subtopics: [`Olá, ChatGPT! Hoje você vai ser meu tutor de Python.
A gente vai estudar o seguinte conteúdo: Funções e Estruturação do Código.
Quero que você me passe a teoria uma de cada vez explicada em palavras simples,
com exemplos práticos e depois exercícios pra eu resolver no meu ritmo.
Se possível, com feedback ou correção se eu errar.
•	Parâmetros nomeados e padrão
•	Argumentos arbitrários (*args, **kwargs)
•	Funções anônimas (lambda)
•	Funções como objetos (funções dentro de funções, como parâmetros etc.)
•	Decoradores
•	Recursão
`] },
    { id: 3,
      title: '3. Manipulação Avançada de Estruturas de Dados',
      subtopics: [`Olá, ChatGPT! Hoje você vai ser meu tutor de Python.
A gente vai estudar o seguinte conteúdo: Manipulação Avançada de Estruturas de Dados.
Quero que você me passe a teoria uma de cada vez explicada em palavras simples,
com exemplos práticos e depois exercícios pra eu resolver no meu ritmo.
Se possível, com feedback ou correção se eu errar.
•	List comprehension e dict comprehension
•	Slicing avançado
•	Ordenação com funções personalizadas (key, sorted)
•	Enumeração (enumerate) e empacotamento (zip)
•	Manipulação de strings complexa (fatiamento, métodos úteis, expressões regulares)`] },
    { id: 4,
      title: '4. Manipulação de Arquivos',
      subtopics: [`Olá, ChatGPT! Hoje você vai ser meu tutor de Python.
A gente vai estudar o seguinte conteúdo: Manipulação de Arquivos.
Quero que você me passe a teoria uma de cada vez explicada em palavras simples,
com exemplos práticos e depois exercícios pra eu resolver no meu ritmo.
Se possível, com feedback ou correção se eu errar.
•	Leitura e escrita de arquivos (open, read, write)
•	Manipulação de arquivos CSV e JSON
•	Gerenciamento de arquivos com with (context manager)`] },
    { id: 5,
      title: '5. Módulos e Pacotes',
      subtopics: [`Olá, ChatGPT! Hoje você vai ser meu tutor de Python.
A gente vai estudar o seguinte conteúdo: Módulos e Pacotes.
Quero que você me passe a teoria uma de cada vez explicada em palavras simples,
com exemplos práticos e depois exercícios pra eu resolver no meu ritmo.
Se possível, com feedback ou correção se eu errar.
•	Importação de módulos (import, from ... import)
•	Criando e organizando pacotes
•	sys, os, math, random, datetime
•	Uso do pip e bibliotecas externas`] },
    { id: 6,
      title: '6. Orientação a Objetos (POO)',
      subtopics: [`Olá, ChatGPT! Hoje você vai ser meu tutor de Python.
A gente vai estudar o seguinte conteúdo: Orientação a Objetos (POO).
Quero que você me passe a teoria uma de cada vez explicada em palavras simples,
com exemplos práticos e depois exercícios pra eu resolver no meu ritmo.
Se possível, com feedback ou correção se eu errar.
•	Classes e objetos
•	Atributos e métodos
•	Encapsulamento
•	Herança e polimorfismo
•	Métodos especiais (init, str, repr, etc.)
•	Construtores (__init__)
•	Classes abstratas (ABC)`] },
    { id: 7,
      title: '7. Tratamento de Erros e Exceções',
      subtopics: [`Olá, ChatGPT! Hoje você vai ser meu tutor de Python.
A gente vai estudar o seguinte conteúdo: Tratamento de Erros e Exceções.
Quero que você me passe a teoria uma de cada vez explicada em palavras simples,
com exemplos práticos e depois exercícios pra eu resolver no meu ritmo.
Se possível, com feedback ou correção se eu errar.
•	Tentativa e exceção (try, except)
•	Exceções personalizadas
•	Finally e else`] },
    { id: 8,
      title: '8. Programação Funcional',
      subtopics: [`Olá, ChatGPT! Hoje você vai ser meu tutor de Python.
A gente vai estudar o seguinte conteúdo: Programação Funcional.
Quero que você me passe a teoria uma de cada vez explicada em palavras simples,
com exemplos práticos e depois exercícios pra eu resolver no meu ritmo.
Se possível, com feedback ou correção se eu errar.
•	map, filter, reduce
•	Funções de ordem superior
•	Imutabilidade e funções puras`] },
    { id: 9,
      title: '9. Testes Automatizados',
      subtopics: [`Olá, ChatGPT! Hoje você vai ser meu tutor de Python.
A gente vai estudar o seguinte conteúdo: Testes Automatizados.
Quero que você me passe a teoria uma de cada vez explicada em palavras simples,
com exemplos práticos e depois exercícios pra eu resolver no meu ritmo.
Se possível, com feedback ou correção se eu errar.
•	assert
•	Introdução a testes com unittest ou pytest
•	Testes de unidade e testes automatizados básicos`] },
    { id: 10,
      title: '10. Programação Assíncrona e Concorrente',
      subtopics: [`Olá, ChatGPT! Hoje você vai ser meu tutor de Python.
A gente vai estudar o seguinte conteúdo: Programação Assíncrona e Concorrente.
Quero que você me passe a teoria uma de cada vez explicada em palavras simples,
com exemplos práticos e depois exercícios pra eu resolver no meu ritmo.
Se possível, com feedback ou correção se eu errar.
•	Introdução a threads e processos
•	Asyncio e programação assíncrona
•	Await e async`] },
    { id: 11,
      title: '11. Manipulação e Análise de Dados',
      subtopics: [`Olá, ChatGPT! Hoje você vai ser meu tutor de Python.
A gente vai estudar o seguinte conteúdo: Manipulação e Análise de Dados.
Quero que você me passe a teoria uma de cada vez explicada em palavras simples,
com exemplos práticos e depois exercícios pra eu resolver no meu ritmo.
Se possível, com feedback ou correção se eu errar.
•	Uso do pandas (DataFrame, leitura de arquivos, filtros)
•	Uso do numpy (operações vetorizadas, arrays multidimensionais)
•	Visualização básica com matplotlib ou seaborn`] },
    { id: 12,
      title: '12. Projetos e Aplicações Práticas',
      subtopics: [`Olá, ChatGPT! Hoje você vai ser meu tutor de Python.
A gente vai estudar o seguinte conteúdo: Projetos e Aplicações Práticas.
Quero que você me passe a teoria uma de cada vez explicada em palavras simples,
com exemplos práticos e depois exercícios pra eu resolver no meu ritmo.
Se possível, com feedback ou correção se eu errar.
•	CRUD com arquivos ou listas
•	Jogo simples com POO
•	API simples com Flask ou FastAPI
•	Sistema de login
•	Mini dashboard com visualização de dados`] },
    { id: 13,
      title: '13. Git e GitHub (revisão prática)',
      subtopics: [`Olá, ChatGPT! Hoje você vai ser meu tutor de Python.
A gente vai estudar o seguinte conteúdo: Git e GitHub (revisão prática).
Quero que você me passe a teoria uma de cada vez explicada em palavras simples,
com exemplos práticos e depois exercícios pra eu resolver no meu ritmo.
Se possível, com feedback ou correção se eu errar.
•	Controle de versão básico
•	Commits, branches e push/pull
•	Organização de repositórios para projetos`] },
    { id: 14,
      title: '14. Boas Práticas e Estilo Profissional',
      subtopics: [`Olá, ChatGPT! Hoje você vai ser meu tutor de Python.
A gente vai estudar o seguinte conteúdo: Boas Práticas e Estilo Profissional.
Quero que você me passe a teoria uma de cada vez explicada em palavras simples,
com exemplos práticos e depois exercícios pra eu resolver no meu ritmo.
Se possível, com feedback ou correção se eu errar.
•	PEP 8 e estilo de código
•	Comentários e documentação
•	Refatoração de código
•	Modularização e separação de responsabilidades`] }
  ];
  // Mensagens motivacionais que correspondem aos tópicos
  const messages = [
    'Você está começando muito bem!',
    'Isso aí, continue assim!',
    'Boa! Você está com uma ótima constância!',
    'Muito bem, você está progredindo!',
    'Já está ficando experiente!',
    'Excelente trabalho!',
    'Você está dominando a matéria!',
    'Incrível! Você já percorreu mais da metade!',
    'Falta pouco, mantenha o ritmo!',
    'Você está quase lá!',
    'Só mais um pouco!',
    'Últimos passos!',
    'Praticamente um(a) expert!',
    'Parabéns! Você completou o curso! 🎉'
  ];

  // Carrega o progresso e tema salvos no localStorage quando o app inicia
  useEffect(() => {
    const savedProgress = Array.from({ length: 14 }, (_, index) =>
      JSON.parse(localStorage.getItem('progresso_' + index)) || false
    );
    setProgress(savedProgress);
    const savedTheme = localStorage.getItem('temaEscuro') === 'true';
    setDarkMode(savedTheme);
  }, []);

  // Salva o tema no localStorage toda vez que ele muda
  useEffect(() => {
    localStorage.setItem('temaEscuro', darkMode);
  }, [darkMode]);
  // Atualiza o texto do comando sempre que muda o tópico selecionado
  useEffect(() => {
  const topicObj = dailyCommandTopics.find((t) => t.title === selectedTopic);
  if (topicObj) {
    const textoFormatado = `COMANDO DIÁRIO: ${topicObj.title}\n\n` +
      topicObj.subtopics.map((s, idx) => `- ${s}`).join('\n');
    setComandoTexto(textoFormatado);
  }
  }, [selectedTopic]);

  // Função que trata quando um checkbox de progresso é clicado
  const handleCheckboxChange = (index) => {
    const updatedProgress = [...progress];
    updatedProgress[index] = !updatedProgress[index];
    setProgress(updatedProgress);
    localStorage.setItem('progresso_' + index, updatedProgress[index]);

    // Verifica se o progresso foi atualizado e exibe a mensagem motivacional
    if (updatedProgress[index]) {
      setMotivationalMessage(messages[index]);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Toast visível por 3 segundos
    } else {
      setMotivationalMessage('');
    }
  };

  // Porcentagem de progresso (tópicos marcados como concluídos)
  const progressPercentage = Math.min((progress.filter(Boolean).length / progress.length) * 100, 100);

  const copyToClipboard = () => {
  navigator.clipboard.writeText(comandoTexto).then(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);});
  };

  
  // Animações para troca de seções
  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  useEffect(() => {
  console.log("progress:", progress);
  console.log("checkedProjects:", checkedProjects);
}, [progress, checkedProjects]);

  return ( 
    
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>

      
{/* Botão para alternar entre modo claro e escuro */}
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        Alternar Tema
      </button>

{/* Navegação entre as seções */}
      <nav className="menu">
        <button onClick={() => setShowSection('inicio')}>Ínicio</button>
        <button onClick={() => setShowSection('comando')}>Comando Diário</button>
        <button onClick={() => setShowSection('progresso')}>Progresso</button>
        <button onClick={() => setShowSection('projetos')}>Projetos</button>
        <button onClick={() => setShowSection('recursos')}>Recursos</button>
      </nav>

      {/* Cabeçalho do app */}
      <header>
        <h1>Python com ChatGPT</h1>
        <p>Estudo personalizado com IA</p>
      </header>

      {/* Conteúdo principal que muda de acordo com a seção */}
      <main>
        <AnimatePresence mode="wait">
          <motion.section
            key={showSection}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={sectionVariants}
            transition={{ duration: 0.3 }}
          >
{/* Seção: Início */}
{showSection === 'inicio' && (
  <section className="inicio">
    {/* Boas-vindas */}
    <motion.div
      className="card text-center mb-6"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <h1 className="text-2xl font-bold mb-2">🎉 Bem-vindo ao curso de Python!</h1>
      <p>
        Cada linha de código é um passo rumo ao seu objetivo. Vamos nessa jornada juntos!
      </p>
    </motion.div>

    {/* Cards em linha */}
    <div className="cards-container">
      {/* Como Usar */}
      <motion.div
        className="card"
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="font-semibold text-lg mb-2">📘 Como usar</h2>
        <ol className="list-decimal list-inside text-sm space-y-1">
          <li>Vá para a aba "Comando diário".</li>
          <li>Selecione o tópico que irá estudar.</li>
          <li>Copie o comando diário.</li>
          <li>Envie ao ChatGPT e estude.</li>
          <li>Publique seus códigos e exercícios em um repositório no GitHub.</li>
          <li>Marque seu progresso!</li>
        </ol>
      </motion.div>

              {/* Progresso */}
            <motion.div
              className="card text-center"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-lg font-semibold mb-1">📈 Progresso</h2>
              <p className="text-sm">
                Aulas concluídas: {progress.filter(Boolean).length} de {progress.length}
              </p>
              <p className="text-sm">
                Projetos concluídos: {checkedProjects.filter(Boolean).length} de {checkedProjects.length}
              </p>

              <div className="flex justify-center flex-wrap gap-3 mt-3">


            {/* Medalhas com base no total de aulas concluídas */}
        {Array.from({ length: Math.floor(progress.filter(Boolean).length / 3) }).map((_, index) => (
          <motion.span
            key={`medal-${index}`}
            initial={{ scale: 0, rotate: 0 }}
            animate={{
              scale: [0, 1.5, 1],
              rotate: [0, 45, 0],
              opacity: [0, 1, 1]
            }}
            transition={{
              duration: 8,
              delay: index * 0.3,
            }}
            style={{ fontSize: '3rem' }}
          >
            🥇
          </motion.span>
        ))}
        {/* Troféus */}
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.span
            key={`trophy-${index}`}
            initial={{ scale: 0, rotate: 0 }}
            animate={{
              scale: [0, 1.5, 1],
              rotate: [0, -45, 0],
              opacity: [0, 1, 1]
            }}
            transition={{
              duration: 8,
              delay: index * 0.3,
            }}
            style={{ fontSize: '3rem' }}
          >
            {checkedProjects[index] ? '🏆' : ''}
          </motion.span>
        ))}
              </div>
        <div style={{ marginTop: '5rem' }}>
          <p className="text-sm text-center">
            Você ganha 1 medalha a cada 3 aulas concluídas! 
            Você ganha 1 troféu a cada projeto concluído!
          </p>
        </div>


            </motion.div>
            

              {/* Mensagem do dia */}
              <motion.div
                className="card flex flex-col items-center text-center p-4 relative"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-3 rounded-lg shadow-md mb-4">
                  <h3 className="text-md font-medium mb-2">💭 Chip pensou:</h3>
                  <p className="text-sm italic">{mensagemDoDia}</p>
                </div>

                {/* Ajustando o estilo do gatinho */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px' }}>
                  <img
                    src="/gatinho.png"
                    alt="Gatinho pensativo"
                    style={{
                      width: '200px',  // tamanho
                      height: 'auto',
                      marginTop: '10px', // Ajustando a posição para que fique mais centralizado
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </section>
        )}


{/* Seção: Comando Diário */}
            {showSection === 'comando' && (
              <section className="modelo-comando compact">
                <h2 className="text-center">Modelo de Comando Diário</h2>

                <label>Escolha um tópico:</label>
                <select value={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)}>
                {dailyCommandTopics.map((topic) => (
                  <option key={topic.id} value={topic.title}>{topic.title}</option>
                ))}
              </select>


              {/* Exibe subtópicos do tópico selecionado */}

                <pre>{comandoTexto}</pre>

             <button
                key={copied ? 'copied' : 'copiar'} // Faz com que o botão tenha uma chave única
                className="copy-button"
                onClick={copyToClipboard}
              >
                <Copy size={16} /> {copied ? 'Copiado!' : 'Copiar Comando'}
            </button>



                

                <p className="chat-link text-right"> 
                  <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">
                    Entrar no ChatGPT
                  </a>
                </p>
              </section>
            )}


{/* Seção: Progresso */}
                {showSection === 'progresso' && (
                  <section className="progresso">
                    <h2>Progresso dos Estudos</h2>

                    {/* Mensagem motivacional */}
                    <AnimatePresence>
                      {showToast && (
                        <motion.div
                          className="toast"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p>{motivationalMessage}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="barra-com-container">
                      <motion.div
                        className="progress-bar"
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercentage}%` }}
                        transition={{ duration: 0.5 }}
                      />
                      <p>{Math.round(progressPercentage)}% de progresso</p>
                    </div>

                    <ul>
                      {progress.map((checked, index) => (
                        <li key={index}>
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => handleCheckboxChange(index)}
                          />
                          {topics[index]}
                        </li>
                      ))}
                    </ul>

                    {/* Confetes aparecem quando todos os tópicos estão concluídos */}
                    {progress.filter(Boolean).length === 14 && <Confetti width={width} height={height} />}
                  </section>
                )}

{/* Seção: Projetos Práticos */}
                      {showSection === 'projetos' && (
                        <section className="projetos px-4 py-6 max-w-6xl mx-auto">
            <h2 className="text-xl font-bold mb-4">🧱 Projetos Práticos</h2>

            {[
              {
                titulo: "Projeto 1 – Gerenciador de Tarefas com Estatísticas",
                aulas: "1, 2 e 3",
                descricao: "Crie um programa que gerencie uma lista de tarefas com funcionalidades como adicionar, remover, listar, filtrar por status e gerar estatísticas.",
                requisitos: [
                  "Sintaxe básica, condicionais, loops, funções.",
                  "Uso de listas, tuplas, dicionários e conjuntos.",
                  "Funções com parâmetros padrões, *args, **kwargs, lambda.",
                  "Recursão simples para menus.",
                  "enumerate, zip, slicing, ordenações personalizadas.",
                  "Fatiamento de strings e expressões regulares para validar input."
                ]
              },
              {
                titulo: "Projeto 2 – Biblioteca Virtual com Cadastro de Livros e Usuários",
                aulas: "4, 5 e 6",
                descricao: "Sistema para gerenciar uma biblioteca fictícia com cadastro de livros, usuários, empréstimos e devoluções. Dados salvos em arquivos JSON ou CSV.",
                requisitos: [
                  "Leitura e escrita com with, JSON e CSV.",
                  "Módulos internos (os, datetime, random) e bibliotecas externas simples.",
                  "Módulos próprios (ex: utils.py).",
                  "POO com herança entre classes (Livro, Usuario, Emprestimo).",
                  "Métodos especiais e encapsulamento básico."
                ]
              },
              {
                titulo: "Projeto 3 – Sistema de Pedidos Online com Descontos e Pagamento",
                aulas: "7, 8 e 9",
                descricao: "Simule um sistema de pedidos com cálculo de descontos, tratamento de erros e testes automatizados.",
                requisitos: [
                  "Tratamento de exceções e exceções personalizadas.",
                  "Funções map, filter, reduce.",
                  "Testes com unittest ou pytest.",
                  "Funções puras e organização funcional."
                ]
              },
              {
                titulo: "Projeto 4 – Analisador de Dados Assíncrono com Relatórios Visuais",
                aulas: "10, 11 e 12",
                descricao: "Crie uma aplicação que lê múltiplos arquivos simultaneamente e gera gráficos com análise de dados.",
                requisitos: [
                  "Concorrência com threading ou asyncio.",
                  "Análise de dados com pandas, numpy.",
                  "Gráficos com matplotlib ou seaborn.",
                  "Interface de linha de comando com barra de progresso (opcional)."
                ]
              },
              {
                titulo: "Projeto 5 – Dashboard Final: Painel Interativo com Histórico",
                aulas: "13 e 14 + revisão geral",
                descricao: "Painel de controle que integra funcionalidades do curso com versionamento no Git.",
                requisitos: [
                  "Organização em módulos bem estruturados.",
                  "PEP8, docstrings, comentários úteis.",
                  "Versionamento com Git e README descritivo.",
                  "Refatoração, testes, visualização, POO e Flask (opcional)."
                ]
              }
            ].map((projeto, index) => (
              <div key={index} className="projeto mb-6 border p-4 rounded-xl shadow-sm bg-white">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{`📌 ${projeto.titulo}`}</h3>
                  <label className="flex items-center space-x-2 text-sm">
                    <input
                      type="checkbox"
                      checked={checkedProjects[index]}
                      onChange={(e) => {
                        const newProjects = [...checkedProjects];
                        newProjects[index] = e.target.checked;
                        setCheckedProjects(newProjects);
                      }}
                    />
                    <span>Concluído</span>
                  </label>
                </div>
                <p><strong>Aulas:</strong> {projeto.aulas}</p>
                <p><strong>Descrição:</strong> {projeto.descricao}</p>
                <details className="mt-2">
                  <summary className="cursor-pointer">📋 Requisitos Técnicos</summary>
                  <ul className="list-disc list-inside mt-1 text-sm space-y-1">
                    {projeto.requisitos.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </details>
              </div>
            ))}
          </section>
                      )}  


{/* Seção: Recursos Extras */}
            {showSection === 'recursos' && (
              <section className="recursos-extras">
                <h2>📚 Recursos Extras</h2>

                {/* Links Úteis */}
                <div className="grupo-recurso">
                  <h3>🔗 Links Úteis</h3>
                  <ul class="links-uteis">
                    <li><a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer"> Acessar ChatGPT</a></li>
                    <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"> Acessar GitHub</a></li>
                  </ul>
                </div>

                {/* Dicas Rápidas */}
                <div className="grupo-recurso">
                  <h3>⚡ Dica Rápida</h3>
                  <ul>
                    <li>🖱️ <strong>Se você exceder seu limite diário no ChatGPT </strong> — Você pode criar uma nova conta no ChatGPT e enviar o prompt editado com as lições que ainda faltam finalizar.</li>
                  </ul>
                </div>

                {/* Vídeos Recomendados */}
                <div className="grupo-recurso">
                  <h3>🎥 Vídeos Recomendados</h3>
                  <div className="videos">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/sIahy_vrYLU?si=iw23fQSMwgdqS7yu&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/S9uPNppGsGo?si=NRPEcYUCkiubJlI9&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                </div>

                {/* Área de Downloads */}
                <div class="grupo-recurso">
                  <h3>📥 Downloads Úteis</h3>
                  <ul class="links-downloads">
                    <li>🐍 <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Baixar Python (Site Oficial)</a></li>
                    <li>🛠️ <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer">Baixar Visual Studio Code (Site Oficial) </a></li>
                    <li>🔧 <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">Baixar Git (Site Oficial)</a></li>
                  </ul>
                </div>
              </section>
            )}

          </motion.section>
        </AnimatePresence>
      </main>

{/* Rodapé */}
      <footer>
        <p>Feito com ❤️ por Catarina</p>
      </footer>

      {/* Toast motivacional */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
          >
            {motivationalMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    
  );
}
export default CursoCompleto;
