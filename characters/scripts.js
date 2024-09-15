document.querySelector('#menu-btn').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('open');
    document.querySelector('#menu-btn').classList.toggle('clicked');
});

function rarity(star) {
    if (star > 4) {
        var stars = '';
        let i = 0;
        while (i <= 4) {
            stars += '<img class="star" src="https://raw.githubusercontent.com/Paddfoot/Paddfoot.github.io/main/data/res/star.webp">'
            i++;
        }
        return stars;
    }else{
        var stars = '';
        let i = 0;
        while (i <= 3) {
            stars += '<img class="star" src="https://raw.githubusercontent.com/Paddfoot/Paddfoot.github.io/main/data/res/star.webp">'
            i++;
        }
        return stars;
    }
}

function char(int, data, i) {
    if (data['data']['characters'][i]['rarity'] == int) {
        var grid_container = document.getElementById('grid-container');
        var grid_element = document.createElement("div");
        grid_element.classList.add('grid-element');
        //grid_element.setAttribute('href', 'characterPV.html#' + data['data']['characters'][i]['nid']);
        //grid_element.setAttribute('style', 'text-decoration: none; z-index: 99;');
        grid_element.innerHTML = '<a class="card" href="">' +
            '<div class="card-cont" loading="lazy" style="background-image: url(https://raw.githubusercontent.com/Paddfoot/Paddfoot.github.io/main/data/characters/' + data['data']['characters'][i]['nid'] + '/' + data['data']['characters'][i]['nid'] + '_namecard_pv.jpeg);">' +
                '<div>' +
                    '<img class="cr-icon" loading="lazy" src="https://raw.githubusercontent.com/Paddfoot/Paddfoot.github.io/main/data/characters/' + data['data']['characters'][i]['nid'] + '/' + data['data']['characters'][i]['nid'] + '_pv.png">' +
                '</div>' +
                '<div class="card-el">' +
                    '<img class="cr-element" loading="lazy" src="https://raw.githubusercontent.com/Paddfoot/Paddfoot.github.io/main/data/elements/' + data['data']['characters'][i]['element'] + '.webp">' +
                    '<img class="cr-weapon-type" loading="lazy" src="https://raw.githubusercontent.com/Paddfoot/Paddfoot.github.io/main/data/res/' + data['data']['characters'][i]['weapon'] + '.png">' +
                '</div>' +
            '</div>' +
            '<div class="card-bottom">' +
                '<span class="cr-name">' + data['data']['characters'][i]['name_ru'] + '</span>' +
                '<div class="rarity">' + rarity(data['data']['characters'][i]['rarity']) + '</div>' +
            '</div>' +
        '</a>';
        grid_container.appendChild(grid_element);
    }
}

function characters() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://raw.githubusercontent.com/Paddfoot/Paddfoot.github.io/main/data/data.json', true);
    xhr.responseType = 'json';

    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = xhr.response;
            let l = 0;
            while(l < data['data']['characters'].length) {
                char('5', data, l)
                l++;
            }
            let e = 0;
            while(e < data['data']['characters'].length) {
                char('4', data, e)
                e++;
            }
        }
    };
    xhr.send();
};

characters();