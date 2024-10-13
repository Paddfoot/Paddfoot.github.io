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
document.querySelector('.region').textContent = data[targetSegment]['region'];
document.querySelector('.disc').textContent = data[targetSegment]['description'];

function tabs_2() {
  const tab = document.getElementById('skills');
  tab.innerHTML = '';
  const tab_el = document.createElement('div');
  tab_el.className = 'tabs-2';
  tab_el.innerHTML = `
  <span class="gen-text" style="text-align: center;">Таланты</span>
  <div style="display: grid; grid-template-columns: auto auto auto; justify-content: center; width: 600px;">
    <button class="tab-button active" onclick="openTab(event, 'skill-1')"><img class="s_icon" src="../../data/characters/${targetSegment}/${targetSegment}_S1.png"><span style="display: flex; align-items: center;">${data[targetSegment]['skills'][0]['skill_name']}</span></button>
    <button class="tab-button" onclick="openTab(event, 'skill-2')"><img class="s_icon" src="../../data/characters/${targetSegment}/${targetSegment}_S2.png"><span style="display: flex; align-items: center;">${data[targetSegment]['skills'][1]['skill_name']}</span></button>
    <button class="tab-button" onclick="openTab(event, 'skill-3')"><img class="s_icon" src="../../data/characters/${targetSegment}/${targetSegment}_S3.png"><span style="display: flex; align-items: center;">${data[targetSegment]['skills'][2]['skill_name']}</span></button>
    <button class="tab-button" onclick="openTab(event, 'skill-4')"><img class="s_icon" src="../../data/characters/${targetSegment}/${targetSegment}_P4.png"><span style="display: flex; align-items: center;">${data[targetSegment]['skills'][3]['skill_name']}</span></button>
    <button class="tab-button" onclick="openTab(event, 'skill-5')"><img class="s_icon" src="../../data/characters/${targetSegment}/${targetSegment}_P5.png"><span style="display: flex; align-items: center;">${data[targetSegment]['skills'][4]['skill_name']}</span></button>
    <button class="tab-button" onclick="openTab(event, 'skill-6')"><img class="s_icon" src="../../data/characters/${targetSegment}/${targetSegment}_P6.png"><span style="display: flex; align-items: center;">${data[targetSegment]['skills'][5]['skill_name']}</span></button>
  </div>
  <div>
    <div class="tab-content active" id="skill-1">
                        <span class="disc_tt gen-text">${data[targetSegment]['skills'][0]['skill_desc']}</span>
                        </div>
                        <div class="tab-content" id="skill-2">
                            <span class="disc_tt gen-text">${data[targetSegment]['skills'][1]['skill_desc']}</span>
                        </div>
                    
                        <div class="tab-content" id="skill-3">
                            <span class="disc_tt gen-text">${data[targetSegment]['skills'][2]['skill_desc']}</span>
                        </div>
                    
                        <div class="tab-content" id="skill-4">
                            <span class="disc_tt gen-text">${data[targetSegment]['skills'][3]['skill_desc']}</span>
                        </div>
                    
                        <div class="tab-content" id="skill-5">
                            <span class="disc_tt gen-text">${data[targetSegment]['skills'][4]['skill_desc']}</span>
                        </div>
                        <div class="tab-content" id="skill-6">
                            <span class="disc_tt gen-text">${data[targetSegment]['skills'][5]['skill_desc']}</span>
                        </div>
  </div>
  `
  tab.appendChild(tab_el);
};
tabs_2();

