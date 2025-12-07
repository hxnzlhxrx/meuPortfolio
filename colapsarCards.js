// colapsarCards.js
document.addEventListener('DOMContentLoaded', () => {
  const titulos = document.querySelectorAll(`
    section:not(#sobre):not(#projetos):not(#habilidades):not(#contato) h2
  `);

  titulos.forEach(h2 => {
    h2.style.cursor = 'pointer';

    const conteudo = h2.nextElementSibling;
    if (!conteudo) return;

    conteudo.style.maxHeight = '0';
    conteudo.style.overflow = 'hidden';
    conteudo.style.transition = 'max-height 0.4s ease';

    h2.addEventListener('click', () => {
      const estaAberto = conteudo.style.maxHeight !== '0px';
      conteudo.style.maxHeight = estaAberto ? '0' : conteudo.scrollHeight + 'px';
    });
  });
});