import '../scss/style.scss'

document.addEventListener('DOMContentLoaded', () => {
  // Кнопки
  const toggleBrandsBtn = document.getElementById('toggleBrandsBtn');
  const toggleDevicesBtn = document.getElementById('toggleDevicesBtn');

  // Контейнеры контента
 const swiperBrands = new Swiper('#more-brands', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  navigation: {

  function toggleContent(button, content) {
    button.addEventListener('click', () => {
      const isShrunk = content.classList.contains('more__content--shrinked');
      
      if (isShrunk) {
        // Развернуть
        content.classList.remove('more__content--shrinked');
        button.querySelector('.more__text').textContent = 'Скрыть';
        button.querySelector('.more__image').classList.remove('more__image--expand');
        button.querySelector('.more__image').classList.add('more__image--collapse'); // Для иконки "свернуть", если нужна

      } else {
        // Свернуть
        content.classList.add('more__content--shrinked');
        button.querySelector('.more__text').textContent = 'Показать все';
        button.querySelector('.more__image').classList.remove('more__image--collapse');
        button.querySelector('.more__image').classList.add('more__image--expand');
      }
    });
  }

  toggleContent(toggleBrandsBtn, moreBrands);
  toggleContent(toggleDevicesBtn, moreDevices);
});