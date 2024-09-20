document.querySelector('#menu-btn').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('open');
    document.querySelector('#menu-btn').classList.toggle('clicked');
});

// URL вашего JSON-файла
const jsonUrl = 'https://raw.githubusercontent.com/Paddfoot/Paddfoot.github.io/main/data/data.json'; // Замените на свой URL

// Функция для загрузки и отображения данных из JSON-файла
async function loadJSON() {
    try {
        const response = await fetch(jsonUrl); // Загрузка JSON-файла по ссылке
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json(); // Преобразование ответа в JSON
        displayCharacters(data); // Отображение данных
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
}

const charactersArr = []

// Функция для отображения персонажей
function displayCharacters(characters) {
    while (true) {
        const numbers = [];
        for (i = characters['data']['characters'].length - 1; i >= 0; i--) {
            numbers.push(characters['data']['characters'][i]['id'])
        }
        maxValue = Math.max.apply(null, numbers);
        for (i = characters['data']['characters'].length - 1; i >= 0; i--) {
            while (maxValue >= -1) {
                for (i = characters['data']['characters'].length - 1; i >= 0; i--) {
                    if (characters['data']['characters'][i]['id'] == maxValue) {
                        charactersArr.push(characters['data']['characters'][i]);
                        maxValue = maxValue - 1;
                    }
                }
            }
        }
        break;
    }
    renderCharacters(charactersArr);
}

// Вызов функции загрузки данных при загрузке страницы
//window.onload = loadJSON;
loadJSON();

const characterGrid = document.getElementById('characterGrid');
const elementFilter = document.getElementById('elementFilter');
const weaponFilter = document.getElementById('weaponFilter');
const rarityFilter = document.getElementById('rarityFilter');

function rarity(star) {
    var stars = '';
    for (i = star; i > 0; i--) {
        stars += '<img class="star" src="../data/res/star.webp">'
    }
    return stars;
};

// Function to render characters
function renderCharacters(filteredCharacters) {
    characterGrid.innerHTML = '';
    filteredCharacters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.className = 'grid-element';
        characterElement.innerHTML = `<a class="card" href="${character.nid}/index.html">` +
        `<div class="card-cont" loading="lazy" style="background-image: url(../data/characters/${character.nid}/${character.nid}_namecard_pv.jpeg);">` +
            `<div>` +
                `<img class="cr-icon" loading="lazy" src="../data/characters/${character.nid}/${character.nid}_pv.png">` +
            `</div>` +
            `<div class="card-el">` +
                `<img class="cr-element" loading="lazy" src="../data/elements/${character.element}.webp">` +
                `<img class="cr-weapon-type" loading="lazy" src="../data/res/${character.weapon}.png">` +
            `</div>` +
        `</div>` +
        `<div class="card-bottom">` +
            `<span class="cr-name">${character.name_ru}</span>` +
            `<div class="rarity">${rarity(character.rarity)}</div>` +
        `</div>` +
    `</a>`;
        characterGrid.appendChild(characterElement);
    });
}

//// Function to render characters
//function renderCharacters(filteredCharacters) {
//    characterGrid.innerHTML = '';
//    filteredCharacters.forEach(character => {
//        const characterElement = document.createElement('div');
//        characterElement.className = 'character-item';
//        characterElement.innerHTML = `
//            <img src="${character.image}" alt="${character.name_ru}">
//            <h3>${character.name_ru}</h3>
//            <p>Element: ${character.element}</p>
//            <p>Weapon: ${character.weapon}</p>
//            <p>Rarity: ${character.rarity} Stars</p>
//        `;
//        characterGrid.appendChild(characterElement);
//    });
//}

// Initial render
renderCharacters(charactersArr);

// Filter functionality
function filterCharacters() {
    const selectedElement = elementFilter.value;
    const selectedWeapon = weaponFilter.value;
    const selectedRarity = rarityFilter.value;
    const filteredCharacters = charactersArr.filter(character =>
        (selectedElement === '' || character.element === selectedElement) &&
        (selectedWeapon === '' || character.weapon === selectedWeapon) &&
        (selectedRarity === '' || character.rarity === selectedRarity)
    );
    renderCharacters(filteredCharacters);
}

elementFilter.addEventListener('change', filterCharacters);
weaponFilter.addEventListener('change', filterCharacters);
rarityFilter.addEventListener('change', filterCharacters);


//document.addEventListener('scroll', function() {
//    const gachaImage = document.querySelector('.gacha-img');
//    const lPage = document.querySelector('.l-page');
//    const gachaImageRect = gachaImage.getBoundingClientRect();
//    const lPageRect = lPage.getBoundingClientRect();
//    
//    // Определяем, когда изображение начинает пересекаться с .l-page
//    if (gachaImageRect.top < lPageRect.bottom) {
//      // Вычисляем, насколько изображение пересекается с .l-page
//      const overlap = Math.min(gachaImageRect.bottom - lPageRect.top, gachaImageRect.height);
//      const percentage = (overlap / gachaImageRect.height) * 100;
//  
//      // Применяем clip-path, чтобы скрыть часть изображения
//      gachaImage.style.clipPath = `inset(0 0 ${percentage}% 0)`;
//    } else if (gachaImageRect.bottom <= lPageRect.top) {
//      // Если изображение полностью за элементом .l-page, скрываем его полностью
//      //gachaImage.style.clipPath = 'inset(0 0 100% 0)';
//    } else {
//      // Если изображение полностью видимо, сбрасываем clip-path
//      gachaImage.style.clipPath = 'inset(0 0 0 0)';
//    }
//  });