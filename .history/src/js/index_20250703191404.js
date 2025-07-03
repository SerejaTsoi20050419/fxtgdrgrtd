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

  const toggleBtn = document.getElementById('toggleBrandsBtn');
  const content = document.getElementById('more-brands');
  const text = toggleBtn.querySelector('.more__text');
  const img = toggleBtn.querySelector('.more__image');

  toggleBtn.addEventListener('click', () => {
    const isExpanded = content.classList.contains('more__content--expanded');

    if (isExpanded) {
      content.classList.remove('more__content--expanded');
      content.classList.add('more__content--shrinked');
      text.textContent = 'Показать все';
      img.classList.remove('more__image--collapse');
      img.classList.add('more__image--expand');
    } else {
      content.classList.remove('more__content--shrinked');
      content.classList.add('more__content--expanded');
      text.textContent = 'Скрыть';
      img.classList.remove('more__image--expand');
      img.classList.add('more__image--collapse');
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleDevicesBtn");
    const swiperContainer = document.getElementById("more-devices");

    if (!toggleButton || !swiperContainer) {
      console.error("Кнопка или контейнер не найдены!");
      return;
    }

    toggleButton.addEventListener("click", function () {
      swiperContainer.classList.toggle("more__content--shrinked");

      const toggleText = toggleButton.querySelector(".more__text");
      toggleText.textContent = swiperContainer.classList.contains("more__content--shrinked")
        ? "Показать все"
        : "Скрыть";
    });
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
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '#swiper-services .swiper-pagination',
      clickable: true,
    },
  });
};


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

  document.getElementById('toggleBrands').addEventListener('click', function () {
    const brandBlock = document.getElementById('more-brands');
    const expandText = document.getElementById('expandText');

    // Переключаем класс, который ограничивает высоту
    brandBlock.classList.toggle('more__content--shrinked');

    // Меняем текст кнопки
    if (brandBlock.classList.contains('more__content--shrinked')) {
      expandText.textContent = 'Показать все';
    } else {
      expandText.textContent = 'Скрыть';
    }
  });

 
    
    });



  