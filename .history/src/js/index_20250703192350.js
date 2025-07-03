import '../scss/style.scss'

let brandSwiper = null;
let deviceSwiper = null;

function initMobileSwipers() {
  if (window.innerWidth <= 430) {
    if (!brandSwiper) {
      brandSwiper = new Swiper('#more-brands', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
          el: '#more-brands .swiper-pagination',
          clickable: true,
        },
      });
    }

    if (!deviceSwiper) {
      deviceSwiper = new Swiper('#more-devices', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
          el: '#more-devices .swiper-pagination',
          clickable: true,
        },
      });
    }
  } else {
    // Уничтожаем Swiper при ширине > 430px
    if (brandSwiper) {
      brandSwiper.destroy(true, true);
      brandSwiper = null;
    }
    if (deviceSwiper) {
      deviceSwiper.destroy(true, true);
      deviceSwiper = null;
    }
  }
}

// Инициализация при загрузке
window.addEventListener('load', initMobileSwipers);
// И при ресайзе
window.addEventListener('resize', initMobileSwipers);