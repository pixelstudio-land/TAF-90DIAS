/* =========================================
   1. CREDENCIAIS SUPABASE
   ========================================= */
const SUPABASE_URL = 'https://qqlljfoqtlqoxzppmvqx.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxbGxqZm9xdGxxb3h6cHBtdnF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4MDc1NDIsImV4cCI6MjA5MDM4MzU0Mn0.IG9O1wCJh07fwUANKaJCmsBV1naRLkQ--0a9axBWU_U';

const supabaseClient = (SUPABASE_URL !== 'COLE_A_SUA_URL_DO_PROJECT_AQUI') 
    ? supabase.createClient(SUPABASE_URL, SUPABASE_KEY) 
    : null;

/* =========================================
   2. DADOS TÉCNICOS & VÍDEOS (PANDA VIDEO)
   ========================================= */
const EXERCISE_GUIDE = {
    "Stiff": { desc: "Pés na largura dos ombros. Flexione levemente os joelhos e desça o tronco reto empurrando o quadril para trás. Sinta a posterior da coxa.", panda_url: "https://player-vz-7bedc2f5-98b.tv.pandavideo.com.br/embed/?v=ecfe5e0e-c33f-48f9-96b2-d43ad2c697ef" },
    "Respiração": { desc: "Exercício Técnico: aplique as táticas de respiração bilateral para melhorar a oxigenação sistêmica nas provas longas.", panda_url: "https://player-vz-7bedc2f5-98b.tv.pandavideo.com.br/embed/?v=3f1445e8-646f-4b59-8f52-25cd6453d698" },
    "Prancha": { desc: "Apoie os antebraços e as pontas dos pés no chão. Mantenha o corpo reto como uma tábua, contraindo forte o abdômen e glúteos.", panda_url: "https://player-vz-7bedc2f5-98b.tv.pandavideo.com.br/embed/?v=0f1f214e-a4a8-475a-ad88-152757559bc0" },
    "Ponte": { desc: "Deitado, joelhos dobrados, pés fixos no chão. Eleve o quadril acionando glúteos e abdômen até formar uma linha reta.", panda_url: "https://player-vz-7bedc2f5-98b.tv.pandavideo.com.br/embed/?v=ad6d3467-30e4-46a5-ac31-cd723205dd7e" },
    "Dead Bug": { desc: "Deitado com as costas planas no chão. Estique braço e perna opostos lentamente sem tirar a lombar do chão. O abdômen deve ficar blindado.", panda_url: "https://player-vz-7bedc2f5-98b.tv.pandavideo.com.br/embed/?v=8d39c7e4-3a21-452d-a834-c68333c3bc9f" },
    "Afundo": { desc: "Mantenha o tronco ereto, abdômen contraído. Dê o passo e afunde até o joelho de trás quase tocar no chão.", panda_url: "https://player-vz-7bedc2f5-98b.tv.pandavideo.com.br/embed/?v=021e5428-9295-4374-a295-ec44bee084c7" },
    "Flexão": { desc: "Mãos alinhadas com os ombros. Corpo em prancha total. Desça o peito o mais próximo possível do chão.", panda_url: "https://player-vz-7bedc2f5-98b.tv.pandavideo.com.br/embed/?v=b7dd4c41-61e7-413d-b0e6-0200b6206cc2" },
    "Barra": { desc: "Pegada pronada. Inicie 100% estendido. Suba até as clavículas encostarem ou o queixo passar da barra.", panda_url: "https://player-vz-7bedc2f5-98b.tv.pandavideo.com.br/embed/?v=5efde728-906e-4e7a-be24-e46fea6b4b41" },
    "Abdominal": { desc: "Estilo Remador. Deitado, corpo reto. Suba flexionando joelhos e tronco ao mesmo tempo.", panda_url: "https://player-vz-7bedc2f5-98b.tv.pandavideo.com.br/embed/?v=b0b4d111-3e3f-45da-a471-61b4acb464a5" },
    "Abs": { desc: "Estilo Remador. Deitado, corpo reto. Suba flexionando joelhos e tronco ao mesmo tempo.", panda_url: "https://player-vz-7bedc2f5-98b.tv.pandavideo.com.br/embed/?v=b0b4d111-3e3f-45da-a471-61b4acb464a5" },
    "Corrida": { desc: "Tronco ereto, ombros relaxados. Concentre na passada constante.", panda_url: "" },
    "Agachamento": { desc: "Pés na largura dos ombros. Peso no calcanhar. Desça 90 graus.", panda_url: "https://player-vz-7bedc2f5-98b.tv.pandavideo.com.br/embed/?v=dd754e0e-3151-4f08-ad0f-ef45708539fd" },
    "Burpee": { desc: "Modo Tático Militar. Deite com o peito no chão por completo. Subida com salto.", panda_url: "" },
    "Natação": { desc: "Foco na braçada técnica (crawl). Finalize todo o movimento puxando a água.", panda_url: "" },
    "Isometria": { desc: "Sustentação estática na barra. Mantenha o queixo acima da linha da barra pelo máximo de tempo travando o core.", panda_url: "https://player-vz-7bedc2f5-98b.tv.pandavideo.com.br/embed/?v=19466e14-9e48-4358-b892-e2d1b4b03373" },
    "Remada": { desc: "Remada Curvada com tração forte. Incline o tronco com joelhos levemente flexionados, puxe a carga rumo ao umbigo.", panda_url: "https://player-vz-7bedc2f5-98b.tv.pandavideo.com.br/embed/?v=612b180a-f324-413e-8568-3cbdab82b08a" },
    "Supino": { desc: "Mecânica de empurre peitoral. Contração abdominal e base firme com os pés, estabilizando os ombros.", panda_url: "https://player-vz-7bedc2f5-98b.tv.pandavideo.com.br/embed/?v=ecd99f54-a1fe-4cdf-a1fb-bd7a43c13590" }
};

