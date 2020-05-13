'use strict';

var header = document.querySelector('.header');
var toggle = header.querySelector('.toggle');
var navigation = header.querySelector('.navigation');
var logo = header.querySelector('.logo');
var anchors = document.querySelectorAll('a.js-scroll-to');
var phoneField = document.querySelector('.js-phone');
var regex = /^-?\d*$/;
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

setInputFilter(phoneField, function(value) {
  return regex.test(value);
});

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
  evt.currentTarget.blur();
}

function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}
