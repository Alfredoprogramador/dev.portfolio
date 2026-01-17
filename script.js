// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Form submission handler
const contactForm = document.querySelector('.contato-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const mensagem = this.querySelector('textarea').value;
    
    // Simulate form submission
    alert(`Obrigado ${nome}! Sua mensagem foi recebida. Entrarei em contato em breve através do email: ${email}`);
    
    // Reset form
    this.reset();
  });
}

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
  } else {
    header.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Observe all project cards
document.querySelectorAll('.projeto-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.menu a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--primary-color)';
    }
  });
});

// Add console welcome message
console.log('%c👋 Olá! Bem-vindo ao meu portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cSe você está aqui, deve estar interessado em desenvolvimento!', 'color: #8b5cf6; font-size: 14px;');
console.log('%cVamos conversar! Email: alfredorecio267@gmail.com', 'color: #10b981; font-size: 14px;');
