import '../scss/style.scss'

const initSwipers = () => {
  const brandSwiper = new Swiper('#more-brands', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '#more-brands .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        enabled: false
      }
    }
  });

  const deviceSwiper = new Swiper('#more-devices', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '#more-devices .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        enabled: false
      }
    }


  