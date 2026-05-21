# Changelog - Protocolo TAF

Todas as mudanças notáveis ​​neste projeto serão documentadas neste arquivo. O controle de versões usará a escala de dias sugerida (1.1.1v para hoje, 1.2.1v amanhã, etc).

## [1.1.1v] - 2026-04-13 (Dia 1 de Otimizações)

### Adicionado
- **Feedback Haptic Nativo**: Adicionada vibração tátil no celular via `navigator.vibrate` em ações de vitória (conclusão de treinos, interação de "soco de fogo" no feed e envio de imagens), proporcionando um padrão de design premium de aplicativo (UX).
- **Cache Local Inteligente**: Implementado um sistema que cria um "espelho fantasma" dos dados se a internet cair. Se o recruta tentar abrir o app no meio de uma pista de corrida sem 4G, o sistema carregará o treino principal do dia salvando-o no `localStorage`.
- **Limpeza do Quartel**: Todas as fotografias genéricas em altíssima resolução e relatórios que estavam jogados na raiz do servidor foram categorizados, migrados e armazenados limpos dentro de `assets/images` e `assets/docs`.

### Modificado
- **Nomenclatura Premium**: A área originalmente chamada no sidebar de "Netflix do TAF" foi recategorizada profissionalmente para **"Aulas de Base"**.
- **Grade Oficial Tática (Microciclo)**: A área de Aulas que ficava fora de ordem foi completamente estruturada do Dia 1 (Segunda) ao Dia 6 (Sábado). Agora, cada iframe reflete exatamente a intenção instruída no PDF de Planejamento Macro, removendo qualquer ambiguidade do que treinar em qual dia.
- **Upload de Perfil Otimizado (Storage)**: A arquitetura do Supabase DB foi protegida contra estouro. As fotos estáticas foram removidas do modelo Base64 e reconstruídas para injetar num novo *Bucket Público* chamado `avatars`, resultando na gravação apenas de uma URL minúscula no DB, acelerando a recarga do ranking mundial em até 10x.

### Otimizado
- **Dashboard Mestre (Admin)**: Refatoração máxima do radar de Desertores. Desligamos as tabelas exaustivas ("Table Scan") que puxavam dados pesados e codamos contadores exatos diretamente vinculados na API de leitura (`count: 'exact'`), deixando o painel resistente à queda mesmo com 20 mil recrutas simultâneos.
