document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('contactForm');
  const nomeInput = document.getElementById('nome');
  const contatoInput = document.getElementById('number');
  const mensagemInput = document.getElementById('message');

  if (!form || !nomeInput || !contatoInput || !mensagemInput) {
    console.error('Erro: algum campo do formulário não foi encontrado no DOM!');
    return;
  }

 
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nomeInput.value.trim();
    const telefone = contatoInput.value.trim();
    const mensagem = mensagemInput.value.trim();

    if (!name || !telefone || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const texto = `Olá, meu nome é ${name}. Telefone: ${telefone}. Mensagem: ${mensagem}`;
    const url = `https://wa.me/55989851930888?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  });


  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop, behavior: 'smooth' });
      }
    });
  });


  const botaoOpen = document.getElementById('btn-abrir');
  const botaoClosed = document.getElementById('btn-fechar');
  const overlay = document.getElementById('overlay-menu');

  function openMenu() {
    botaoClosed.classList.add('menu-open');
  }

  function closeMenu() {
    botaoClosed.classList.remove('menu-open');
  }

  if (botaoOpen) botaoOpen.addEventListener('click', openMenu);
  if (botaoClosed) botaoClosed.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
});
 

//carrosel area
const carrossel = document.getElementById("carrossel");
  const boxWidth = 300;
  const totalItems = carrossel.children.length;

function scrollCarrossel(direcao) {
    const scrollLeftAntes = carrossel.scrollLeft;
    const scrollMax = carrossel.scrollWidth - carrossel.clientWidth;

    if (direcao > 0) {
   
      if (scrollLeftAntes >= scrollMax - boxWidth) {
        carrossel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carrossel.scrollBy({ left: direcao * boxWidth, behavior: 'smooth' });
      }
    } else {
     
      if (scrollLeftAntes <= 0) {
        carrossel.scrollTo({ left: scrollMax, behavior: 'smooth' });
      } else {
        carrossel.scrollBy({ left: direcao * boxWidth, behavior: 'smooth' });
      }
    }
}