function iniciarAccordion() {
  document.querySelectorAll('.resposta').forEach(item => {
    item.style.maxHeight = 0;
  });

  document.querySelectorAll('.accordion-btn').forEach(botao => {
    botao.addEventListener('click', () => {
      const accordionConteudo = botao.nextElementSibling;
      botao.classList.toggle('active');
      if (botao.classList.contains('active')) {
        accordionConteudo.style.maxHeight = accordionConteudo.scrollHeight + 'px';
      } else {
        accordionConteudo.style.maxHeight = 0;
      }
    });
  });
}
iniciarAccordion();

function iniAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.3;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisivel = (sectionTop - windowMetade);
        if (sectionVisivel < 0) {
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      });
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
iniAnimacaoScroll();