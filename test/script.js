// Sample data for characters
const characters = [
    { name: 'Aether', element: 'Anemo', weapon: 'Sword', rarity: '5', image: 'aether.jpg' },
    { name: 'Lumine', element: 'Geo', weapon: 'Sword', rarity: '5', image: 'lumine.jpg' },
    { name: 'Diluc', element: 'Pyro', weapon: 'Claymore', rarity: '5', image: 'diluc.jpg' },
    { name: 'Fischl', element: 'Electro', weapon: 'Bow', rarity: '4', image: 'fischl.jpg' },
    // Add more characters as needed
];

const characterGrid = document.getElementById('characterGrid');
const elementFilter = document.getElementById('elementFilter');
const weaponFilter = document.getElementById('weaponFilter');
const rarityFilter = document.getElementById('rarityFilter');

// Function to render characters
function renderCharacters(filteredCharacters) {
    characterGrid.innerHTML = '';
    filteredCharacters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.className = 'character-item';
        characterElement.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p>Element: ${character.element}</p>
            <p>Weapon: ${character.weapon}</p>
            <p>Rarity: ${character.rarity} Stars</p>
        `;
        characterGrid.appendChild(characterElement);
    });
}

// Initial render
renderCharacters(characters);

// Filter functionality
function filterCharacters() {
    const selectedElement = elementFilter.value;
    const selectedWeapon = weaponFilter.value;
    const selectedRarity = rarityFilter.value;
    const filteredCharacters = characters.filter(character =>
        (selectedElement === '' || character.element === selectedElement) &&
        (selectedWeapon === '' || character.weapon === selectedWeapon) &&
        (selectedRarity === '' || character.rarity === selectedRarity)
    );
    renderCharacters(filteredCharacters);
}

elementFilter.addEventListener('change', filterCharacters);
weaponFilter.addEventListener('change', filterCharacters);
rarityFilter.addEventListener('change', filterCharacters);
