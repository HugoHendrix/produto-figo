$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 4 }
        }
    });
});

function loadVideo(element) {
    const wrapper = element.nextElementSibling; // Próximo elemento (div com iframe)
    const iframe = wrapper.querySelector('iframe'); // Encontra o iframe dentro da div
    const videoSrc = iframe.getAttribute('data-src'); // Obtém o src do atributo data-src
  
    if (videoSrc) {
      iframe.setAttribute('src', videoSrc); // Define o src do iframe
      wrapper.style.display = 'block'; // Exibe o vídeo
      element.style.display = 'none'; // Esconde a thumbnail
    }
  }
  