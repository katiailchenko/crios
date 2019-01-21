const activeClass = 'is-active';

function isActive(selector) {
  return $(selector).hasClass(activeClass);
}

function toggle(selector, status) {
  $(selector).toggleClass(activeClass, status);
}

$('[data-role="menu-btn"]').on('click',function(e) {
  e.preventDefault;
  // строку выше добавили для примера, чтобы не переходить по указаной ссылке
  toggle('[data-role*="menu"]', !isActive('[data-role="menu-btn"]'))
});

$('[data-role="search-btn"]').on('click',function(e) {
  e.preventDefault;
  // строку выше добавили для примера, чтобы не переходить по указаной ссылке
  toggle('[data-role*="search"]', !isActive('[data-role="search-btn"]'))
});

$(document).on('click', function(e) {
  if(!$(e.target).closest('[data-role="menu-btn"]').length && isActive('[data-role="menu-btn"]')) {
    toggle('[data-role*="menu"]', false);
  }
  if(!$(e.target).closest('[data-role*="search"]').length && isActive('[data-role="search-btn"]')) {
    toggle('[data-role*="search"]', false);
  }
})

var btn_prev = document.querySelector('.about-img__buttons .prev');
var btn_next = document.querySelector('.about-img__buttons .next');
var images = document.querySelectorAll('.about-img__photos img');
var i = 0;

btn_prev.onclick = function() {
  images[i].classList.remove('showed')
  i--;
  if(i<0) {
    i = images.length - 1;
  }

  images[i].classList.add('showed')
}

btn_next.onclick = function() {
  images[i].classList.remove('showed')
  i++;
  if(i>=images.length) {
    i = 0;
  }

  images[i].classList.add('showed')
}