const QUOTES = [
    "A disciplina é a distância entre o que você tem e o que você quer.",
    "Sob pressão, você não se eleva à ocasião, você afunda até o nível do seu treinamento.",
    "A dor é a fraqueza saindo do corpo."
];

/* =========================================
   SISTEMA PRINCIPAL DO APP
   ========================================= */
const app = {
    userId: null,
    data: { nivel: null, dia_atual: 1, ultimo_treino: null, nome: 'Guerreiro', role: 'user' },
    cachedWorkout: null,

    vibrate: function(pattern) { if('vibrate' in navigator) navigator.vibrate(pattern); },

    init: async function() {
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme === 'light') { document.documentElement.setAttribute('data-theme', 'light'); }
        
        if (!supabaseClient) return this.handleUIMock();

        const { data: { session } } = await supabaseClient.auth.getSession();
        
        if (session) {
            this.userId = session.user.id;
            const profileLoad = await this.loadSupabaseProfile();
            
            if (profileLoad) {
                // FORÇA HIERARQUIA ADMINISTRATIVA PELO EMAIL DO MESTRE (Fallback de Emergência)
                if (session.user.email === 'mestrericardo@taf90.com.br' && this.data.role !== 'admin') {
                    await supabaseClient.from('profiles').update({role: 'admin'}).eq('id', this.userId);
                    this.data.role = 'admin';
                }

                // SISTEMA DE FINGERPRINT (Sistema de bloqueio de dispositivo pausado para evitar falsos positivos)
                /* if (this.data.role !== 'admin') {
                    let fp = localStorage.getItem('taf_device_token');
                    if (!fp) { fp = crypto.randomUUID(); localStorage.setItem('taf_device_token', fp); }
                    
                    if (!this.data.device_id) {
                        await supabaseClient.from('profiles').update({device_id: fp}).eq('id', this.userId);
                    } else if (this.data.device_id !== fp) {
                        alert("🚫 ACESSO RECUSADO: Esta conta militar já está vinculada a outro dispositivo. O acesso paralelo não é permitido. Peça liberação ao Suporte.");
                        await supabaseClient.auth.signOut();
                        localStorage.clear();
                        return location.reload();
                    }
                } */

                // ROTEAMENTO DE CARGOS
                if (this.data.role === 'admin') {
                    this.showScreen('screen-admin');
                    this.adminSearchUsers(); // Carrega alunos ao abrir
                } else if (this.data.nivel) {
                    await this.updateUI();  // CARREGA TREINOS DO BANCO
                    this.checkDailyLock();
                    this.showScreen('screen-dashboard');
                } else {
                    this.showScreen('screen-onboarding');
                }
            } else {
                this.showScreen('screen-onboarding');
            }
        } else {
            this.showScreen('screen-login');
        }
        this.updateQuote();
    },

    showScreen: (id) => {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        window.scrollTo(0, 0);
    },

    // --- AUTENTICAÇÃO COM SUPABASE ---
    login: async function() {
        if(!supabaseClient) return alert("Modo Offline Demo.");
        const email = document.getElementById('login-email').value.trim();
        const pass = document.getElementById('login-pass').value.trim();
        const btn = document.querySelector('#screen-login .btn-primary');
        const oText = btn.innerHTML;

        if(!email || !pass) return alert('⚠️ Insira o e-mail de compra e a senha.');
        btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> AUTENTICANDO TROPAS...'; btn.disabled = true;

        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password: pass });

        if (error) {
            alert('🚫 Acesso Negado: E-mail não encontrado ou credenciais incorretas.');
            btn.innerHTML = oText; btn.disabled = false;
        } else {
            location.reload(); 
        }
    },

    logout: async function() { 
        if(confirm("Deseja desconectar sua conta deste dispositivo?")) { 
            if(supabaseClient) await supabaseClient.auth.signOut();
            else localStorage.clear();
            location.reload(); 
        } 
    },

    // --- DB SYNC (PROFILES) ---
    loadSupabaseProfile: async function() {
        const { data, error } = await supabaseClient.from('profiles').select('*').eq('id', this.userId).single();
        if(error || !data) return false;
        this.data.nivel = data.nivel;
        this.data.dia_atual = data.dia_atual || 1;
        this.data.ultimo_treino = data.ultimo_treino;
        this.data.nome = data.nome || 'Guerreiro';
        this.data.role = data.role || 'user';
        this.data.device_id = data.device_id || null;
        this.data.avatar_url = data.avatar_url || null;
        
        return true;
    },

    saveSupabaseData: async function(atualizaData = false) {
        if(!supabaseClient || !this.userId) return;
        let updatePack = { nivel: this.data.nivel, dia_atual: this.data.dia_atual };
        if (atualizaData) {
            const today = new Date().toISOString().split('T')[0];
            updatePack.ultimo_treino = today;
            this.data.ultimo_treino = today;
        }
        await supabaseClient.from('profiles').update(updatePack).eq('id', this.userId);
    },

    /* --- ONBOARDING ENGINE --- */
    processOnboarding: async function() {
        const run = parseFloat(document.getElementById('test-run').value);
        const push = parseInt(document.getElementById('test-pushups').value);
        const abs = parseInt(document.getElementById('test-abs').value);
        if(!run) return;

        let n = 'INICIANTE'; 
        if (push > 35 && abs > 45 && run <= 4.5) n = 'AVANCADO';
        else if (push >= 20 && abs >= 30 && run <= 6.5) n = 'INTERMEDIARIO';

        this.data.nivel = n;
        this.data.dia_atual = 1;
        await this.saveSupabaseData(false);
        location.reload();
    },

    // --- LÓGICA DE DIA DA MISSÃO ---
    getTreinoDoDia: function() {
        const diaNoCiclo = (this.data.dia_atual - 1) % 7 + 1; 
        if (diaNoCiclo === 7) return 'descanso';
        return diaNoCiclo;
    },

    updateUI: async function() {
        // Gamificação Militar Dinâmica (As Patentes)
        const d = this.data.dia_atual;
        let p = 'RECRUTA', bColor = 'var(--text-muted)';
        if(d>=76) {p='COMANDANTE'; bColor='var(--danger)';}
        else if(d>=46) {p='SARGENTO'; bColor='var(--primary)';}
        else if(d>=22) {p='CABO'; bColor='var(--success)';}
        else if(d>=8) {p='SOLDADO'; bColor='var(--secondary)';}
        
        const rB = document.getElementById('user-rank');
        rB.innerText = p; rB.style.color = bColor; rB.style.border = `1px solid ${bColor}`; rB.style.background = 'rgba(255,255,255,0.05)';

        // Sistema de Fogos
        let fire = this.data.ultimo_treino ? '🔥' : ''; // Mock simples pra hj. Futuramente calc real.
        document.getElementById('user-level-display').innerHTML = this.data.nome.split(' ')[0].toUpperCase() + ' <span title="Fogo de Sequência" style="font-size:14px;">' + fire + '</span>'; 
        
        // Identidade Avatar
        const bA = this.data.avatar_url || `https://ui-avatars.com/api/?name=${this.data.nome.split(' ')[0]}&background=3b82f6&color=fff`;
        document.getElementById('header-avatar').style.backgroundImage = `url('${bA}')`;
        document.getElementById('profile-avatar-preview').style.backgroundImage = `url('${bA}')`;
        document.getElementById('profile-nome').value = this.data.nome || '';

        document.getElementById('progress-text').innerText = `DIA ${this.data.dia_atual} DE 90`;
        const percent = Math.min(((this.data.dia_atual / 90) * 100), 100).toFixed(1);
        document.getElementById('global-progress').style.width = `${percent}%`;

        const diaTreino = this.getTreinoDoDia();
        const tEl = document.getElementById('today-workout-title');
        const dEl = document.getElementById('today-workout-desc');

        if (diaTreino === 'descanso') { 
            tEl.innerText = "RECUPERAÇÃO"; 
            dEl.innerHTML = '<i class="fa-solid fa-bed"></i> Domingo de Descanso (Sem Treino Físico)'; 
            this.cachedWorkout = null;
        } else {
            let treinoData = null;
            try {
                // LEITURA DO TREINO DIRETO DO SUPABASE COM OFFLINE MIRROR
                const { data, error } = await supabaseClient.from('workouts')
                    .select('*').eq('nivel', this.data.nivel).eq('dia', diaTreino).single();

                if (data) {
                    treinoData = data;
                    localStorage.setItem(`offline_wk_${this.data.nivel}_${diaTreino}`, JSON.stringify(data));
                }
            } catch (err) {}

            if (!treinoData) {
                let off = localStorage.getItem(`offline_wk_${this.data.nivel}_${diaTreino}`);
                if (off) treinoData = JSON.parse(off);
            }

            if (treinoData) {
                tEl.innerText = treinoData.titulo || "MISSÃO SEM TÍTULO"; 
                dEl.innerHTML = '<i class="fa-solid fa-crosshairs"></i> Foco da Missão: ' + (treinoData.foco || "Geral");
                this.cachedWorkout = treinoData;
            } else {
                tEl.innerText = "DADO NÃO ENCONTRADO (CAIU REDE?)";
                dEl.innerHTML = "O Mestre ainda não publicou ou sua conexão caiu (sincronize para baixar o Cache).";
            }
        }
    },

    checkDailyLock: function() {
        const hoje = new Date().toISOString().split('T')[0];
        const btn = document.querySelector('.mission-card');
        const status = document.querySelector('.mission-status');
        const label = document.querySelector('.mission-label');
        const compleBtn = document.getElementById('btn-complete-mission');

        if (this.data.ultimo_treino === hoje) {
            btn.style.opacity = "0.7"; 
            btn.style.background = "linear-gradient(145deg, rgba(8, 25, 15, 0.9) 0%, rgba(5, 15, 10, 0.95) 100%)";
            btn.style.borderLeftColor = "var(--success)";
            status.style.background = "var(--success)"; 
            status.style.boxShadow = "none";
            status.classList.remove('pulse');
            label.innerText = "MISSÃO CONCLUÍDA ✔";
            label.style.color = "var(--success)";
            document.getElementById('today-workout-desc').innerHTML = "Bom trabalho. Volte amanhã para liberar o próximo ciclo.";
            if(compleBtn) compleBtn.style.display = "none";
        } else {
            btn.style.opacity = "1";
            btn.style.borderLeftColor = "var(--danger)";
            status.style.background = "var(--danger)";
            status.classList.add('pulse');
            label.innerText = "ORDEM DO DIA PENDENTE";
            label.style.color = "var(--danger)";
            if(compleBtn) compleBtn.style.display = "flex";
        }
    },

    // --- RENDERIZAÇÃO TREINO E PANDA VIDEO ---
    openWorkout: async function() {
        const tipo = this.getTreinoDoDia();
        const btnConfirm = document.getElementById('btn-complete-mission');
        
        const hoje = new Date().toISOString().split('T')[0];
        if (this.data.ultimo_treino === hoje) btnConfirm.style.display = "none";
        else btnConfirm.style.display = "flex";

        if (tipo === 'descanso') return alert("Sua missão de hoje é se recuperar! Foque na Hidratação.");
        
        // Pega o treino do banco ou cacheado (Local ou Remoto)
        let treino = this.cachedWorkout;
        if (!treino) {
            try {
                const { data } = await supabaseClient.from('workouts')
                   .select('*').eq('nivel', this.data.nivel).eq('dia', tipo).single();
                treino = data;
                if(treino) localStorage.setItem(`offline_wk_${this.data.nivel}_${tipo}`, JSON.stringify(treino));
            } catch(err) {}

            if(!treino) {
                let off = localStorage.getItem(`offline_wk_${this.data.nivel}_${tipo}`);
                if(off) treino = JSON.parse(off);
            }
        }

        if (!treino) return alert("Erro crítico: Treino não cadastrado no banco do Supabase, e sem Cópia Offline.");
        
        const aquecimentos = Array.isArray(treino.aquecimento) ? treino.aquecimento : [];
        const principais = Array.isArray(treino.principal) ? treino.principal : [];

        let warmupHtml = '';
        aquecimentos.forEach(f => {
            if (typeof f === 'string') {
                warmupHtml += `<li><i class="fa-solid fa-angles-right"></i> ${f}</li>`;
            } else if (f.titulo) {
                warmupHtml += `<li style="margin-top: 10px; margin-bottom: 5px;"><strong style="color:var(--primary)"><i class="fa-solid fa-clock"></i> ${f.titulo}</strong></li>`;
                if(Array.isArray(f.exercicios)) {
                    f.exercicios.forEach(ex => {
                        warmupHtml += `<li><i class="fa-solid fa-circle-check" style="color:var(--success); font-size:10px; margin-right:5px;"></i> ${ex}</li>`;
                    });
                }
            }
        });
        document.getElementById('warmup-list').innerHTML = warmupHtml;
        
        document.getElementById('main-list-container').innerHTML = principais.map(ex => {
            const nomeBase = ex.split(':')[0].trim();
            let matchKey = Object.keys(EXERCISE_GUIDE).find(k => nomeBase.toLowerCase().includes(k.toLowerCase()));
            let desc = matchKey ? EXERCISE_GUIDE[matchKey].desc : "Execute o gesto técnico com amplitude total e intensidade máxima.";
            let videoCode = '';
            
            if (matchKey && EXERCISE_GUIDE[matchKey].panda_url) {
                videoCode = `<div class="video-container horizontal" style="display:block;">
                    <iframe src="${EXERCISE_GUIDE[matchKey].panda_url}" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen></iframe>
                </div>`;
            }

            return `<details class="exercise-detail">
                <summary><span><i class="fa-solid fa-dumbbell" style="margin-right:8px"></i> ${ex}</span> <i class="fa-solid fa-chevron-down toggle-icon"></i></summary>
                <div class="technique-box">
                    <p class="technique-desc"><i class="fa-solid fa-lightbulb" style="color:#00D0FF"></i> ${desc}</p>
                    ${videoCode}
                </div>
            </details>`;
        }).join('');
        
        document.getElementById('modal-title').innerText = `DIA ${this.data.dia_atual}`;
        this.resetWarmupTimer();
        this.openModal('modal-workout');
    },

    warmupState: { timer: null, seconds: 600, isPlaying: false },

    formatTime: function(secs) {
        const m = Math.floor(secs / 60).toString().padStart(2, '0');
        const s = (secs % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    },

    toggleWarmupTimer: function() {
        if (this.warmupState.isPlaying) {
            clearInterval(this.warmupState.timer);
            this.warmupState.isPlaying = false;
            document.getElementById('btn-timer-play').innerHTML = '<i class="fa-solid fa-play"></i> INICIAR';
        } else {
            this.warmupState.isPlaying = true;
            document.getElementById('btn-timer-play').innerHTML = '<i class="fa-solid fa-pause"></i> PAUSAR';
            this.warmupState.timer = setInterval(() => {
                if (this.warmupState.seconds > 0) {
                    this.warmupState.seconds--;
                    document.getElementById('warmup-clock').innerText = this.formatTime(this.warmupState.seconds);
                } else {
                    clearInterval(this.warmupState.timer);
                    this.warmupState.isPlaying = false;
                    document.getElementById('btn-timer-play').innerHTML = '<i class="fa-solid fa-play"></i> INICIAR';
                    this.vibrate([200, 100, 200, 100, 500]); // Alerta de fim nativo se suportado
                }
            }, 1000);
        }
    },

    resetWarmupTimer: function() {
        clearInterval(this.warmupState.timer);
        this.warmupState.isPlaying = false;
        this.warmupState.seconds = 600;
        document.getElementById('warmup-clock').innerText = "10:00";
        document.getElementById('btn-timer-play').innerHTML = '<i class="fa-solid fa-play"></i> INICIAR';
    },

    completeMission: async function() {
        const btn = document.getElementById('btn-complete-mission');
        const oText = btn.innerHTML;
        
        if(confirm("Tem absoluta certeza de que não roubou repetições e entregou tudo de si?")) {
            this.vibrate([100, 50, 100]); // Haptic premium na conquista
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> SALVANDO NO SERVIDOR...'; btn.disabled = true;

            try {
                this.data.dia_atual = parseInt(this.data.dia_atual) + 1;
                await this.saveSupabaseData(true); 

                try {
                    await supabaseClient.from('feed_posts').insert([{
                        user_id: this.userId,
                        conteudo: `O Recruta encerrou sua missão e marchou para o Dia ${this.data.dia_atual - 1}. Honra!`,
                        tipo: 'missao_concluida',
                        user_name: this.data.nome.split(' ')[0],
                        user_avatar: this.data.avatar_url || ''
                    }]);
                } catch(e) {}
                
                const dopaAudios = [
                    'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3', 
                    'https://assets.mixkit.co/active_storage/sfx/2012/2012-preview.mp3', 
                    'https://assets.mixkit.co/active_storage/sfx/1042/1042-preview.mp3'  
                ];
                const vAudio = new Audio(dopaAudios[Math.floor(Math.random() * dopaAudios.length)]);
                vAudio.volume = 0.6; vAudio.play().catch(e => {}); 

                if (typeof confetti === 'function') {
                    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, colors: ['#3b82f6', '#10b981', '#f59e0b', '#ffffff'], zIndex: 9999 });
                }

                this.closeModal('modal-workout');
                btn.innerHTML = oText; btn.disabled = false;
                
                await this.updateUI(); 
                this.checkDailyLock();
            } catch(e) {
                alert("Erro ao salvar no banco.");
                btn.innerHTML = oText; btn.disabled = false;
            }
        }
    },

    openModal: (id) => document.getElementById(id).classList.add('active'),
    closeModal: (id) => {
        document.getElementById(id).classList.remove('active');
        const videos = document.getElementById(id).querySelectorAll('iframe');
        videos.forEach(i => i.src = i.src);
    },
    
    toggleTheme: function() {
        if(document.documentElement.getAttribute('data-theme') === 'light') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    },
    
    undoMission: async function() {
        const hoje = new Date().toISOString().split('T')[0];
        if (this.data.ultimo_treino !== hoje) return alert("Proteção de Integridade: Você só pode desfazer uma missão que foi acidentalmente concluída na data de HOJE!");
        
        if(confirm("Tem certeza de que bateu no botão sem querer? Seu histórico diário será recuado para PENDENTE no Banco de Dados.")) { 
            const btn = document.getElementById('btn-complete-mission');
            if(btn) { btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> DESFAZENDO...'; btn.disabled = true; }
            
            this.data.dia_atual = Math.max(1, parseInt(this.data.dia_atual) - 1);
            this.data.ultimo_treino = null; 
            
            await supabaseClient.from('profiles').update({
                dia_atual: this.data.dia_atual,
                ultimo_treino: null
            }).eq('id', this.userId);
            
            this.closeModal('modal-workout');
            if(btn) { btn.innerHTML = '<i class="fa-solid fa-check-double"></i> FINALIZAR TREINO DO DIA'; btn.disabled = false; }
            
            await this.updateUI(); 
            this.checkDailyLock();
        } 
    },
    
    updateQuote: async function() { 
        if(!supabaseClient) {
            document.getElementById('daily-quote').innerText = `"${QUOTES[Math.floor(Math.random()*QUOTES.length)]}"`; 
            return;
        }
        
        const { data, error } = await supabaseClient.from('daily_content').select('*').eq('dia', this.data.dia_atual).single();
        if (data && data.mindset_texto) {
            document.getElementById('daily-quote').innerText = `"${data.mindset_texto}"`;
        } else {
            // Fallback se o Ricardo ainda não cadastrou o mindset para este dia
            document.getElementById('daily-quote').innerText = `"${QUOTES[Math.floor(Math.random()*QUOTES.length)]}"`; 
        }
    },
    
    triggerConfetti: function() {
        var end = Date.now() + (1200); var colors = ['#0088ff', '#00D0FF', '#ffffff'];
        (function frame() {
            confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: colors });
            confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: colors });
            if (Date.now() < end) requestAnimationFrame(frame);
        }());
    },

    calculateScore: function() {
        const flex = parseInt(document.getElementById('calc-flex').value) || 0;
        const abs = parseInt(document.getElementById('calc-abs').value) || 0;
        const run = parseFloat(document.getElementById('calc-run').value) || 15.0;
        let pts = 0;

        if(flex >= 25) pts += 50 + ((flex-25)*2); else pts = flex*2;
        if(abs >= 30) pts += 50 + ((abs-30)*2); else pts = abs*1.5;
        let rs = run*60, bs=12.5*60;
        if(rs<=bs) pts += 50 + (Math.floor((bs-rs)/30)*5); else pts += Math.max(0, 50-((rs-bs)/10));

        const res = document.getElementById('calc-result'); res.style.display = 'block';
        document.getElementById('score-text').innerText = Math.floor(pts) + " PONTOS";
        const status = document.getElementById('score-status');
        if(pts >= 250) { status.innerText = "TAF APROVADO"; status.style.color = "var(--success)"; res.classList.remove('failed'); res.style.borderColor = "rgba(16, 185, 129, 0.4)"; } 
        else { status.innerText = "REPROVADO NA PISTA"; status.style.color = "var(--danger)"; res.classList.add('failed'); res.style.borderColor = "rgba(239, 68, 68, 0.4)"; }
    },

    /* --- SISTEMA MASTER ADMIN & ANALYTICS --- */
    adminLoadMetrics: async function() {
        const calcDaysAgo = (d) => new Date(new Date().getTime() - (d * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];
        const doisDiasAtras = calcDaysAgo(2);
        const seteDiasAtras = calcDaysAgo(5); // Desertor >= 5 dias
        
        // 1. Total (Otimizado via RPC nativo)
        const { count: tCount } = await supabaseClient.from('profiles').select('id', { count: 'exact', head: true });
        document.getElementById('metric-total').innerText = tCount || 0;
        
        // 2. Ativos (Otimizado via GTE nativo)
        const { count: aCount } = await supabaseClient.from('profiles').select('id', { count: 'exact', head: true }).gte('ultimo_treino', doisDiasAtras);
        document.getElementById('metric-ativos').innerText = aCount || 0;
        
        // 3. Desertores e Evasão (Otimizado: Busca apenas os desertores para o Remarketing)
        const { data: desertores } = await supabaseClient.from('profiles')
             .select('email, dia_atual, telefone')
             .lte('ultimo_treino', seteDiasAtras)
             .lt('dia_atual', 90);
             
        document.getElementById('metric-evasao').innerText = desertores ? desertores.length : 0;

        const remContainer = document.getElementById('admin-remarketing-list');
        if (!desertores || desertores.length === 0) {
            remContainer.innerHTML = '<p style="color:var(--success); font-size:12px;"><i class="fa-solid fa-check"></i> Nenhum desertor abandonou o método recentemente!</p>';
        } else {
            // Em cenários reais onde exista a coluna telefone
            remContainer.innerHTML = desertores.map(d => {
                const zapLink = d.telefone ? `https://wa.me/55${d.telefone.replace(/\D/g, '')}?text=Fala%20guerreiro(a)!%20Notei%20que%20você%20parou%20no%20Dia%20${d.dia_atual}.%20O%20que%20houve?` : `https://wa.me/5511976239181`;
                return `
                <div class="admin-user-card" style="border-left: 3px solid var(--danger); justify-content:space-between;">
                    <div class="info">
                        <strong>${d.email}</strong>
                        <p style="color:var(--danger)">Congelado no Dia ${d.dia_atual}</p>
                    </div>
                    <a href="${zapLink}" target="_blank" style="background:#25D366; color:#000; font-weight:bold; padding:8px 12px; border-radius:6px; font-size:11px; text-decoration:none;"><i class="fa-brands fa-whatsapp"></i> RESGATAR</a>
                </div>`;
            }).join('');
        }
    },

    adminSearchUsers: async function(forceSearch = null) {
        this.adminLoadMetrics(); // Dispara o robo de inteligência
        let buscaEmail = forceSearch || document.getElementById('admin-search')?.value.trim() || '';
        let query = supabaseClient.from('profiles').select('id, email, nivel, dia_atual, device_id').order('created_at', { ascending: false });
        
        if (buscaEmail) query = query.ilike('email', `%${buscaEmail}%`);
        
        const { data, error } = await query.limit(10);
        const container = document.getElementById('admin-user-list');
        
        if (error || !data) { container.innerHTML = `<p style="color:var(--danger)">Erro ao buscar banco. ${error?.message || ''}</p>`; return; }
        
        if (data.length === 0) { container.innerHTML = `<p style="color:#666">Nenhum recruta encontrado.</p>`; return; }

        container.innerHTML = data.map(u => `
            <div class="admin-user-card">
                <div class="info" style="flex:1;">
                    <strong>${u.email}</strong>
                    <p>Nível: ${u.nivel || 'N/A'} - <span style="color:var(--primary)">Dia ${u.dia_atual}</span></p>
                    <p style="font-size:10px; color:${u.device_id ? '#555' : 'var(--success)'}">${u.device_id ? 'Aparelho Registrado 🔒' : 'Livre para novo Login ✅'}</p>
                </div>
                <div style="display:flex; flex-direction:column; gap:8px;">
                    <button style="background:var(--primary);" onclick="app.adminEditUser('${u.id}', '${u.nivel||'INICIANTE'}', ${u.dia_atual||1})">Editar Ficha</button>
                    ${u.device_id ? `<button onclick="app.adminClearDevice('${u.id}')">Resetar Device</button>` : ''}
                </div>
            </div>
        `).join('');
    },

    adminEditUser: function(id, nivel, dia) {
        document.getElementById('edit-user-id').value = id;
        document.getElementById('edit-user-dia').value = dia;
        document.getElementById('edit-user-nivel').value = nivel;
        this.openModal('modal-edit-user');
    },

    adminSaveUser: async function() {
        const id = document.getElementById('edit-user-id').value;
        const dia = parseInt(document.getElementById('edit-user-dia').value);
        const niv = document.getElementById('edit-user-nivel').value;
        
        const btn = document.querySelector('#modal-edit-user .btn-primary');
        btn.innerHTML = 'SALVANDO...'; btn.disabled = true;

        const { error } = await supabaseClient.from('profiles').update({ dia_atual: dia, nivel: niv }).eq('id', id);
        
        if(error) {
            alert('Erro RLS! Você rodou o Código SQL da Fase 3 de UPDATE Policy?');
            btn.innerHTML = 'SALVAR FICHA'; btn.disabled = false;
        } else {
            alert('Ficha do recruta atualizada com sucesso!');
            btn.innerHTML = 'SALVAR FICHA'; btn.disabled = false;
            this.closeModal('modal-edit-user');
            this.adminSearchUsers();
        }
    },

    adminClearDevice: async function(uuid) {
        if(confirm("Liberar o acesso para o aluno logar em um novo aparelho?")) {
            await supabaseClient.from('profiles').update({device_id: null}).eq('id', uuid);
            this.adminSearchUsers(); 
            alert("Aparelho desvinculado. O recruta pode acessar do novo celular agora!");
        }
    },
    
    adminClearAvatar: async function() {
        const userIdMod = document.getElementById('edit-user-id').value;
        if(!userIdMod) return;
        if(confirm("ATENÇÃO: Mestre, tem certeza que deseja APAGAR a foto de perfil criminosa deste recruta?")) {
            const { error } = await supabaseClient.from('profiles').update({ avatar_url: null }).eq('id', userIdMod);
            if(!error) alert("Operação Fantasma Concluída. A foto sumiu do radar dele.");
            else alert("Erro ao apagar imagem.");
        }
    },

    // --- EDITOR DE DOUTRINA (TREINOS) ---
    adminLoadWorkout: async function() {
        const nivel = document.getElementById('edit-wk-search-nivel').value;
        const dia = parseInt(document.getElementById('edit-wk-search-dia').value);
        
        if(!dia) return alert("Digite o Dia do treino que quer buscar (ex: 1, 2, 3..)");
        
        const { data, error } = await supabaseClient.from('workouts')
            .select('*').eq('nivel', nivel).eq('dia', dia).single();
            
        if (error || !data) return alert("Treino não encontrado neste Nível e Dia. O Banco está vazio neste slot.");
        
        const editor = document.getElementById('admin-workout-editor');
        editor.style.display = 'flex';
        
        document.getElementById('edit-wk-id').value = data.id;
        document.getElementById('edit-wk-titulo').value = data.titulo || "";
        document.getElementById('edit-wk-foco').value = data.foco || "";
        
        // Transforma o Array JSON em texto com quebras de linha p/ facilitar
        let wTxt = '';
        if (Array.isArray(data.aquecimento)) {
            if (data.aquecimento.length > 0 && typeof data.aquecimento[0] === 'object') {
                wTxt = JSON.stringify(data.aquecimento, null, 2);
            } else {
                wTxt = data.aquecimento.join('\n');
            }
        }
        const mTxt = Array.isArray(data.principal) ? data.principal.join('\n') : '';
        
        document.getElementById('edit-wk-warmup').value = wTxt;
        document.getElementById('edit-wk-main').value = mTxt;
    },
    
    adminSaveWorkout: async function() {
        const id = document.getElementById('edit-wk-id').value;
        const titulo = document.getElementById('edit-wk-titulo').value.trim();
        const foco = document.getElementById('edit-wk-foco').value.trim();
        
        // Separa as linhas do textarea em Arrays limpinhos ou ignora parsing se for JSON
        let rawWarmup = document.getElementById('edit-wk-warmup').value.trim();
        let warmupArr;
        try { warmupArr = JSON.parse(rawWarmup); }
        catch (e) { warmupArr = rawWarmup.split('\n').map(t => t.trim()).filter(t => t.length > 0); }
        let mainArr = document.getElementById('edit-wk-main').value.split('\n').map(t => t.trim()).filter(t => t.length > 0);
        
        if(!id) return;
        if(confirm("Deseja substituir a versão oficial deste treino na Nuvem por estas novas modificações? Todos os alunos do aplicativo lerão o novo treino.")) {
            const { error } = await supabaseClient.from('workouts').update({
                titulo: titulo,
                foco: foco,
                aquecimento: warmupArr,
                principal: mainArr
            }).eq('id', id);
            
            if (error) alert("Erro RLS: Seu Perfil de Segurança negou a escrita na tabela 'workouts'.");
            else alert("Treino Atualizado na Nuvem! ✅");
        }
    },

    // --- EDITOR DE CONTEÚDO (MINDSET E NUTRIÇÃO) ---
    adminLoadContent: async function() {
        const dia = parseInt(document.getElementById('edit-cnt-search-dia').value);
        if(!dia) return alert("Digite qual Dia deseja editar.");

        document.getElementById('admin-content-editor').style.display = 'flex';
        const { data, error } = await supabaseClient.from('daily_content').select('*').eq('dia', dia).single();

        if (data) {
            document.getElementById('edit-cnt-mind-title').value = data.mindset_titulo || "";
            document.getElementById('edit-cnt-mind-text').value = data.mindset_texto || "";
            document.getElementById('edit-cnt-nutri-title').value = data.nutricao_titulo || "";
            document.getElementById('edit-cnt-nutri-text').value = data.nutricao_texto || "";
        } else {
            document.getElementById('edit-cnt-mind-title').value = "";
            document.getElementById('edit-cnt-mind-text').value = "";
            document.getElementById('edit-cnt-nutri-title').value = "";
            document.getElementById('edit-cnt-nutri-text').value = "";
        }
    },

    adminSaveContent: async function() {
        const dia = parseInt(document.getElementById('edit-cnt-search-dia').value);
        if(!dia) return;

        const updatePack = {
            dia: dia,
            mindset_titulo: document.getElementById('edit-cnt-mind-title').value.trim(),
            mindset_texto: document.getElementById('edit-cnt-mind-text').value.trim(),
            nutricao_titulo: document.getElementById('edit-cnt-nutri-title').value.trim(),
            nutricao_texto: document.getElementById('edit-cnt-nutri-text').value.trim()
        };

        const { error } = await supabaseClient.from('daily_content').upsert(updatePack);
        if(error) alert("Erro RLS de inserção no banco de conteúdos diários.");
        else alert(`O mindset e nutrição do Dia ${dia} foram gravados na nuvem para os Recrutas.`);
    },

    // Migração não é mais necessária, pois apagamos o dicionário local.
    migrarAlgoritmoParaDb: () => alert("Você já migrou os treinos para o Banco! As edições agora são feitas pela barra de busca de recruta logo abaixo."),

    /* --- SOCIAL & COMUNIDADE (ALOJAMENTO) --- */
    openSocial: function() {
        this.openModal('modal-social');
        this.switchSocialTab('feed');
    },

    switchSocialTab: function(tab) {
        document.getElementById('tab-feed').style.display = (tab === 'feed' ? 'block' : 'none');
        document.getElementById('tab-rank').style.display = (tab === 'rank' ? 'block' : 'none');
        document.getElementById('tab-feed-btn').classList.toggle('active', tab === 'feed');
        document.getElementById('tab-rank-btn').classList.toggle('active', tab === 'rank');
        if(tab === 'feed') this.loadFeed();
        if(tab === 'rank') this.loadRanking();
    },

    loadFeed: async function() {
        const c = document.getElementById('feed-list');
        const { data, error } = await supabaseClient.from('feed_posts')
            .select('*').order('created_at', { ascending: false }).limit(30);
            
        if(error || !data) { c.innerHTML = '<p style="color:#666; font-size:12px; text-align:center; padding:15px;">Rádio muda. Sintonize suas tabelas SQL do feed_posts.</p>'; return; }
        if(data.length === 0) { c.innerHTML = '<p style="color:#666; font-size:12px; text-align:center; padding:15px;">Ninguém postou nada ainda. Seja o primeiro a gritar!</p>'; return; }

        c.innerHTML = data.map(p => {
            const ava = p.user_avatar || `https://ui-avatars.com/api/?name=${p.user_name || 'R'}&background=333&color=fff`;
            const d = new Date(p.created_at);
            const isV = p.tipo === 'missao_concluida';
            const cCls = isV ? 'feed-content victory' : 'feed-content';
            
            // O Martelo da Moderação do Mestre:
            const isAdmin = (app.data?.email === 'mestrericardo@taf90.com.br');
            const delHtml = isAdmin ? `<button onclick="app.adminDeletePost('${p.id}')" style="background:var(--danger); color:white; border:none; border-radius:4px; padding:3px 8px; font-size:10px; cursor:pointer;" title="Deletar da Nuvem"><i class="fa-solid fa-trash"></i></button>` : '';
            
            return `
            <div class="feed-card">
                <div class="feed-header">
                    <div class="feed-avatar" style="background-image:url('${ava}')"></div>
                    <div class="feed-info">
                        <strong>${p.user_name || 'Recruta Fenix'}</strong>
                        <span>${d.toLocaleDateString()} às ${d.getHours()}:${d.getMinutes().toString().padStart(2,'0')}</span>
                    </div>
                    ${delHtml}
                </div>
                <div class="${cCls}">${isV ? '🏆 ' : ''}${p.conteudo}</div>
                <div class="feed-footer">
                    <div class="feed-action" onclick="app.likePost('${p.id}')">
                        <i class="fa-solid fa-hand-holding-medical"></i> ${p.curtidas || 0} Continências
                    </div>
                </div>
            </div>`;
        }).join('');
    },

    postToFeed: async function(tipo='normal') {
        const txtarea = document.getElementById('feed-post-text');
        const txt = txtarea.value.trim();
        if(!txt && tipo === 'normal') return alert("O rádio não transmite se estiver vazio, insira a mensagem militar.");
        
        const btn = document.getElementById('btn-feed-post');
        btn.disabled = true; btn.innerHTML = "ECOANDO...";
        
        await supabaseClient.from('feed_posts').insert([{
            user_id: this.userId,
            user_name: this.data.nome.split(' ')[0],
            user_avatar: this.data.avatar_url || null,
            conteudo: txt,
            tipo: tipo
        }]);
        
        txtarea.value = '';
        btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-bullhorn"></i> DEIXAR MENSAGEM AOS COMPANHEIROS';
        this.loadFeed();
    },
    
    adminDeletePost: async function(postId) {
        if(confirm("LIXEIRA ADMIN: Deseja expurgar essa mensagem imunda do servidor global permanentemente?")) {
            await supabaseClient.from('feed_posts').delete().eq('id', postId);
            this.loadFeed();
        }
    },

    likePost: async function(postId) {
        this.vibrate([30]); // Haptic do "Soco de Fogo"
        const { data } = await supabaseClient.from('feed_posts').select('curtidas').eq('id', postId).single();
        if(data) {
            await supabaseClient.from('feed_posts').update({ curtidas: (data.curtidas || 0) + 1 }).eq('id', postId);
            this.loadFeed();
        }
    },

    loadRanking: async function() {
        const c = document.getElementById('rank-list');
        const { data, error } = await supabaseClient.from('profiles')
            .select('nome, dia_atual, avatar_url').order('dia_atual', { ascending: false }).limit(50);
            
        if(error || !data) { c.innerHTML = '<p style="color:#666">Falha no Radar Central.</p>'; return; }
        
        let html = '';
        data.forEach((u, i) => {
            const pos = i + 1;
            let pStr = pos;
            if(pos===1) pStr = '👑'; else if(pos===2) pStr = '🥈'; else if(pos===3) pStr = '🥉';
            
            const ava = u.avatar_url || `https://ui-avatars.com/api/?name=${u.nome}&background=444&color=fff`;
            
            html += `
            <div class="rank-card ${pos===1 ? 'top1' : ''}">
                <div class="position">${pStr}</div>
                <div class="feed-avatar" style="background-image:url('${ava}')"></div>
                <div class="feed-info">
                    <strong>${(u.nome || 'Recruta').split(' ')[0].toUpperCase()}</strong>
                </div>
                <div class="stats">
                    <span class="dias">${u.dia_atual || 1}</span>
                    <span class="txt">Missões</span>
                </div>
            </div>`;
        });
        c.innerHTML = html;
    },

    handleAvatarBase64: function(e) {
        const file = e.target.files[0];
        if(!file) return;
        
        const reader = new FileReader();
        reader.onload = function(err) {
            const img = new Image();
            img.onload = function() {
               const canvas = document.createElement('canvas');
               const ctx = canvas.getContext('2d');
               canvas.width = 150; canvas.height = 150;
               const sz = Math.min(img.width, img.height);
               const dx = (img.width - sz)/2, dy = (img.height - sz)/2;
               ctx.drawImage(img, dx, dy, sz, sz, 0, 0, 150, 150);
               
               const base64Str = canvas.toDataURL('image/jpeg', 0.5);
               document.getElementById('profile-avatar-preview').style.backgroundImage = `url('${base64Str}')`;
               app.tempAvatarBase64 = base64Str;
            }
            img.src = err.target.result;
        }
        reader.readAsDataURL(file);
    },

    saveProfileInfo: async function() {
        const novoNome = document.getElementById('profile-nome').value.trim();
        if(!novoNome) return alert("O Nome de Guerra não pode ficar em branco.");
        
        const btn = document.getElementById('btn-save-profile');
        btn.innerHTML = 'GRAVANDO... <i class="fa-solid fa-spinner fa-spin"></i>'; btn.disabled = true;
        
        const payload = { nome: novoNome };
        let urlUploadFinal = this.data.avatar_url;

        if (this.tempAvatarBase64) {
            try {
                this.vibrate([40]); // Ação em andamento
                const res = await fetch(this.tempAvatarBase64);
                const blob = await res.blob();
                const fN = `avatar_${this.userId}_${Date.now()}.jpg`;
                const { data: upData, error: upError } = await supabaseClient.storage.from('avatars').upload(fN, blob, {upsert: true});
                if (!upError) {
                    const { data: { publicUrl } } = supabaseClient.storage.from('avatars').getPublicUrl(upData.path);
                    urlUploadFinal = publicUrl;
                }
            } catch(e) { console.error("Falha ao subir pro Storage", e); }
        }

        if (urlUploadFinal !== this.data.avatar_url) {
            payload.avatar_url = urlUploadFinal;
            this.data.avatar_url = urlUploadFinal;
        }
        
        this.data.nome = novoNome;
        
        const { error } = await supabaseClient.from('profiles').update(payload).eq('id', this.userId);
        
        if (error) {
            btn.innerHTML = 'GRAVAR NO BANCO <i class="fa-solid fa-cloud-arrow-up"></i>'; btn.disabled = false;
            console.error(error);
            alert("❌ ERRO GRAVE DE BANCO: A imagem/nome falhou em subir. O Mestre Ricardo providenciou e RODOU LÁ o comando SQL (ALTER TABLE profiles ADD avatar_url text;) lá na Etapa 6 no Painel da Supabase? Se não rodou, o aplicativo quebra e a foto some no F5!");
            return;
        }
        
        this.updateUI();
        this.closeModal('modal-profile');
        btn.innerHTML = 'GRAVAR NO BANCO <i class="fa-solid fa-cloud-arrow-up"></i>'; btn.disabled = false;
        alert("Ficha de Guerra Militar salva e compactada na nuvem forte!");
    }
};

window.onload = () => {
    app.init();
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
};