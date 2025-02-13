// Inicialización de Swiper para el primer tab
const swiper1 = new Swiper('.mySwiper-1', {
    slidesPerView: 3, // Muestra 3 imágenes por vez
    spaceBetween: 20, // Espacio entre las imágenes
    loop: false, // No se repite en bucle
    autoplay: { 
        delay: 9999999, // Evita el autoplay (truco)
        disableOnInteraction: false, 
    }, 
    speed: 0, // Desactiva la animación
    navigation: {
        nextEl: '.swiper-button-next-1',
        prevEl: '.swiper-button-prev-1',
    },
});

// Inicialización para el segundo tab
const swiper2 = new Swiper('.mySwiper-2', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: false,
    autoplay: { 
        delay: 9999999, 
        disableOnInteraction: false, 
    }, 
    speed: 0, 
    navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
    },
});

// Inicialización para el tercer tab
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Solo una imagen por vez
    spaceBetween: 0,  // No espacio entre las imágenes
    loop: true,       // Habilitar loop (circular)
    navigation: {
      nextEl: '.swiper-button-next', // Botón siguiente
      prevEl: '.swiper-button-prev', // Botón previo
    },
  });
// Inicialización del swiper con un nombre único
const myCustomSwiper = new Swiper('.swiper-container-unique', {
    slidesPerView: 1, // Mostrar solo un slide a la vez
    spaceBetween: 10,  // Espacio entre los slides
    loop: true,        // Activamos el loop
    navigation: {
        nextEl: '.swiper-button-next-unique', // Botón siguiente
        prevEl: '.swiper-button-prev-unique', // Botón anterior
    },
    breakpoints: {
        // En dispositivos móviles mostramos un solo slide por vez
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});