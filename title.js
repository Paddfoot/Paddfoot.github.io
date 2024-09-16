var grid_container = document.querySelector('.title');
var grid_element = document.createElement("div");
grid_element.classList.add('title-bar');
grid_element.innerHTML = '<div class="logo-container">' +
                '<span class="menu-icon" id="menu-btn">menu</span>' +
                '<span class="logo"><b>AWARIN</b></span>' +
            '</div>' +
            '<div class="menu">' +
                '<a class="menu-item" href="https://paddfoot.github.io"><div class="menu-item-cont"><img class="icon-m" src="https://raw.githubusercontent.com/Paddfoot/Paddfoot.github.io/main/data/res/main.png"><span class="text-m">Главная страница</span></div></a>' +
                '<a class="menu-item" href="/"><div class="menu-item-cont"><img class="icon-m" src="https://raw.githubusercontent.com/Paddfoot/Paddfoot.github.io/main/data/res/characters.png"><span class="text-m">Персонажи</span></div></a>' +
                '<a class="menu-item" href="characters/index.html"><div class="menu-item-cont"><img class="icon-m" src="https://raw.githubusercontent.com/Paddfoot/Paddfoot.github.io/main/data/res/weapons.png"><span class="text-m">Оружия</span></div></a>' +
                '<a class="menu-item" href="characters/index.html"><div class="menu-item-cont"><img class="icon-m" src="https://raw.githubusercontent.com/Paddfoot/Paddfoot.github.io/main/data/res/artifacts.png"><span class="text-m">Артефакты</span></div></a>' +
                '<a class="menu-item" href="characters/index.html"><div class="menu-item-cont"><img class="icon-m" src="https://raw.githubusercontent.com/Paddfoot/Paddfoot.github.io/main/data/res/events.png"><span class="text-m">Ивенты</span></div></a>' +
            '</div>';
grid_container.appendChild(grid_element);