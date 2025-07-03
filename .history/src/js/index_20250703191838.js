import '../scss/style.scss'

let brandSwiper = null;
let deviceSwiper = null;

function initMobileSwipers() {
  const isMobile = window.innerWidth <= 768;

  if (isMobile && !brandSwiper) {
    brandSwiper = new Swiper('#more-brands', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '#more-brands .swiper-pagination',
        clickable: true,
      }
    });
  }

  if (isMobile && !deviceSwiper) {
    deviceSwiper = new Swiper('#more-devices', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '#more-devices .swiper-pagination',
        clickable: true,
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', initMobileSwipers);
window.addEventListener('resize', () => {
  // Если нужно пересоздавать свайпер при смене ширины
  if (window.innerWidth > 768) {
    if (brandSwiper) {
      brandSwiper.destroy(true, true);
      brandSwiper = null;
    }
    if (deviceSwiper) {
      deviceSwiper.destroy(true, true);
      deviceSwiper = null;
    }
  } else {
    initMobileSwipers();
  }
});
  