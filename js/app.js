function iniciarAccordion() {
  document.querySelectorAll('.resposta').forEach(item => {
    item.style.maxHeight = 0;
  });

  document.querySelectorAll('.accordion-btn').forEach(button => {

    button.addEventListener('click', () => {

      const accordionContent = button.nextElementSibling;

      button.classList.toggle('active');

      if (button.classList.contains('active')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = 0;
      }
    });
  });
}
iniciarAccordion();



// const sections = document.querySelectorAll('.js-scroll');

// function animaScroll() {
//   console.log('Sim');
// }

// window.addEventListener('scroll', animaScroll);


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