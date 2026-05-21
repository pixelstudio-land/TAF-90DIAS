# 🦅 Protocolo TAF | Do Zero à Aprovação

Plataforma Web App (PWA) de alto desempenho focada no acompanhamento, retenção gamificada e controle tático de recrutas em preparação para Testes de Aptidão Física (TAF) Militares ou Civis.

---

## 🚀 O Motor do Quartel (Stack Tecnológico)

- **Frontend:** HTML5 Semântico, Vanilla JavaScript (JS ES6+), CSS3 (Variáveis dinâmicas de Tema).
- **Backend & Database:** **Supabase** (PostgreSQL, Autenticação e Storage).
- **Video Hosting:** **Panda Video** (Iframe dinâmico, anti-pirataria nativo).
- **Design System:** Glassmorphism, UI Dinâmica Responsiva, Suporte Mobile First, Modo Dual (Dark/Light).
- **PWA Ready:** Arquivos `manifest.json` e `sw.js` embutidos para instalação como App Nativo em modo Offline-First cache.

---

## ⚔️ Funcionalidades Implementadas (V1 - A Fundação)

### 1. Sistema de Engajamento Diário (Retenção)
- **Lock de Missão:** Proteção de tempo (Time-Gate) que não permite que o recruta pule os treinos para o próximo dia arbitrariamente.
- **Micro-Reward System (Dopamina):** Efeitos sonoros aleatórios e chuva de confetes virtuais ao completar cada treino.
- **Hub de Conhecimento "A Base do TAF":** Uma interface no formato "Netflix" com dezenas de aulas em vídeo sobre o mindset, planejamento tático de corrida, Módulos Fortalecimento Específicos e Enciclopédia de Mecânicas Físicas.
- **Inteligência de Treino:** Leitura em tempo real do banco de dados que une *palavras-chave* (Ex: "Prancha", "Afundo") com vídeos educativos explícitos parelados dentro das dobras do treino.

### 2. Rede Social Tática ("Guerra Dupla")
- **Feed da Tropa:** Mural global alimentado automaticamente com mensagens de vitória assim que os recrutas terminam seus exercícios no dia. Permite postagens próprias e interação com "Soco de Fogo" (curtidas).
- **Radar de Combate (Leaderboard):** Ranking Global exibindo os 50 alunos mais consistentes na batalha (ranqueados pelo número de dias de treino contínuo).
- **Upload Base64 de Avatares:** Os recrutas podem hospedar uma fotografia instantânea que é tratada e comprimida brutalmente via *canvas* local para o banco de dados.

### 3. Martelo do Mestre (Master Analytics)
- Painel bloqueado e invisível na rede social, acessível apenas por administradores mapeados em painel de controle.
- Visualização instantânea de KPI's: Contagem Total da Tropa vs Contingente Desertor (recrutas que não treinam há mais de 5 dias).
- **Moderação Total:** Botão de Exclusão global de postagens inflamatórias. Reset remoto do avatar de usuários que quebrem regras de boa conduta, sem precisar ir no painel SQL do Supabase.
- **Reset de Missão:** Botão emergencial que perdoa punições voltando o aluno ao Dia Zero caso ocorra um bug no device.
- Proteção de múltiplos aparelhos com Hash Local (Fingerprint UUID de segurança contra compartilhamento de conta).

---

## 🛠️ Checklist de Decolagem e Implementação (Go-Live)

1. **População do Banco de Dados (Supabase - Table `workouts` e `daily_content`)**
   - Garantir preenchimento dos Dias 1 a 90, cruzando as matrizes de `nivel` (Iniciante, Intermediário) e `dia`. Se o banco não for populado, o motor Frontend emitirá o aviso de "Treino não cadastrado no banco do Supabase".
2. **Setup do E-mail Master**
   - Configurar/alinhar o email específico na interface ou lógica RLS do Supabase que será concedido acesso irrestrito ao *Martelo do Mestre* (Aba Admin).
3. **Trava de Segurança SQL (RLS - Row Level Security)**
   - Exigência máxima: Ir nas configurações de Autenticação do Supabase e ligar o Block Rule garantindo que usuários comuns consigam fazer `UPDATE` apenas onde `id = auth.uid()`. Se isso for negligenciado, hackers podem usar scripts de rede no navegador para manipular rankings ou deletar a rede social.
4. **Deploy Seguro PWA**
   - Apontar domínio ou subdomínio para as *GitHub Pages*, *Netlify* ou *Vercel* garantindo emissão nativa de SSL (HTTPS), pré-requisito irremovível para que o navegador ofereça a opção "Instalar Aplicativo".

---

## 🔭 Mapa do Tesouro: Próximas Implementações (Roadmap de Escala e LTV)

Uma vez que a Operação alcançar ROAS/ROI estabilizado, a plataforma servirá como base de lançamento para:

*   **1. Sargento GPT (Bot Tático In-App)**
    *   Substituir aba estática de contato de Suporte/Zendesk por uma integração direta com OpenAI (ChatGPT). O aluno pergunta *"Como aliviar a dor na canela no TAF?"* à 03:00h e o "Sargento Virtual" ensina na hora táticas restritas baseadas inteiramente nas planilhas e scripts autorizados do Mestre Ricardo. Esvaziamento brutal de ticket de atendimento.
*   **2. Hub de Geolocalização Integrado**
    *   Monitor de progresso da Pista (Módulo Corrida) onde o Recruta autoriza permissão GPS do celular. O código puxa as APIs LeafLet/MapBox gerando o traçado percorrido validando a KM diretamente contra a instrução do treino do dia.
*   **3. Linha do Tempo Estética (Gráficos Evolutivos)**
    *   Área privada dentro do Modal de Status ('Perfil') com gráfico em "Chart.js" desenhando o aumento no tempo de sustentação na Barra/Plank somado com um visualizador de progresso lado a lado de Fotografias Frontais enviadas pelo Recruta em marcos temporais predefinidos (ex: Dia 1 vs Dia 30 vs Dia 90).
*   **4. Monetização Interna Expandida (Store)**
    *   Tornar o app o ponto principal de UPSELL. Exemplos: Recruta terminou a Missão 30, o app deflete uma Pop-Up oferecendo uma "Mentoria Turbo de Avaliação por Videoconferência com Ricardo TAF" e integração em 1 Clique com o Checkout da plataforma nativa, não tirando a tração e fluxo imersivo do quartel, convertendo leads já aquecidos.
*   **5. Sistema de Push Notifications Remotas (Batalha Mental)**
    *   Se o recruta passar 48 horas fora do app, enviar disparos Web Push alertando sua barra de tarefas: *"A tropa não te viu essa manhã, Soldado. O oponente treina enquanto você dorme. Abra o Quartel para sua Missão de hoje."* Alavanca infalível contra o cancelamento mensal.