function tabs_3() {
  const tab = document.getElementById('pass');
  tab.innerHTML = '';
  const tab_el = document.createElement('div');
  tab_el.className = 'tabs-3';
  tab_el.innerHTML = `
  <span class="gen-text" style="text-align: center;">Созвездия</span>
  <div style="display: grid; grid-template-columns: auto auto auto; justify-content: center; width: 600px;">
    <button class="tab-button-2 active" onclick="openTab_2(event, 'pass-1')"><img class="s_icon" src="../../data/characters/${targetSegment}/${targetSegment}_C1.png"><span style="display: flex; align-items: center;">${data[targetSegment]['constellations'][0]['const_name']}</span></button>
    <button class="tab-button-2" onclick="openTab_2(event, 'pass-2')"><img class="s_icon" src="../../data/characters/${targetSegment}/${targetSegment}_C2.png"><span style="display: flex; align-items: center;">${data[targetSegment]['constellations'][1]['const_name']}</span></button>
    <button class="tab-button-2" onclick="openTab_2(event, 'pass-3')"><img class="s_icon" src="../../data/characters/${targetSegment}/${targetSegment}_C3.png"><span style="display: flex; align-items: center;">${data[targetSegment]['constellations'][2]['const_name']}</span></button>
    <button class="tab-button-2" onclick="openTab_2(event, 'pass-4')"><img class="s_icon" src="../../data/characters/${targetSegment}/${targetSegment}_C4.png"><span style="display: flex; align-items: center;">${data[targetSegment]['constellations'][3]['const_name']}</span></button>
    <button class="tab-button-2" onclick="openTab_2(event, 'pass-5')"><img class="s_icon" src="../../data/characters/${targetSegment}/${targetSegment}_C5.png"><span style="display: flex; align-items: center;">${data[targetSegment]['constellations'][4]['const_name']}</span></button>
    <button class="tab-button-2" onclick="openTab_2(event, 'pass-6')"><img class="s_icon" src="../../data/characters/${targetSegment}/${targetSegment}_C6.png"><span style="display: flex; align-items: center;">${data[targetSegment]['constellations'][5]['const_name']}</span></button>
  </div>
  <div>
    <div class="tab-content-2 active" id="pass-1">
                        <span class="disc_tt gen-text">${data[targetSegment]['constellations'][0]['const_desc']}</span>
                        </div>
                        <div class="tab-content-2" id="pass-2">
                            <span class="disc_tt gen-text">${data[targetSegment]['constellations'][1]['const_desc']}</span>
                        </div>
                    
                        <div class="tab-content-2" id="pass-3">
                            <span class="disc_tt gen-text">${data[targetSegment]['constellations'][2]['const_desc']}</span>
                        </div>
                    
                        <div class="tab-content-2" id="pass-4">
                            <span class="disc_tt gen-text">${data[targetSegment]['constellations'][3]['const_desc']}</span>
                        </div>
                    
                        <div class="tab-content-2" id="pass-5">
                            <span class="disc_tt gen-text">${data[targetSegment]['constellations'][4]['const_desc']}</span>
                        </div>
                        <div class="tab-content-2" id="pass-6">
                            <span class="disc_tt gen-text">${data[targetSegment]['constellations'][5]['const_desc']}</span>
                        </div>
  </div>
  `
  tab.appendChild(tab_el);
};
tabs_3();


async function tabs(tn, lo, lt, ele, elel) {
  const tab = document.getElementById('txt_' + tn);
  tab.innerHTML = '';
  const tab_el = document.createElement('div');
  tab_el.className = 'table-element';
  tab_el.innerHTML = `
  <table>
  <tr>
      <td>Уровень</td>
      <td>Здоровье</td>
      <td>Атака</td>
      <td>Защита</td>
      <td class="attr">${data[targetSegment]['elevation'][ele][lo]['sub']['attr']}</td>
  </tr>
  <tr style="text-align: center;">
      <td>${lo}</td>
      <td>${data[targetSegment]['elevation'][ele][lo]['hp']}</td>
      <td>${data[targetSegment]['elevation'][ele][lo]['atc']}</td>
      <td>${data[targetSegment]['elevation'][ele][lo]['def']}</td>
      <td class="par">${data[targetSegment]['elevation'][ele][lo]['sub']['par']}</td>
  </tr>
  <tr style="text-align: center;">
      <td>${lt}</td>
      <td>${data[targetSegment]['elevation'][ele][lt]['hp']}</td>
      <td>${data[targetSegment]['elevation'][ele][lt]['atc']}</td>
      <td>${data[targetSegment]['elevation'][ele][lt]['def']}</td>
      <td class="par">${data[targetSegment]['elevation'][ele][lt]['sub']['par']}</td>
  </tr>
  </table>
    <div style="text-align: center; padding: 15px;">${ff(elel)}</div>
  `
  tab.appendChild(tab_el);
};

