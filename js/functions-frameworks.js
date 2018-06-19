//Materialize
$(document).ready(function(){
  $('.sidenav').sidenav();
});

$(document).ready(function(){
  $('.materialboxed').materialbox();
});

// ScrollReveal
window.sr = ScrollReveal();

sr.reveal('.nav-hide',{
  duration: 1000,
  origin: 'top',
  reset: true,
  scale: 1
});

sr.reveal('.nav-show',{
  reset: true
});

sr.reveal('.banner-text',{
  reset: true,
  duration: 1000
},500);

sr.reveal('.frase-text',{
  duration: 1000,
  origin: 'top',
  reset: true
});

sr.reveal('.autor',{
  duration: 1000,
  origin: 'bottom',
  reset: true,
  delay: 500
});

sr.reveal('.img',{
  duration: 1000,
  origin: 'top',
  reset: 'true'
},500);

sr.reveal('.gallery-pics',{
  duration: 1000,
  origin: 'bottom',
  reset: 'true'
});

sr.reveal('.arrow',{
  duration: 1000,
  origin: 'top',
  reset: 'true'
});

sr.reveal('.contato-text',{
  duration: 1000,
  origin: 'bottom',
  reset: 'true'
},500);

sr.reveal('.contato-form',{
  duration: 1000,
  origin: 'bottom',
  reset: 'true',
  delay: 1000
});

sr.reveal('.social-text',{
  duration: 1000,
  origin: 'bottom',
  reset: 'true'
},500);
