// Menu mobile
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// WhatsApp float dinamis
const waFloat = document.getElementById('wa-float');
if (waFloat) {
  fetch('/data/settings.json')
    .then(res => res.json())
    .then(data => {
      const waNumber = data.whatsapp_number || '6281234567890';
      waFloat.href = `https://wa.me/${waNumber}?text=Halo%20saya%20ingin%20bertanya%20tentang%20PKBM%20YBTI`;
    })
    .catch(() => {
      waFloat.href = 'https://wa.me/6281234567890';
    });
}

// Animasi scroll halus
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
