document.querySelector('#menu-btn').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('open');
    document.querySelector('#menu-btn').classList.toggle('clicked');
});

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