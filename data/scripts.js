document.querySelector('#menu-btn').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('open');
    document.querySelector('#menu-btn').classList.toggle('clicked');
});

function rarity(star) {
    if (star > 4) {
        var stars = '';
        let i = 0;
        while (i <= 4) {
            stars += '<img class="star" src="../data/res/star.webp">'
            i++;
        }
        return stars;
    }else{
        var stars = '';
        let i = 0;
        while (i <= 3) {
            stars += '<img class="star" src="../data/res/star.webp">'
            i++;
        }
        return stars;
    }
}

function grid_element_(nid, element, weapon, name, rarity_) {
    var arg = '<a class="card" href="' + nid + '/index.html">' +
        '<div class="card-cont" loading="lazy" style="background-image: url(../data/characters/' + nid + '/' + nid + '_namecard_pv.jpeg);">' +
            '<div>' +
                '<img class="cr-icon" loading="lazy" src="../data/characters/' + nid + '/' + nid + '_pv.png">' +
            '</div>' +
            '<div class="card-el">' +
                '<img class="cr-element" loading="lazy" src="../data/elements/' + element + '.webp">' +
                '<img class="cr-weapon-type" loading="lazy" src="../data/res/' + weapon + '.png">' +
            '</div>' +
        '</div>' +
        '<div class="card-bottom">' +
            '<span class="cr-name">' + name + '</span>' +
            '<div class="rarity">' + rarity(rarity_) + '</div>' +
        '</div>' +
    '</a>'
    return arg
}

function char_add(data, i) {
    var grid_container = document.querySelector('.grid-container');
    var grid_element = document.createElement("div");
    grid_element.classList.add('grid-element');
    grid_element.innerHTML = grid_element_(data['data']['characters'][i]['nid'], data['data']['characters'][i]['element'], data['data']['characters'][i]['weapon'], data['data']['characters'][i]['name_ru'], data['data']['characters'][i]['rarity']);
    grid_container.appendChild(grid_element);
}

function char(data) {
    while (true) {
        const numbers = [];
        for (i = data['data']['characters'].length - 1; i >= 0; i--) {
            numbers.push(data['data']['characters'][i]['id'])
        }
        maxValue = Math.max.apply(null, numbers);
        for (i = data['data']['characters'].length - 1; i >= 0; i--) {
            while (maxValue >= -1) {
                for (i = data['data']['characters'].length - 1; i >= 0; i--) {
                    if (data['data']['characters'][i]['id'] == maxValue) {
                        char_add(data, i)
                        maxValue = maxValue - 1;
                    }
                }
            }
        }
        break;
    }
}

function characters() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://raw.githubusercontent.com/Paddfoot/Paddfoot.github.io/main/data/data.json', true);
    xhr.responseType = 'json';

    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = xhr.response;
            char(data)
        }
    };
    xhr.send();
};


if (document.querySelector('.grid-container') == null){
    console.log('Non')
}else{
    characters();
}