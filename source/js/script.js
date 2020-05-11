'use strict';

var header = document.querySelector('.header');
var toggle = header.querySelector('.toggle');
var navigation = header.querySelector('.navigation');
var logo = header.querySelector('.logo');
var anchors = document.querySelectorAll('a.js-scroll-to');
var ClassName = {
  TOGGLE_OPENED: 'toggle--opened',
  NAV_SHOWN: 'navigation--shown',
  LOGO_DARK: 'logo--dark'
};

anchors.forEach(function (item) {
  item.addEventListener('click', onAnchorClick);
});

document.querySelector('html').classList.remove('no-js');
toggle.addEventListener('click', onToggleClick);

function onToggleClick() {
  toggle.classList.toggle(ClassName.TOGGLE_OPENED);
  navigation.classList.toggle(ClassName.NAV_SHOWN);
  logo.classList.toggle(ClassName.LOGO_DARK);
}

function onAnchorClick(evt) {
  evt.preventDefault();

  var blockId = evt.currentTarget.getAttribute('href');
  document.querySelector(blockId).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
