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

   const toggleBrandsBtn = document.getElementById('toggleBrandsBtn');
  const brandsContent = document.getElementById('more-brands');
  const brandsText = toggleBrandsBtn.querySelector('.more__text');

  toggleBrandsBtn.addEventListener('click', () => {
    brandsContent.classList.toggle('more__content--shrinked');
    if (brandsContent.classList.contains('more__content--shrinked')) {
      brandsText.textContent = 'Показать все';
    } else {
      brandsText.textContent = 'Скрыть';
    }
  });



