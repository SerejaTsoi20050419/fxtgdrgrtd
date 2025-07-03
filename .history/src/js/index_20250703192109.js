import '../scss/style.scss'

let brandSwiper = null;
let deviceSwiper = null;

function initSwipersIfMobile() {
  const isMobile = window.innerWidth <= 768;

  // Инициализация свайпера для брендов
  if (isMobile && !brandSwiper) {
    brandSwiper = new Swiper('#more-brands', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '#more-brands .swiper-pagination',
        clickable: true
      }
    });
  }

  // Инициализация свайпера для устройств
  if (isMobile && !deviceSwiper) {
    deviceSwiper = new Swiper('#more-devices', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '#more-devices .swiper-pagination',
        clickable: true
      }
    });
  }

  // Удаление свайперов на десктопе
  if (!isMobile) {
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

// При загрузке страницы
window.addEventListener('load', initSwipersIfMobile);

// При изменении размера окна
window.addEventListener('resize', initSwipersIfMobile);