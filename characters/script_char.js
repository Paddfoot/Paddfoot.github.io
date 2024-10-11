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

function rarity(star) {
  var stars = '';
  for (i = star; i > 0; i--) {
      stars += '<img class="star" src="../../data/res/star.webp">'
  }
  return stars;
};

const elementTranslations = {
  'Pyro': 'Пиро',
  'Hydro': 'Гидро',
  'Dendro': 'Дендро',
  'Anemo': 'Анемо',
  'Geo': 'Гео',
  'Cryo': 'Крио',
  'Electro': 'Электро'
};

const weaponTranslations = {
  'Sword': 'Меч',
  'Polearm': 'Копьё',
  'Claymore': 'Двуручный меч',
  'Bow': 'Лук',
  'Catalyst': 'Катализатор'
};

function displayInfo(data) {
document.querySelector('.cr-name-v').textContent = data[targetSegment]['name_ru'];
const container =  document.querySelector('.rarity');
container.innerHTML = rarity(data[targetSegment]['rarity']);
document.querySelector('.cr-briefly').textContent = data[targetSegment]['briefly'];
document.querySelector('.gacha-img').src = `../../data/characters/${targetSegment}/${targetSegment}_gacha.webp`
document.querySelector('.vid').src = `../../data/res/${data[targetSegment]['element'].toLowerCase()}_bg.webm`
document.querySelector('.v-bg').load();
document.querySelector('.element').textContent = elementTranslations[data[targetSegment]['element']];
document.querySelector('.weapon').textContent = weaponTranslations[data[targetSegment]['weapon']];
document.querySelector('.disc').textContent = data[targetSegment]['description'];

async function tabs(tn, lo, lt, ele) {
  const tab = document.getElementById('txt_' + tn);
  tab.innerHTML = '';
  const tab_el = document.createElement('table');
  tab_el.className = 'table-element';
  tab_el.innerHTML = `
  <tr>
      <td>Уровень</td>
      <td>Здоровье</td>
      <td>Атака</td>
      <td>Защита</td>
      <td class="attr">${data[targetSegment]['elevation'][ele][lo]['sub']['attr']}</td>
  </tr>
  <tr>
      <td>1</td>
      <td>${data[targetSegment]['elevation'][ele][lo]['hp']}</td>
      <td>${data[targetSegment]['elevation'][ele][lo]['atc']}</td>
      <td>${data[targetSegment]['elevation'][ele][lo]['def']}</td>
      <td class="par">${data[targetSegment]['elevation'][ele][lo]['sub']['par']}</td>
  </tr>
  <tr>
      <td>20</td>
      <td>${data[targetSegment]['elevation'][ele][lt]['hp']}</td>
      <td>${data[targetSegment]['elevation'][ele][lt]['atc']}</td>
      <td>${data[targetSegment]['elevation'][ele][lt]['def']}</td>
      <td class="par">${data[targetSegment]['elevation'][ele][lt]['sub']['par']}</td>
  </tr>
  `
  tab.appendChild(tab_el);
};
tabs();
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

loadJSON();