function ff(elel){
  if (elel == '0-0') {
    return ''
  }if (elel == '0-1') {
    return `<span>Материалы возвышения</span><div style="flex-wrap: wrap; display: flex; justify-content: center; gap: 8px; padding-top: 8px;">
    <div style="text-align: center; width: 100px;">
        <div style="display: grid; grid-template-columns: auto; justify-items: center;">
            <img src="../../data/res/${data[targetSegment]['mat'][elel][0]['name']}.webp" style="width: 64px; height: 64px; object-fit: scale-down; background: #6e9dbf;">
            <span>${data[targetSegment]['mat'][elel][0]['len']}</span>
        </div>
        <span>${data[targetSegment]['mat'][elel][0]['name']}</span>
    </div>
    <div style="text-align: center; width: 100px;">
        <div style="display: grid; grid-template-columns: auto; justify-items: center;">
            <img src="../../data/res/${data[targetSegment]['mat'][elel][1]['name']}.webp" style="width: 64px; height: 64px; object-fit: scale-down; background: #6e9dbf;">
            <span>${data[targetSegment]['mat'][elel][1]['len']}</span>
        </div>
        <span>${data[targetSegment]['mat'][elel][1]['name']}</span>
    </div>
    <div style="text-align: center; width: 100px;">
        <div style="display: grid; grid-template-columns: auto; justify-items: center;">
            <img src="../../data/res/${data[targetSegment]['mat'][elel][2]['name']}.webp" style="width: 64px; height: 64px; object-fit: scale-down; background: #6e9dbf;">
            <span>${data[targetSegment]['mat'][elel][2]['len']}</span>
        </div>
        <span>${data[targetSegment]['mat'][elel][2]['name']}</span>
    </div>
    <div style="text-align: center; width: 100px;">
        <div style="display: grid; grid-template-columns: auto; justify-items: center;">
            <img src="../../data/res/${data[targetSegment]['mat'][elel][3]['name']}.webp" style="width: 64px; height: 64px; object-fit: scale-down; background: #6e9dbf;">
            <span>${data[targetSegment]['mat'][elel][3]['len']}</span>
        </div>
        <span>${data[targetSegment]['mat'][elel][3]['name']}</span>
    </div>
</div>`
  }else{
    return `<span>Материалы возвышения</span><div style="flex-wrap: wrap; display: flex; justify-content: center; gap: 8px; padding-top: 8px;">
    <div style="text-align: center; width: 100px;">
        <div style="display: grid; grid-template-columns: auto; justify-items: center;">
            <img src="../../data/res/${data[targetSegment]['mat'][elel][0]['name']}.webp" style="width: 64px; height: 64px; object-fit: scale-down; background: #6e9dbf;">
            <span>${data[targetSegment]['mat'][elel][0]['len']}</span>
        </div>
        <span>${data[targetSegment]['mat'][elel][0]['name']}</span>
    </div>
    <div style="text-align: center; width: 100px;">
        <div style="display: grid; grid-template-columns: auto; justify-items: center;">
            <img src="../../data/res/${data[targetSegment]['mat'][elel][1]['name']}.webp" style="width: 64px; height: 64px; object-fit: scale-down; background: #6e9dbf;">
            <span>${data[targetSegment]['mat'][elel][1]['len']}</span>
        </div>
        <span>${data[targetSegment]['mat'][elel][1]['name']}</span>
    </div>
    <div style="text-align: center; width: 100px;">
        <div style="display: grid; grid-template-columns: auto; justify-items: center;">
            <img src="../../data/res/${data[targetSegment]['mat'][elel][2]['name']}.webp" style="width: 64px; height: 64px; object-fit: scale-down; background: #6e9dbf;">
            <span>${data[targetSegment]['mat'][elel][2]['len']}</span>
        </div>
        <span>${data[targetSegment]['mat'][elel][2]['name']}</span>
    </div>
    <div style="text-align: center; width: 100px;">
        <div style="display: grid; grid-template-columns: auto; justify-items: center;">
            <img src="../../data/res/${data[targetSegment]['mat'][elel][3]['name']}.webp" style="width: 64px; height: 64px; object-fit: scale-down; background: #6e9dbf;">
            <span>${data[targetSegment]['mat'][elel][3]['len']}</span>
        </div>
        <span>${data[targetSegment]['mat'][elel][3]['name']}</span>
    </div>
    <div style="text-align: center; width: 100px;">
        <div style="display: grid; grid-template-columns: auto; justify-items: center;">
            <img src="../../data/res/${data[targetSegment]['mat'][elel][4]['name']}.webp" style="width: 64px; height: 64px; object-fit: scale-down; background: #6e9dbf;">
            <span>${data[targetSegment]['mat'][elel][4]['len']}</span>
        </div>
        <span>${data[targetSegment]['mat'][elel][4]['name']}</span>
    </div>
</div>`
  }
}

// Массив с параметрами для функции tabs
const tabsParams = [
  [1, '0', '20', 0, '0-0'],
  [2, '20+', '40', 1, '0-1'],
  [3, '40+', '50', 2, '1-2'],
  [4, '50+', '60', 3, '2-3'],
  [5, '60+', '70', 4, '3-4'],
  [6, '70+', '80', 5, '4-5'],
  [7, '80+', '90', 6, '5-6']
];

// Цикл для вызова функции tabs с параметрами
for (let i = 0; i < tabsParams.length; i++) {
  tabs(...tabsParams[i]);
}
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

function openTab(event, tabName) {
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
      content.classList.remove('active');
  });

  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
      button.classList.remove('active');
  });

  document.getElementById(tabName).classList.add('active');
  event.currentTarget.classList.add('active');
}

function openTab_2(event, tabName) {
  const tabContents = document.querySelectorAll('.tab-content-2');
  tabContents.forEach(content => {
      content.classList.remove('active');
  });

  const tabButtons = document.querySelectorAll('.tab-button-2');
  tabButtons.forEach(button => {
      button.classList.remove('active');
  });

  document.getElementById(tabName).classList.add('active');
  event.currentTarget.classList.add('active');
}