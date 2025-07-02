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

  const swiper = new Swiper('#swiper-services', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

  const serviceSwiper = new Swiper('#swiper-services', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '#swiper-services .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        enabled: false
      }
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initSwipers();

  // 2. Кнопка "Читать далее"
  const readMoreBtn = document.querySelector('#more-content .more__button');
  const moreText = document.querySelector('#more-content .more__content');
  const expandIcon = readMoreBtn.querySelector('.more__image');
  const expandText = readMoreBtn.querySelector('.more__text');

  readMoreBtn.addEventListener('click', () => {
    const isExpanded = moreText.classList.contains('more__content--expanded');
    moreText.classList.toggle('more__content--expanded');
    moreText.classList.toggle('more__content--shrinked');

    expandIcon.classList.toggle('more__image--expand');
    expandText.textContent = isExpanded ? 'Читать далее' : 'Скрыть';
  });
});