window.addEventListener('scroll', function() {
    var scrollY = window.scrollY || window.pageYOffset;
    var element = document.querySelector('.menu-pc');

    if (scrollY >= 300) {
      element.style.backgroundColor = '#21313C';
    } else {
      element.style.backgroundColor = 'transparent';
    }
  });