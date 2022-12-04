document.backdrop.style.position = 'fixed';
document.backdrop.style.top = `-${window.scrollY}px`;
document.backdrop.style.position = '';
document.backdrop.style.top = '';
const top = document.body.style.top;
document.backdrop.style.position = '';
document.backdrop.style.top = '';
window.scrollTo(0, parseInt(scrollY || '0') * -1);