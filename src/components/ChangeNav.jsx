export function onMainNav() {
  const mainNav = document.querySelector('#mainNav');
  mainNav.classList.add('topNavBb');
}

export function offMainNav() {
  const mainNav = document.querySelector('#mainNav');
  mainNav.classList.remove('topNavBb');
}

export function giveMainNav() {
  const mainNav = document.querySelector('#navigation');
  mainNav.classList.add('responsiveNav');
}

export function moveMainNav() {
  const mainNav = document.querySelector('#navigation');
  if (mainNav.classList.contains('responsiveNav')) {
    mainNav.classList.remove('responsiveNav');
  }
}
