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
  });

  const serviceSwiper = new Swiper('#swiper-services', {
    slidesPerView: ''
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

const burgerBtn = document.getElementById('burger-btn');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');

burgerBtn.addEventListener('click', () => {
  sideMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('open');
});

  const repairSwiper = new Swiper('#repair-swiper', {
    slidesPerView: 1.2,
    spaceBetween: 15,
    pagination: {
      el: '.swiper-paginationser',
      clickable: true,
    },
    breakpoints: {
      430: {
        slidesPerView: 1.0,
      },
    },
  });

    const btn = document.getElementById('readMoreBtn');
  const moreText = document.getElementById('moreText');

  btn.addEventListener('click', () => {
    if (moreText.style.display === 'none' || moreText.style.display === '') {
      moreText.style.display = 'block';
      btn.textContent = 'Скрыть';
    } else {
      moreText.style.display = 'none';
      btn.textContent = 'Читать далее';
    }
  });

  