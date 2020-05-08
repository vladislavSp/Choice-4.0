let bodyFlag = document.querySelector('[attr="dzen"]'),
    checkBlocks = Array.from(document.querySelectorAll('[lazy-load="begin"]')),
    projectSections = Array.from(document.querySelectorAll('.project-sect')),
    previewBlocks = Array.from(document.querySelectorAll('[lazy-load="preview"]')),
    viewBlocks = Array.from(document.querySelectorAll('[lazy-load="block"]')),
    header = document.querySelector('[hr="color"]');
    let wrapperBig = document.querySelector('.wrapper--big');

let index = 0;
const hundredPercent = 100, timerTime = 500, valueScale = 0.0015; // initScale = 0.85
let initScale = wrapperBig.getBoundingClientRect().width/window.innerWidth;

previewBlocks.map(el => el.style.transform = `scale(${initScale})`);

previewBlocks.map(el => el.style.transform = `matrix( ${initScale}, 0, 0, ${initScale}, 0, 0)`);

if (bodyFlag) document.addEventListener('scroll', controllBlockHandler);

function controllBlockHandler(evt) {
  initScale = wrapperBig.getBoundingClientRect().width/window.innerWidth;
// window.pageYOffset; // текущая прокрутка документа
// checkBlocks[0].clientHeight; // высота блока
// window.innerHeight; // видимая область экрана viewport
// window.innerHeight - checkBlocks[0].getBoundingClientRect().top; // состояние, когда вычисляется расстояние до блока-флага
// checkBlocks[0].getBoundingClientRect().top // высота блока-флага до

  let positionFlag = Math.floor(hundredPercent - ((checkBlocks[index].getBoundingClientRect().height + checkBlocks[index].getBoundingClientRect().top) / window.innerHeight) * hundredPercent);

  // console.log(positionFlag); // позиция блока относительно вьюпорта

// Если скролл зашел за половину блока (время для подзагрузки)
  if ((window.innerHeight - checkBlocks[index].getBoundingClientRect().top) > checkBlocks[index].clientHeight / 2) {

    viewBlocks[index].setAttribute('state', 'enable'); // показ следующего скрытого блока

    if (positionFlag < 10) {
      previewBlocks[index].style.transform = `matrix( ${initScale}, 0, 0, ${initScale}, 0, 0)`; // scale(0.0${positionFlag})
    } else if (positionFlag < hundredPercent) {
      previewBlocks[index].style.transform = `matrix( ${initScale + valueScale * positionFlag}, 0, 0, ${initScale + valueScale * positionFlag}, 0, 0)`; // scale 0.positionFlag - scale(${initScale + valueScale * positionFlag})
    }
    // else if (positionFlag >= 10 && positionFlag < hundredPercent) {
    //   previewBlocks[index].style.transform = `scale(0.9${positionFlag})`;
    // }
    else if (positionFlag > hundredPercent) { // если прокрутка достигла верхней части экрана
      previewBlocks[index].style.transform = `matrix( 1, 0, 0, 1, 0, 0)`;
    // preloadNextProjects(); загрузка след.шаблона

      document.querySelector('body').style.overflow = 'hidden'; // позиционирование сверху

      projectSections[index].remove(); // ;style.display = 'none'

      document.querySelector('body').style.overflowY = 'scroll';

      index++;
      setTimeout(timerOverflowed, timerTime);

      header.classList.remove('header--hid');

      if (index >= checkBlocks.length - 1) {
        document.removeEventListener('scroll', controllBlockHandler);
        setTimeout(timerOverflowed, timerTime);
      }
    }
  }
}

function timerOverflowed() {
  document.querySelector('body').style.overflow = '';
}

//
// function preloadNextProjects() {
//   viewBlocks[index].setAttribute('state', 'enable');
//  viewNextBlock();
//  downloadProjectFromNet();
//   axios({});
// }
