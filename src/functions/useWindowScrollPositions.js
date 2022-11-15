export function scrollPageOne() {
  let docHeight = document.body.offsetHeight;
  let scrollToValue = docHeight - docHeight;
  window.scrollTo(0, scrollToValue);
}

export function scrollPageThree() {
  let docHeight = document.body.offsetHeight;
  let scrollToValue = docHeight - docHeight * 0.6;
  window.scrollTo(0, scrollToValue);
}
export function scrollPageFour() {
  let docHeight = document.body.offsetHeight;
  let scrollToValue = docHeight - docHeight * 0.45;
  window.scrollTo(0, scrollToValue);
}
export function scrollPageFive() {
  let docHeight = document.body.offsetHeight;
  let scrollToValue = docHeight - docHeight * 0.3;
  window.scrollTo(0, scrollToValue);
}
export function scrollPageSix() {
  let docHeight = document.body.offsetHeight;
  let scrollToValue = docHeight - docHeight * 0.0;
  window.scrollTo(0, scrollToValue);
}
