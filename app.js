// text in diffrent directions
let didScroll = false;
function scrollBanner() {
  let scrollPos;
  let headerText = document.querySelector('.header-parallax h1');
  let headerTextTwo = document.querySelector('.header-parallax h2');
  scrollPos = window.scrollY;

  if (scrollPos <= 1000) {
    headerText.style.transform = 'translateX(' + -scrollPos / 1 + 'px' + ')';
    headerText.style.opacity = 1 - scrollPos / 600;
    headerTextTwo.style.transform =
      'translateX(' + -scrollPos / -1 + 'px' + ')';
    headerTextTwo.style.opacity = 1 - scrollPos / 600;
  }
}
window.addEventListener('scroll', scrollBanner);

window.scrollTo(300, 500); //X=300 and Y=500
