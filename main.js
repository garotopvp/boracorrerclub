document.addEventListener('DOMContentLoaded', () => {
    // --- BANCO DE DADOS DOS POSTS DO BLOG ---
    const blogPosts = [
        {
            id: 'post-tenis',
            title: '5 Dicas para Escolher o Tênis de Corrida Ideal',
            date: '2025-06-27',
            summary: 'Escolher o tênis certo é crucial para evitar lesões e melhorar sua performance...',
            image: 'https://placehold.co/600x400/cccccc/000000?text=Dica+de+Corrida',
            alt: 'Atleta amarrando o tênis.',
            content: `
                <p>Escolher o tênis de corrida certo é um dos investimentos mais importantes que um corredor pode fazer. Não se trata apenas de estilo ou cor; é uma questão de saúde, conforto e performance. Um bom par de tênis pode prevenir lesões, enquanto um inadequado pode causá-las. Aqui estão 5 dicas essenciais para te ajudar a fazer a escolha certa.</p>
                <h3>1. Conheça o seu tipo de pisada</h3>
                <p>A forma como seu pé toca o chão ao correr é fundamental. Existem três tipos principais de pisada:</p>
                <ul>
                    <li><strong>Neutra:</strong> O pé aterrissa de forma uniforme, distribuindo o impacto eficientemente.</li>
                    <li><strong>Pronada:</strong> O tornozelo gira para dentro mais do que o ideal, um movimento para absorver o choque.</li>
                    <li><strong>Supinada:</strong> O tornozelo gira para fora, focando o impacto na parte externa do pé.</li>
                </ul>
                <p>Lojas especializadas podem fazer um teste de pisada. Saber o seu tipo ajuda a escolher um tênis com o suporte adequado para corrigir ou acomodar seu movimento natural.</p>
                <h3>2. Considere o terreno onde você corre</h3>
                <p>Onde você pretende correr a maior parte do tempo? A superfície impacta diretamente no tipo de tênis que você precisa.</p>
                <ul>
                    <li><strong>Asfalto/Concreto:</strong> Exige tênis com alto poder de amortecimento para absorver o impacto de superfícies duras.</li>
                    <li><strong>Esteira:</strong> Similar ao asfalto, o amortecimento é bem-vindo.</li>
                    <li><strong>Trilha (Trail Running):</strong> Requer um solado com mais tração (cravos), maior proteção contra pedras e detritos, e materiais mais robustos.</li>
                </ul>
                <h3>3. Pense no seu objetivo e volume de treino</h3>
                <p>Seu objetivo principal dita o tipo de tênis. Tênis de competição são leves, rápidos e com menos amortecimento, ideais para provas. Já os tênis de rodagem, para treinos diários, são mais estruturados, duráveis e oferecem mais conforto e proteção para acumular quilometragem com segurança.</p>
                <h3>4. Não se apegue ao seu tamanho casual</h3>
                <p>Seus pés incham durante a corrida devido ao aumento do fluxo sanguíneo. Por isso, é crucial comprar um tênis de corrida que seja de meio a um número maior que o seu calçado do dia a dia. A regra de ouro é garantir que haja um espaço equivalente à largura de um polegar entre o seu dedão e a ponta do tênis.</p>
                <h3>5. O conforto é rei: teste antes de comprar</h3>
                <p>Nenhuma análise técnica substitui a sensação nos seus pés. Experimente o tênis no final do dia, quando seus pés estão mais inchados. Use as meias que você normalmente usa para correr. Se possível, dê uma corridinha dentro da loja. O tênis ideal deve parecer uma extensão do seu corpo: sem pontos de pressão, sem atritos e com um ajuste seguro, mas não apertado.</p>
                <p class="mt-6 font-semibold">Investir tempo para encontrar o tênis perfeito não é um luxo, é uma necessidade. Com o par certo, sua corrida se torna mais prazerosa, segura e eficiente. Bora correr!</p>
            `
        },
        {
            id: 'post-iniciante',
            title: 'Como Começar a Correr do Zero Absoluto',
            date: '2025-07-15',
            summary: 'Sempre quis correr mas não sabe por onde começar? Este guia é para você...',
            image: 'https://placehold.co/600x400/cccccc/000000?text=Iniciante',
            alt: 'Pessoa caminhando em uma pista de corrida ao amanhecer.',
            content: `
                <h3>Começar a correr pode ser intimidante, mas é uma das jornadas mais recompensadoras.</h3>
                <p>A chave é começar devagar e ser consistente. Não se preocupe com velocidade ou distância no início. O mais importante é criar o hábito.</p>
                <p>Siga este plano simples:</p>
                <ul>
                    <li><strong>Semana 1-2:</strong> Comece com o método "Caminhada-Corrida". Alterne 5 minutos de caminhada com 1 minuto de corrida leve. Repita 4 a 5 vezes. Faça isso 3 vezes por semana.</li>
                    <li><strong>Semana 3-4:</strong> Aumente o tempo de corrida para 2-3 minutos e mantenha a caminhada em 4-5 minutos.</li>
                    <li><strong>Escute seu corpo:</strong> Dores leves são normais, mas dores agudas não. Descanse se precisar.</li>
                    <li><strong>Hidrate-se:</strong> Beba água antes, durante e depois dos treinos.</li>
                </ul>
                <p class="mt-6 font-semibold">O progresso virá com o tempo. Seja paciente com você mesmo e celebre cada pequena vitória. Estamos aqui para te ajudar em cada passo!</p>
            `
        }
    ];

    feather.replace();

    // --- FUNÇÕES DE INICIALIZAÇÃO ---

    const setupEventListeners = () => {
        const sections = document.querySelectorAll('.fade-in-section');
        if (sections.length > 0) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            sections.forEach(section => observer.observe(section));
        }
        
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
                menuBtn.setAttribute('aria-expanded', !isExpanded);
                mobileMenu.classList.toggle('hidden');
                menuIcon.setAttribute('data-feather', isExpanded ? 'menu' : 'x');
                feather.replace();
            });
        }
        
        document.querySelectorAll('.faq-item button').forEach(button => {
            button.addEventListener('click', () => {
                const isExpanded = button.getAttribute('aria-expanded') === 'true';
                const answer = document.getElementById(button.getAttribute('aria-controls'));
                button.setAttribute('aria-expanded', !isExpanded);
                answer.classList.toggle('hidden');
            });
        });

        const blogModal = document.getElementById('blog-modal');
        const modalTitle = document.getElementById('blog-modal-title');
        const modalContent = document.getElementById('blog-modal-content');
        const modalDescription = document.getElementById('blog-modal-description');
        const closeButtons = document.querySelectorAll('.close-modal-btn, #blog-modal-overlay');

        document.querySelectorAll('.open-blog-modal-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const postId = e.currentTarget.dataset.postId;
                const post = blogPosts.find(p => p.id === postId);
                if (post) {
                    modalTitle.textContent = post.title;
                    modalContent.innerHTML = post.content;
                    modalDescription.textContent = post.summary;
                    blogModal.classList.remove('hidden');
                    blogModal.classList.add('flex');
                    document.body.style.overflow = 'hidden';
                    document.querySelector('#blog-modal .close-modal-btn').focus();
                }
            });
        });

        const closeModal = () => {
            blogModal.classList.add('hidden');
            blogModal.classList.remove('flex');
            document.body.style.overflow = 'auto';
        };
        closeButtons.forEach(btn => btn.addEventListener('click', closeModal));
        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape" && !blogModal.classList.contains('hidden')) closeModal();
        });
    };

    const generateBlogCards = () => {
        const container = document.getElementById('blog-posts-container');
        if (!container) return;
        let cardsHtml = '';
        blogPosts.forEach(post => {
            cardsHtml += `
                <article class="bg-white rounded-lg shadow-lg overflow-hidden group">
                    <img src="${post.image}" alt="${post.alt}" class="w-full h-48 object-cover" loading="lazy">
                    <div class="p-6">
                        <time datetime="${post.date}" class="text-sm text-gray-500">${new Date(post.date + 'T00:00:00-03:00').toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                        <h3 class="text-xl font-bold my-2">${post.title}</h3>
                        <p class="text-gray-700 mb-4">${post.summary}</p>
                        <button data-post-id="${post.id}" class="open-blog-modal-btn font-bold text-primary hover:underline">Leia Mais &raquo;</button>
                    </div>
                </article>
            `;
        });
        container.innerHTML = cardsHtml;
        feather.replace();
    };
    
    // --- EXECUÇÃO ---
    generateBlogCards();
    setupEventListeners();
});
