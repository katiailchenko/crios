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