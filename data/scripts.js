document.querySelector('#menu-btn').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('open');
    document.querySelector('#menu-btn').classList.toggle('clicked');
});

function rarity(star) {
    if (star > 4) {
        var stars = '';
        let i = 0;
        while (i <= 4) {
            stars += '<img class="star" src="https://gensh.honeyhunterworld.com/img/icons/star_35.webp?x32851"></img>'
            i++;
        }
        return stars;
    }else{
        var stars = '';
        let i = 0;
        while (i <= 3) {
            stars += '<img class="star" src="https://gensh.honeyhunterworld.com/img/icons/star_35.webp?x32851"></img>'
            i++;
        }
        return stars;
    }
}

function characters() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://raw.githubusercontent.com/Paddfoot/Awarin/main/bd.json', true);
    xhr.responseType = 'json';

    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = xhr.response;
            // Process the JSON data further
            console.log(data);
            let i = 0;
            console.log(data['data']['characters'].length)
            while(i < data['data']['characters'].length) {
                var grid_container = document.getElementById('grid-container');
                var grid_element = document.createElement("a");
                grid_element.classList.add('grid-element');
                grid_element.setAttribute('href', 'characterPV.html#' + data['data']['characters'][i]['nid']);
                grid_element.setAttribute('style', 'text-decoration: none; z-index: 99;');
                grid_element.innerHTML = '<div class="card" style="background-image: url(' + data['data']['characters'][i]['namecard'] + ');">' +
                    '<img class="cr-icon" src="' + data['data']['characters'][i]['icon'] + '">' +
                    '<div style="width: 150px; text-align: right; display:grid; grid-template-columns:auto; justify-content: right;">' +
                        '<img class="cr-element" src="' + data['data']['characters'][i]['element_icon'] + '">' +
                        '<img class="cr-weapon" src="https://raw.githubusercontent.com/Paddfoot/Awarin/main/data/res/' + data['data']['characters'][i]['weapon'] + '.png">' +
                    '</div>' +
                    '</div>' +
                    '<div style="display: grid; grid-template-columns: auto; width: auto; background-color: #384140; border-radius: 0 0 8px 8px;">' +
                        '<div>' +
                            '<span class="name">' + data['data']['characters'][i]['name_ru'] + '</span>' +
                        '</div>' +
                        '<div>' +
                            '<div class="rarity">' + rarity(data['data']['characters'][i]['rarity']) + '</div>' +
                        '</div>' +
                    '</div>';
                grid_container.appendChild(grid_element);
                i++;
            }
        }
    };
    xhr.send();
};

characters();


document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;    
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".card");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("card");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else {  
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".card");
      
      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
  
        lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('card');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }
  
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  })




  document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;    
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".cr-icon");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("cr-icon");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else {  
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".cr-icon");
      
      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
  
        lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('cr-icon');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }
  
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  })