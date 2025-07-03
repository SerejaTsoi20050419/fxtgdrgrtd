import '../scss/style.scss'

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
  });



  

  



