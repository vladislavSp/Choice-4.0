let bodyFlag = document.querySelector('[attr="dzen"]'),
    checkBlocks = Array.from(document.querySelectorAll('[lazy-load="begin"]')),
    projectSections = Array.from(document.querySelectorAll('.project-sect')),
    previewBlocks = Array.from(document.querySelectorAll('[lazy-load="preview"]')),
    viewBlocks = Array.from(document.querySelectorAll('[lazy-load="block"]'));
let index = 0;
const hundredPercent = 100, initScale = 0.5;

previewBlocks.map(el => el.style.transform = `scale(${initScale})`);

if (bodyFlag) document.addEventListener('scroll', controllBlockHandler);

function controllBlockHandler(evt) {
// window.pageYOffset; // текущая прокрутка документа
// checkBlocks[0].clientHeight; // высота блока
// window.innerHeight; // видимая область экрана viewport
// window.innerHeight - checkBlocks[0].getBoundingClientRect().top; // состояние, когда вычисляется расстояние до блока-флага
// checkBlocks[0].getBoundingClientRect().top // высота блока-флага до

  let positionFlag = Math.floor(hundredPercent - ((checkBlocks[index].getBoundingClientRect().height + checkBlocks[index].getBoundingClientRect().top) / window.innerHeight) * hundredPercent);

//console.log(positionFlag); // позиция блока относительно вьюпорта

// Если скролл зашел за половину блока (время для подзагрузки)
  if ((window.innerHeight - checkBlocks[index].getBoundingClientRect().top) > checkBlocks[index].clientHeight / 2) {

    viewBlocks[index].setAttribute('state', 'enable'); // показ следующего скрытого блока

    if (positionFlag < 10) {
      previewBlocks[index].style.transform = `scale(0.0${positionFlag})`;
    } else if (positionFlag < hundredPercent) {
      previewBlocks[index].style.transform = `scale(${initScale + (0.005 * positionFlag)})`; // scale 0.positionFlag
    }
    // else if (positionFlag >= 10 && positionFlag < hundredPercent) {
    //   previewBlocks[index].style.transform = `scale(0.9${positionFlag})`;
    // }
    else if (positionFlag > hundredPercent) { // если прокрутка достигла верхней части экрана
      previewBlocks[index].style.transform = `scale(1)`;
    // preloadNextProjects(); загрузка след.шаблона
      projectSections[index].remove(); //style.display = 'none'
      index++;
      window.scrollTo(0, 0);

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
