let header = document.querySelector('[hr="color"]');
let block = document.querySelector('[bc="change"]');

if (block) document.addEventListener('scroll', changeColorHandler);

function changeColorHandler() {
  let blocks = Array.from(document.querySelectorAll('*[bc="change"]'));

  const arrTop = blocks.filter((el, i, arr) => el.getBoundingClientRect().width).map(el => Math.abs(el.getBoundingClientRect().height/5 + el.getBoundingClientRect().top)); // values for control desired block => previous to Math.abs(el.getBoundingClientRect().top)

  const indexArr = arrTop.indexOf(Math.min(...arrTop));

  let blockHeight = blocks[indexArr].getBoundingClientRect().height, // height this block
      blockTop = blocks[indexArr].getBoundingClientRect().top, // pos scroll relatively this block
      headerHeight = header.getBoundingClientRect().height/2, // 1/2 header
      // height block +pos relative viewport - 1/2 header
      positionBlock = blockHeight + blockTop - (headerHeight);

      // console.log(positionBlock, arrTop, indexArr);
  if (blockTop < headerHeight && positionBlock > 0) header.setAttribute('color', 'change');
  else header.setAttribute('color', '');
}



// Цвет GetinTouch
let link = document.querySelector('[link-color="black"]'),
    blocks = Array.from(document.querySelectorAll('*[link-color="block"]'));

if (link) document.addEventListener('scroll', colorLinkHandler);

function colorLinkHandler() {
  let newBlocks = blocks.filter(el => el.getBoundingClientRect().width > 0);
  let elements = newBlocks.map(el => Math.abs(el.getBoundingClientRect().top)); // el.getBoundingClientRect().y > link.getBoundingClientRect()  + el.getBoundingClientRect().height/2

  const indexElement = elements.indexOf(Math.min(...elements));

  let linkTop = link.getBoundingClientRect().top,
      linkHeight = link.getBoundingClientRect().height/2,
      blockTop = newBlocks[indexElement].getBoundingClientRect().top,
      blockBottom = newBlocks[indexElement].getBoundingClientRect().bottom,
      blockHeight = newBlocks[indexElement].getBoundingClientRect().height;

  if (linkTop > (blockTop - linkHeight) && linkTop < (blockBottom - linkHeight)) link.setAttribute(`link-color`, `white`);
  else link.setAttribute(`link-color`, `black`);
}

// function getCoords(elem) {
//   let box = elem.getBoundingClientRect();
//
//   return {
//     top: box.top + pageYOffset,
//     left: box.left + pageXOffset
//   };
// }
