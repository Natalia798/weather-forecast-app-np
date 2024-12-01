const button = document.querySelector('.scroll-to-top');

button.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

document.addEventListener('scroll', function () {
  const viewportHeight = window.innerHeight;
  if (window.scrollY < viewportHeight / 2) {
    button.style.visibility = 'hidden';
  } else {
    button.style.visibility = 'visible';
  }
});
