"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // Смена темы сайта
  var app = document.getElementById('app');
  var eneble_dark_theme = document.getElementById('eneble-dark-theme');
  var eneble_light_theme = document.getElementById('enable-light-theme');
  eneble_dark_theme.addEventListener('click', function () {
    app.classList.add('dark-theme');
  });
  eneble_light_theme.addEventListener('click', function () {
    app.classList.remove('dark-theme');
  });
  var eneble_dark_theme_mob = document.getElementById('eneble-dark-theme-mob');
  var eneble_light_theme_mob = document.getElementById('enable-light-theme-mob');
  eneble_dark_theme_mob.addEventListener('click', function () {
    app.classList.add('dark-theme');
  });
  eneble_light_theme_mob.addEventListener('click', function () {
    app.classList.remove('dark-theme');
  }); // Фиксация шапки

  var header = document.getElementById('header');
  window.addEventListener('scroll', function () {
    console.log(window.pageYOffset);

    if (window.pageYOffset > 0) {
      header.classList.add('fix');
    } else {
      header.classList.remove('fix');
    }
  }); // бургер

  var burger = document.getElementById('burger');
  var burger__menu = document.getElementById('burger__menu');
  burger.addEventListener('click', function () {
    burger__menu.classList.toggle('active');
  });
});
//# sourceMappingURL=main.js.map
