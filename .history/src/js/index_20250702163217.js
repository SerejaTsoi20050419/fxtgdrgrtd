import '../scss/style.scss'

console.log('It works!')

const tabs = document.querySelectorAll('.services__tab');
const contents = document.querySelectorAll('.services__content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('services__tab--active'));
        tab.classList.add('services__tab--active');
  
        contents.forEach(content => content.classList.remove('services__content--visible'));
  
        const selectedId = `tab-${tab.dataset.tab}`;
        const selectedContent = document.getElementById(selectedId);
        if (selectedContent) {
          selectedContent.classList.add('services__content--visible');
        }
      });
    });
    
    // Кнопка "Читать далее"
    

    const toggleButton = document.getElementById('toggle-button');
    const toggleText = document.getElementById('toggle-text');
    const toggleIcon = document.getElementById('toggle-icon');
    const brandList = document.getElementById('brand-list');

    toggleButton.addEventListener('click', () => {
    const isHidden = brandList.style.display === 'none' || brandList.style.display === '';

    brandList.style.display = isHidden ? 'grid' : 'none';
    toggleText.textContent = isHidden ? 'Скрыть' : 'Показать все';
    toggleIcon.src = isHidden ? 'img/expand.png' : 'img/thrt.png'; // замените на нужную иконку
  });

    const mainSwiper = new Swiper('.swiper-container', {
    slidesPerView: 1.0,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      direction: 'vertical'
    },
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

  const anotherSwiper = new Swiper(".swiper-conta", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-paginationiio",
      clickable: true
    },
  });

   function toggleMore() {
    const moreText = document.getElementById('moreText');
    const imgBlock = document.getElementById('imgBlock');

    // показать / скрыть текст
    if (moreText.style.display === "none") {
      moreText.style.display = "block";
      
      // Только на экране 430px и меньше
      if (window.innerWidth <= 430) {
        imgBlock.classList.add('moved');
      }
    } else {
      moreText.style.display = "none";
      imgBlock.classList.remove('moved');
    }
  }

 

const btn = document.getElementById('readMoreBtn');
const img = document.querySelector('.img-cps');
const moreText = document.querySelector('.more-text');
const readMoreText = document.getElementById('readMoreText');
const readMoreToggleIcon = document.getElementById('toggleIcon');

btn.addEventListener('click', () => {
  img.classList.toggle('move-down');

  if (moreText.style.display === 'block') {
    // Если открыт — закрыть
    moreText.style.display = 'none';
    readMoreText.textContent = 'Читать далее';
    readMoreToggleIcon.src = 'img/thrt.png'; // иконка для "Читать далее"
  } else {
    // Если закрыт — открыть
    moreText.style.display = 'block';
    readMoreText.textContent = 'Скрыть';
    readMoreToggleIcon.src = 'img/expand.png'; // иконка для "Скрыть"
  }
});
