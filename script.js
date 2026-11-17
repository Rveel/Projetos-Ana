document.addEventListener('DOMContentLoaded', () => {
  const btnAbrir = document.getElementById('abrir-exposicao');
  const btnTopo = document.getElementById('btn-topo');
  const secaoExibicao = document.getElementById('exibicao');
  const videoIntro = document.getElementById('video-intro');

  // Navegação suave ao clicar em "Assistir à exposição"
  btnAbrir.addEventListener('click', (e) => {
    e.preventDefault();
    if (videoIntro && !videoIntro.paused) {
      videoIntro.pause();
    }
    secaoExibicao.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Controla a visibilidade do botão flutuante "Voltar ao topo"
  const toggleScrollButton = () => {
    if (window.scrollY > 400) {
      btnTopo.classList.add('visible');
    } else {
      btnTopo.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', toggleScrollButton, { passive: true });
  toggleScrollButton();

  // Ação suave ao clicar em "Voltar ao topo"
  btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Inicializa os ícones Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});