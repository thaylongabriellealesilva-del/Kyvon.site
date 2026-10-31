// ==========================================================
// TROCAR: dados de contato da KYVON
// ==========================================================
const CONFIG = {
  whatsapp: '5599981997260',          // 55 + DDD + número, só dígitos
  telefone: '(99) 98199-7260',
};

// ----------------------------------------------------------
// Links de WhatsApp: cada botão tem a sua mensagem em data-whats
// ----------------------------------------------------------
document.querySelectorAll('[data-whats]').forEach((el) => {
  el.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(el.dataset.whats)}`;
  el.target = '_blank';
  el.rel = 'noopener';
});

document.querySelectorAll('[data-campo]').forEach((el) => {
  const valor = CONFIG[el.dataset.campo];
  if (valor) el.textContent = valor;
});

// ----------------------------------------------------------
// Menu hambúrguer
// ----------------------------------------------------------
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('menu');

function setMenu(open) {
  nav.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
}

toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));

// Fecha o menu ao clicar num link (no celular)
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

// Fecha com a tecla Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false);
});

// Ano atual no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();
