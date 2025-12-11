// Simple scroll animation for fade-in elements
const faders = document.querySelectorAll('.card, .hero h1, .hero p');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
/* Fade-in animation */
.appear {
  opacity: 1 !important;
  transform: translateY(0) !important;
  transition: all 0.6s ease-out;
}

.card, .hero h1, .hero p {
  opacity: 0;
  transform: translateY(20px);
}
