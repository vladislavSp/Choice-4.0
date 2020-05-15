let bodyFlag = document.querySelector('[attr="dzen"]'),
    checkBlocks = Array.from(document.querySelectorAll('[lazy-load="begin"]')),
    projectSections = Array.from(document.querySelectorAll('.project-sect')),
    previewBlocks = Array.from(document.querySelectorAll('[lazy-load="preview"]')),
    viewBlocks = Array.from(document.querySelectorAll('[lazy-load="block"]')),
    header = document.querySelector('[hr="color"]');
    let wrapperBorder = document.querySelector('.flip__text');
    const hundredPercent = 100, beginScale = 40, timerTime = 500;
    let index = 0;

if (bodyFlag) {
  let initScale = wrapperBorder.getBoundingClientRect().width/window.innerWidth;
  if (window.matchMedia("(max-width: 479px)").matches) initScale = 0.87; // фикс скейла на мобильных

  let valueScale = (1 - initScale) / hundredPercent;

  previewBlocks.forEach(el => el.style.transform = `scale(${initScale})`);
  previewBlocks.forEach(el => el.style.transform = `matrix( ${initScale}, 0, 0, ${initScale}, 0, 0)`);

  document.addEventListener('scroll', controllBlockHandler);

  function controllBlockHandler(evt) {
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
      let positionRatio = (positionFlag - beginScale) * hundredPercent / (hundredPercent - beginScale); // соотношение для позиции % scale = beginScale

      if (positionFlag < beginScale) {
        previewBlocks[index].style.transform = `matrix( ${initScale}, 0, 0, ${initScale}, 0, 0)`; // scale(0.0${positionFlag})
      } else if (positionFlag < hundredPercent) {
        previewBlocks[index].style.transform = `matrix( ${initScale + (valueScale * positionRatio)}, 0, 0, ${initScale + (valueScale * positionRatio)}, 0, 0)`; // матрица преобразования
      }
      // else if (positionFlag >= 10 && positionFlag < hundredPercent) {
      //   previewBlocks[index].style.transform = `scale(0.9${positionFlag})`;
      // }
      else if (positionFlag > hundredPercent ) { // если scroll достиг верx-части экрана
        previewBlocks[index].classList.add('project-effect--next');
        previewBlocks[index].style.transform = `matrix( 1, 0, 0, 1, 0, 0)`;
      // preloadNextProjects(); загрузка след.шаблона

      //  document.querySelector('body').style.overflow = 'hidden'; // position top
        scrollControl('lock');

        projectSections[index].remove(); // ;style.display = 'none'

        scrollControl('unlock');
      //  document.querySelector('body').style.overflowY = 'scroll';

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
}

// function preloadNextProjects() {
//   viewBlocks[index].setAttribute('state', 'enable');
//  viewNextBlock();
//  downloadProjectFromNet();
//   axios({});
// }

function scrollControl(param) {
  let scrollControlSize = window.pageYOffset || document.documentElement.scrollTop, // scroll page
      scrollControlBarSize = window.innerWidth - document.body.clientWidth, // width scroll bar
      scrollControlBody = document.querySelector('body');

  // block scroll
  if (param == 'lock' && scrollControlBody.getAttribute('scrollControlState') != 'lock'){
    scrollControlBody.style.overflow = 'hidden';
    scrollControlBody.style.paddingRight = scrollControlBarSize + 'px'; // body padding right == width scroll bar

    let scrollControlElem = document.createElement('div'); // add object in position scroll bar
    // add style in object
    scrollControlElem.setAttribute(`style`, `width: ${scrollControlBarSize}px; height: 100%; position: fixed; top: 0; right: 0; background-color: #fafafa;`);
    scrollControlElem.setAttribute('class', 'scrollControlBar'); // add class in object
    scrollControlBody.append(scrollControlElem);// add object in DOM
    scrollControlBody.setAttribute('scrollControlState', 'lock');// state
  }

  // unlock scroll
  if (param == 'unlock' && scrollControlBody.getAttribute('scrollControlState') != 'unlock') {
    scrollControlBody.style.overflow = ''; // body overflow default
    scrollControlBody.style.paddingRight = ''; // body padding right default
    document.querySelector('.scrollControlBar').remove(); // remove scrollControlElem
  // state
    scrollControlBody.setAttribute('scrollControlState', 'unlock');
  }
}

// const scrollbar = Scrollbar.init(`html`, {
//   damping: 0.2,
// });

//
// $(document).ready(
//     function() {
//         $("html").niceScroll();
//     }
// );
