import '../scss/style.scss'

const toggleBrandsBtn = document.getElementById('toggleBrandsBtn');
const moreBrandsContent = document.getElementById('more-brands');

toggleBrandsBtn.addEventListener('click', () => {
  const isExpanded = moreBrandsContent.classList.contains('more__content--expanded');

  if (isExpanded) {
    // Сворачиваем
    moreBrandsContent.classList.remove('more__content--expanded');
    moreBrandsContent.classList.add('more__content--shrinked');
    toggleBrandsBtn.querySelector('.more__text').textContent = 'Показать все';
    toggleBrandsBtn.querySelector('img').alt = 'expand';
    toggleBrandsBtn.querySelector('img').src = './img/expand.svg';
  } else {
    // Раскрываем
    moreBrandsContent.classList.add('more__content--expanded');
    moreBrandsContent.classList.remove('more__content--shrinked');
    toggleBrandsBtn.querySelector('.more__text').textContent = 'Скрыть';
    toggleBrandsBtn.querySelector('img').alt = 'collapse';
    toggleBrandsBtn.querySelector('img').src = './img/thrt.png'; // если есть иконка для сворачивания
  }
});