const colorArr = [`#F2C94C`, `#27AE60`, `#EB5757`, `#2F80ED`];
const btn = document.querySelector(`.contact__link`);

if (btn) {
    btn.addEventListener('mouseenter', randomColorGenerate);
    randomColorGenerate();
}

function randomColorGenerate() {
  let randColor = colorArr[randomInteger(0, colorArr.length - 1)];
  localStorage.setItem('randomColor', randColor);
  btn.style.backgroundColor = `${randColor}`;


  document.body.style.selection = `color:${randColor}`;
    let div = document.createElement('div');
    const style = `<style>
      *::selection {
          background: ${randColor}
      }
      </style>`;
}

function randomInteger(min, max) { // случайное число от min до (max+1)
  return Math.floor(min + Math.random() * (max + 1 - min));
}