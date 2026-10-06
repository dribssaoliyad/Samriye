document.querySelectorAll('[data-scroll]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector(btn.dataset.scroll)?.scrollIntoView({behavior:'smooth'});
  });
});

const reveal = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      reveal.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll('.chapter-copy,.photo-card,.date-note,.night-card,.proposal-content,.gallery-item,.distance-inner,.song-section,.letter-paper,.ending-content').forEach(el => {
  el.style.opacity='0';
  el.style.transform='translateY(24px)';
  el.style.transition='opacity .9s ease, transform .9s ease';
  reveal.observe(el);
});

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.visible').forEach(el=>el.classList.add('visible'));
});
const style=document.createElement('style');
style.textContent='.visible{opacity:1!important;transform:none!important}';
document.head.appendChild(style);
