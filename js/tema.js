// (Req 3)
function aplicarTema(tema) {
    const linkCSS = document.getElementById('theme-link');
    // Verifica se o elemento <link> existe
    if (linkCSS) {
        if (tema === 'escuro') {
            linkCSS.href = 'css/style-escuro.css';
        } else {
            linkCSS.href = 'css/style-claro.css';
        }
    } else {
        console.error('Elemento <link> com id "theme-link" não foi encontrado.');
    }
}

function alternarTema() {
    // (Req 3.a, 3.c)
    // Verifica qual é o tema atual lendo do localStorage, ou define 'claro' como padrão
    let temaAtual = localStorage.getItem('tema') || 'claro';
    
    // Alterna o tema
    if (temaAtual === 'escuro') {
        temaAtual = 'claro';
    } else {
        temaAtual = 'escuro';
    }

    // Aplica o novo tema
    aplicarTema(temaAtual);
    
    // (Req 3.e) Salva a preferência no localStorage
    // O tema persistirá noutras páginas e quando o site for reaberto
    localStorage.setItem('tema', temaAtual);
}

// Executa assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    
    // (Req 3.d) Adiciona o evento ao botão
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', alternarTema);
    } else {
        // Se o botão não for encontrado, avisa no console (pode ajudar a depurar)
        console.warn('Botão com id "theme-toggle" não foi encontrado nesta página.');
    }
    
    // (Req 3.e) Verifica o tema salvo ao carregar a página
    // Garante que a página correta (index, livros, etc.) carregue com o tema já definido
    const temaSalvo = localStorage.getItem('tema') || 'claro'; // 'claro' é o padrão
    aplicarTema(temaSalvo);
});

// Para evitar o "flash" do tema claro (o tema pisca antes de mudar para escuro)
// Executamos esta parte do código imediatamente, ANTES do DOM estar pronto.
// Assim, o CSS correto é carregado o mais rápido possível.
const temaSalvoImediato = localStorage.getItem('tema') || 'claro';
aplicarTema(temaSalvoImediato);