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

  // Кнопка "Показать все устройства"
  const toggleDevicesBtn = document.getElementById('toggleDevicesBtn');
  const devicesContent = document.getElementById('more-devices');
  const devicesText = toggleDevicesBtn.querySelector('.more__text');

  toggleDevicesBtn.addEventListener('click', () => {
    devicesContent.classList.toggle('more__content--shrinked');
    if (devicesContent.classList.contains('more__content--shrinked')) {
      devicesText.textContent = 'Показать все';
    } else {
      devicesText.textContent = 'Скрыть';
    }
  });

  const serviceSwiper = new Swiper('#swiper-services', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el:  '.swiper-pagination',
      clickable: true,
    },
  });


document.addEventListener('DOMContentLoaded', () => {
  initSwipers()

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
    
    });

  

  



