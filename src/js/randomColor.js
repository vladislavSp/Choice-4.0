const colorArr = [`#F2C94C`, `#27AE60`, `#EB5757`, `#2F80ED`];
const btn = document.querySelector(`.contact__link`);
const hoverCompany = document.querySelector('.clients__your-company');

createElement();
randomColorGenerate();
document.addEventListener('selectstart', randomColorGenerate);

if (btn) btn.addEventListener('mouseenter', randomColorGenerate);
if (hoverCompany) hoverCompany.addEventListener('mouseenter', randomColorGenerate);

function createElement() {
  let div = document.createElement('div');
  div.classList.add('selection-element');
  div.style.display = 'none';
  document.body.appendChild(div);
}

function randomColorGenerate() {
  let randColor = colorArr[randomInteger(0, colorArr.length - 1)];
  let divElem = document.querySelector('.selection-element');

  localStorage.setItem('randomColor', randColor);
  if (btn) btn.style.backgroundColor = `${randColor}`;
  if (hoverCompany) hoverCompany.style.color = `${randColor}`;

  const style = `<style>*::user-select{backround-color:${randColor}}*::selection {background-color: ${randColor}}*::-moz-selection{background-color: ${randColor}}</style>`;
  divElem.innerHTML = `${style}`;
}

function randomInteger(min, max) { // случайное число от min до (max + 1)
  return Math.floor(min + Math.random() * (max + 1 - min));
}