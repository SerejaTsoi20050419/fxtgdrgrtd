import '../scss/style.scss'

  const toggleButton = document.getElementById("toggle-button");
  const brandList = document.getElementById("brand-list");
  const toggleText = document.getElementById("toggle-text");
  const toggleIcon = document.getElementById("toggle-icon");

  let isExpanded = false;

  toggleButton.addEventListener("click", () => {
    isExpanded = !isExpanded;

    if (isExpanded) {
      brandList.classList.remove("collapsed");
      toggleText.textContent = "Скрыть";
      toggleIcon.style.transform = "rotate(180deg)";
    } else {
      brandList.classList.add("collapsed");
      toggleText.textContent = "Показать все";
      toggleIcon.style.transform = "rotate(0deg)";
    }
  });