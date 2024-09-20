document.querySelector('#menu-btn').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('open');
    document.querySelector('#menu-btn').classList.toggle('clicked');
});

document.addEventListener('scroll', function() {
    const gachaImage = document.querySelector('.gacha-img');
    const lPage = document.querySelector('.l-page');
    const gachaImageRect = gachaImage.getBoundingClientRect();
    const lPageRect = lPage.getBoundingClientRect();
    
    // Определяем, когда изображение начинает пересекаться с .l-page
    if (gachaImageRect.top < lPageRect.bottom) {
      // Вычисляем, насколько изображение пересекается с .l-page
      const overlap = Math.min(gachaImageRect.bottom - lPageRect.top, gachaImageRect.height);
      const percentage = (overlap / gachaImageRect.height) * 100;
  
      // Применяем clip-path, чтобы скрыть часть изображения
      gachaImage.style.clipPath = `inset(0 0 ${percentage}% 0)`;
    } else if (gachaImageRect.bottom <= lPageRect.top) {
      // Если изображение полностью за элементом .l-page, скрываем его полностью
      //gachaImage.style.clipPath = 'inset(0 0 100% 0)';
    } else {
      // Если изображение полностью видимо, сбрасываем clip-path
      gachaImage.style.clipPath = 'inset(0 0 0 0)';
    }
});

const currentUrl = window.location.href;

// Создаем объект URL
const url = new URL(currentUrl);

// Получаем путь из URL
const path = url.pathname;

// Разделяем путь на части
const pathSegments = path.split('/');

// Извлекаем нужный сегмент (в данном случае предположим, что он перед 'index.html')
const targetSegment = pathSegments[pathSegments.length - 2];

console.log(targetSegment); // Вывод: Mualani

// URL вашего JSON-файла
const jsonUrl = `https://raw.githubusercontent.com/Paddfoot/Paddfoot.github.io/refs/heads/main/characters/${targetSegment}/${targetSegment}.json`; // Замените на свой URL

function displayInfo(data) {
  document.querySelector('.cr-name-v').textContent = data[targetSegment]['name_ru'];
};

// Функция для загрузки и отображения данных из JSON-файла
async function loadJSON() {
    try {
        const response = await fetch(jsonUrl); // Загрузка JSON-файла по ссылке
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json(); // Преобразование ответа в JSON
        displayInfo(data); // Отображение данных
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
}

loadJSON(0);