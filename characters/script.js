document.querySelector('#menu-btn').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('open');
    document.querySelector('#menu-btn').classList.toggle('clicked');
});

const jsonUrl = 'https://raw.githubusercontent.com/Paddfoot/Paddfoot.github.io/main/data/data.json';

async function loadJSON() {
    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayCharacters(data['data']['characters']);
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
}

const charactersArr = [];

// Функция для отображения персонажей
function displayCharacters(characters) {
    // Получение персонажей с сортировкой по id
    charactersArr.push(...characters.sort((a, b) => b.id - a.id));
    renderCharacters(charactersArr);
}

const characterGrid = document.getElementById('characterGrid');
const elementFilter = document.getElementById('elementFilter');
const weaponFilter = document.getElementById('weaponFilter');
const rarityFilter = document.getElementById('rarityFilter');

// Функция для генерации звезд в зависимости от редкости персонажа
function rarity(star) {
    return '<img class="star" src="../data/res/star.webp">'.repeat(star);
}

// Функция для отображения персонажей на странице
function renderCharacters(filteredCharacters) {
    characterGrid.innerHTML = '';
    filteredCharacters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.className = 'grid-element';
        characterElement.innerHTML = `
            <a class="card" href="${character.nid}/index.html">
                <div class="card-cont" loading="lazy" style="background-image: url(../data/characters/${character.nid}/${character.nid}_namecard_pv.jpeg);">
                    <div>
                        <img class="cr-icon" loading="lazy" src="../data/characters/${character.nid}/${character.nid}_pv.png">
                    </div>
                    <div class="card-el">
                        <img class="cr-element" loading="lazy" src="../data/elements/${character.element}.webp">
                        <img class="cr-weapon-type" loading="lazy" src="../data/res/${character.weapon}.png">
                    </div>
                </div>
                <div class="card-bottom">
                    <span class="cr-name">${character.name_ru}</span>
                    <div class="rarity">${rarity(character.rarity)}</div>
                </div>
            </a>`;
        characterGrid.appendChild(characterElement);
    });
}

// Функция для фильтрации персонажей
function filterCharacters() {
    const selectedElement = elementFilter.value;
    const selectedWeapon = weaponFilter.value;
    const selectedRarity = rarityFilter.value;

    const filteredCharacters = charactersArr.filter(character => 
        (selectedElement === '' || character.element === selectedElement) &&
        (selectedWeapon === '' || character.weapon === selectedWeapon) &&
        (selectedRarity === '' || character.rarity.toString() === selectedRarity)
    );
    renderCharacters(filteredCharacters);
}

elementFilter.addEventListener('change', filterCharacters);
weaponFilter.addEventListener('change', filterCharacters);
rarityFilter.addEventListener('change', filterCharacters);

loadJSON();
