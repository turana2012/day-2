const accordions = document.querySelectorAll('.accordion');

accordions.forEach(btn => {
  btn.addEventListener('click', function () {
    // Убрать/добавить класс активного состояния
    this.classList.toggle('active');

    // Получить соответствующий .panel
    const panel = this.nextElementSibling;

    // Переключение высоты
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});