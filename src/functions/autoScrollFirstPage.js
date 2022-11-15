/* eslint-disable no-restricted-globals */
function autoScroll() {
  setTimeout(() => {
    let docHeight = document.body.offsetHeight;
    let scrollToValue = docHeight - docHeight * 0.8;
    window.scrollTo(0, scrollToValue);
  }, 2500);
}

export default function autoScrollFirstPage() {
  autoScroll();
  addEventListener("scroll", () => {
    let docHeight = document.body.offsetHeight;
    if (window.scrollY < docHeight - docHeight * 0.95) {
      autoScroll();
    } else return;
  });
}
