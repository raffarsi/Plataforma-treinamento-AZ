# AZ-900 Prep Hub — Plataforma de Estudo, Gamificação e Simulados

Plataforma web (HTML + CSS + JavaScript puro, sem frameworks) para preparação à certificação **Microsoft AZ-900 (Azure Fundamentals)**, combinando banco de questões, simulados configuráveis, explicações educacionais e gamificação.

## Novidades desta versão

- **Landing page** com escolha de trilha (AZ-900 funcional; AI-900/AI-901 exibido como "em desenvolvimento").
- **Identificação do aluno** (nome + turma opcional), usado em saudações, histórico e rankings; botão "Trocar aluno" no cabeçalho permite uso compartilhado do computador em sala de aula.
- **Perfis por aluno**: XP, nível, conquistas e histórico agora são individuais (`STATE.students`), permitindo vários alunos competirem no mesmo navegador.
- **Registro de atividades** (`STATE.activityLog`): toda partida de jogo e todo simulado grava aluno, data, pontuação, XP e tempo gasto.
- **Ranking por modalidade**: Geral, Cruzadinha, Caça-Palavras, Drag and Drop e Simulados, cada um com sua própria classificação local.
- **Conquistas expandidas**: medalhas gerais (ex.: "Mestre dos Simulados", "Rei do Caça-Palavras", "Especialista em Azure") + uma conquista "Expert em `<domínio>`" para cada um dos 20 domínios do edital.
- **Modo Prova vs. Modo Estudo** no simulado: Modo Prova mantém o feedback só no relatório final (cronometrado, como o exame real); Modo Estudo dá feedback completo a cada questão, sem pressão de tempo.
- **Revisão completa obrigatória do simulado**: ao final, cada questão exibe pergunta, sua resposta, resposta correta, status, conceito relacionado, análise de todas as alternativas e uma "dica para a prova" — não apenas a nota.
- **Banco de questões expandido**: cada questão agora tem também `nivel` (Básico/Intermediário/Avançado, atribuído por domínio) e `dica` (resumo de memorização, derivado da resposta correta e do domínio).

---

## 1. Arquitetura Pedagógica

A plataforma segue o modelo de aprendizagem **"Praticar → Errar → Entender → Reforçar → Revisar"**, alinhado às boas práticas de design instrucional para certificações técnicas:

| Camada | Recurso | Função pedagógica |
|---|---|---|
| **Aquisição de conceito** | Banco de Questões + explicações por alternativa | Fecha o ciclo de feedback imediato: o aluno não só sabe *se* errou, mas *por que* errou e *por que* as demais opções não servem — reduz reforço de falsos padrões de resposta. |
| **Prática deliberada** | Simulado configurável (10 a 100 questões) | Simula a pressão e o formato do exame real, treinando gestão de tempo e revisão de respostas antes da entrega. |
| **Engajamento e retenção** | 4 jogos (Cruzadinha, Caça-Palavras, Drag&Drop, Desafio Relâmpago) | Gamificação ativa a memória de reconhecimento de termos (cruzadinha/caça-palavras), a associação de conceitos (drag&drop) e a recuperação rápida sob pressão (desafio relâmpago) — três modos distintos de codificação de memória. |
| **Metacognição** | Relatório de desempenho por domínio | Mostra tópicos dominados vs. frágeis, permitindo que o aluno direcione o estudo (princípio de "estudo espaçado direcionado por erro"). |
| **Motivação contínua** | XP, níveis, conquistas, ranking local, histórico | Sustenta engajamento de longo prazo via reforço positivo e visualização de progresso (curva de aprendizagem visível). |

### Por que cada módulo contribui para a aprovação no AZ-900

- **Banco de 200+ questões cobrindo os 20 tópicos do edital**: garante exposição proporcional a todos os domínios cobrados (Cloud Concepts, Core Services, Segurança, Governança, Custos, etc.), evitando pontos cegos.
- **Explicação de cada alternativa incorreta**: combate o "acerto por eliminação sem entendimento" — o aluno aprende a lógica da distração usada pela prova real.
- **Simulado com cronômetro e revisão**: replica as condições do exame (Pearson VUE/Certiport), reduzindo ansiedade por familiaridade com o formato.
- **Embaralhamento de alternativas e seleção aleatória sem repetição**: evita memorização posicional (decorar "a resposta é a letra C") e força domínio real do conceito.
- **Gamificação**: usada como reforço de curto prazo entre sessões de estudo mais formais, não como substituto do simulado — mantém o aluno voltando à plataforma.

---

## 2. Estrutura do Sistema

```
az900-platform/
├── index.html          → Shell da SPA (todas as telas, modais, navegação)
├── css/
│   └── style.css        → Design system Microsoft/Azure, tema claro/escuro, responsivo
├── js/
│   ├── questions.js      → Banco de questões (dados puros, sem lógica de UI)
│   ├── games.js          → Lógica dos 4 jogos educacionais
│   └── app.js            → Motor da aplicação: navegação, simulado, gamificação geral, persistência
└── README.md
```

Separação de responsabilidades:
- **Dados** (`questions.js`) — nenhuma lógica de UI, apenas o array `QUESTION_BANK`.
- **Regras de negócio + estado** (`app.js`) — módulo `App` (estado global, XP, níveis, conquistas), módulo `Simulado` (seleção, cronômetro, correção), módulo `Persistence` (localStorage).
- **Gamificação de jogos** (`games.js`) — módulo `Games` com um submódulo por jogo (`Crossword`, `WordSearch`, `DragDrop`, `Lightning`).
- **Interface** (`index.html` + `style.css`) — telas: Dashboard, Banco de Questões, Simulado, Jogos, Desempenho, Histórico.

---

## 3. Instalação e Execução

Não há build step nem dependências externas.

1. Baixe/copie a pasta `az900-platform/` para o seu computador.
2. Abra `index.html` diretamente no navegador **ou**, para evitar restrições de `file://` em alguns navegadores, sirva localmente:
   ```bash
   cd az900-platform
   python3 -m http.server 8080
   # acesse http://localhost:8080
   ```
3. Nenhum backend é necessário — todo o progresso (XP, histórico, ranking) é salvo no **localStorage** do navegador.
4. Para resetar o progresso: Dashboard → Configurações → "Zerar progresso" (ou limpe o localStorage do site).

---

## 4. Sugestões de Evolução Futura

- Migrar o banco de questões para JSON externo carregado via `fetch`, permitindo atualização sem tocar no código.
- Adicionar backend leve (Node/Express + banco de dados) para ranking multiusuário real.
- Exportar relatório de desempenho em PDF.
- Adicionar modo "flashcards" com repetição espaçada (algoritmo SM-2).
- Internacionalização (i18n) para inglês/espanhol.
- PWA (service worker) para uso offline completo e instalação como app.
- Testes automatizados (Jest) para a lógica de simulado e correção.
- Painel do instrutor: importar turmas, acompanhar progresso agregado dos alunos.
