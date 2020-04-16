let bodyFlag = document.querySelector('[attr="dzen"]'),
    checkBlocks = Array.from(document.querySelectorAll('[lazy-load="begin"]')),
    previewBlocks = Array.from(document.querySelectorAll('[lazy-load="preview"]')),
    viewBlocks = Array.from(document.querySelectorAll('[lazy-load="block"]'));
let index = 0;
const hundredPercent = 100;

previewBlocks.map(el => el.style.transform = `scale(0.85)`);

if (bodyFlag) document.addEventListener('scroll', controllBlockHandler);

function controllBlockHandler(evt) {
// console.log(window.pageYOffset); // текущая прокрутка документа

// console.log(checkBlocks[0].clientHeight); // высота блока

//  console.log(window.innerHeight); // видимая область экрана viewport

// console.log(window.innerHeight - checkBlocks[0].getBoundingClientRect().top); // состояние, когда вычисляется расстояние до блока-флага

//checkBlocks[0].getBoundingClientRect().top // высота блока-флага до

  let positionFlag = Math.floor(hundredPercent - ((checkBlocks[index].getBoundingClientRect().height + checkBlocks[index].getBoundingClientRect().top) / window.innerHeight) * hundredPercent);

// console.log(positionFlag); позиция блока относительно вьюпорта

// Если скролл зашел за половину блока (время для подзагрузки)
  if ((window.innerHeight - checkBlocks[index].getBoundingClientRect().top) > checkBlocks[index].clientHeight / 2) {

    // preloadNextProjects(); загрузка шаблона/либо
    viewBlocks[index].setAttribute('state', 'enable'); // показ первого скрытого блока

    // if (positionFlag < 10) previewBlocks[index].style.transform = `scale(0.90${positionFlag})`;
    if (positionFlag < hundredPercent) {
      previewBlocks[index].style.transform = `scale(0.${positionFlag})`;
    }
    // else if (positionFlag >= 10 && positionFlag < hundredPercent) {
    //   previewBlocks[index].style.transform = `scale(0.9${positionFlag})`;
    // }
    else if (positionFlag > hundredPercent) { // если прокрутка достигла верхней части экрана
      previewBlocks[index].style.transform = `scale(1)`;
      index++;
      if (index >= checkBlocks.length - 1) document.removeEventListener('scroll', controllBlockHandler);
    }
  }
}
//
// function preloadNextProjects() {
//   viewBlocks[index].setAttribute('state', 'enable');
//  viewNextBlock();
//  downloadProjectFromNet();
//   axios({});
// }
