/* 1) NAV RESPONSIVO */
const btnNav = document.getElementById('btnNavToggle');
const navMobile = document.getElementById('navMobile');
btnNav && btnNav.addEventListener('click', () => {
  navMobile.style.display = (navMobile.style.display === 'block') ? 'none' : 'block';
});

/* 2) VALIDAÇÃO DE FORMULÁRIO */
const form = document.getElementById('formContato');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;
  const msg = document.getElementById('msgForm');
  msg.textContent = '';

  if(!nome){
    msg.textContent = 'Nome é obrigatório.';
    return;
  }
  // validação simples de email
  if(!email || !email.includes('@')){
    msg.textContent = 'Informe um email válido.';
    return;
  }
  if(senha.length < 6){
    msg.textContent = 'Senha muito curta. Mínimo 6 caracteres.';
    return;
  }

  msg.style.color = '#15803d';
  msg.textContent = 'Formulário enviado com sucesso (simulado)!';
  // aqui você poderia enviar via fetch para um backend
});

/* 3) MODAL (popup) */
const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') modal.style.display = 'none';
});

/* 4) FILTRO DE BUSCA */
const search = document.getElementById('search');
const produtos = Array.from(document.querySelectorAll('#produtos .card'));
search.addEventListener('input', () => {
  const q = search.value.toLowerCase();
  produtos.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(q) ? 'block' : 'none';
  });
});

/* 5) TABS */
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('#tabContent > div');
tabs.forEach(t => {
  t.addEventListener('click', () => {
    tabs.forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    const id = t.dataset.content;
    contents.forEach(c => c.style.display = (c.dataset.id === id) ? 'block' : 'none');
  });
});

/* 6) CARROSSEL SIMPLES */
const slidesEl = document.getElementById('slides');
const totalSlides = slidesEl.children.length;
let current = 0;
document.getElementById('nextSlide').addEventListener('click', () => {
  current = (current + 1) % totalSlides;
  slidesEl.style.transform = `translateX(-${current * 100}%)`;
});
document.getElementById('prevSlide').addEventListener('click', () => {
  current = (current - 1 + totalSlides) % totalSlides;
  slidesEl.style.transform = `translateX(-${current * 100}%)`;
});
// autoplay leve
setInterval(() => {
  current = (current + 1) % totalSlides;
  slidesEl.style.transform = `translateX(-${current * 100}%)`;
}, 4000);

/* 7) TOOLTIP */
const tipEls = document.querySelectorAll('.tooltip');
tipEls.forEach(el => {
  el.addEventListener('mouseenter', (e) => {
    const box = document.createElement('div');
    box.className = 'tip-box';
    box.textContent = el.dataset.tip;
    box.style.position = 'absolute';
    box.style.background = '#111';
    box.style.color = '#fff';
    box.style.padding = '6px 8px';
    box.style.borderRadius = '6px';
    box.style.fontSize = '13px';
    box.style.transform = 'translateY(-6px)';
    document.body.appendChild(box);
    const rect = el.getBoundingClientRect();
    box.style.left = (rect.left + window.scrollX) + 'px';
    box.style.top = (rect.bottom + window.scrollY + 6) + 'px';
    el._tipBox = box;
  });
  el.addEventListener('mouseleave', (e) => {
    if(el._tipBox) el._tipBox.remove();
  });
});