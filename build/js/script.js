'use strict';

var header = document.querySelector('.header');
var toggle = header.querySelector('.toggle');
var navigation = header.querySelector('.navigation');
var logo = header.querySelector('.logo');
var ClassName = {
  TOGGLE_OPENED: 'toggle--opened',
  NAV_SHOWN: 'navigation--shown',
  LOGO_DARK: 'logo--dark'
};

document.querySelector('html').classList.remove('no-js');
toggle.addEventListener('click', onToggleClick);

function onToggleClick() {
  toggle.classList.toggle(ClassName.TOGGLE_OPENED);
  navigation.classList.toggle(ClassName.NAV_SHOWN);
  logo.classList.toggle(ClassName.LOGO_DARK);
}
