// Animação simples de entrada
document.querySelectorAll('.card').forEach((card, index) => {
  card.style.animation = `fadeUp 0.6s ease forwards`;
  card.style.animationDelay = `${index * 0.15}s`;
});

const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`;
document.head.appendChild(style);
