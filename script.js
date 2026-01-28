document.querySelectorAll('.job, .card').forEach((el, i) => {
  el.style.opacity = 0;
  el.style.animation = `fadeIn 0.6s ease forwards`;
  el.style.animationDelay = `${i * 0.1}s`;
});

const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}`;
document.head.appendChild(style);
