let header = document.querySelector('[data-header="color"]');
let block = document.querySelector('[data-bc="change"]');

if (block) document.addEventListener('scroll', changeColorHandler);

function changeColorHandler() {
  // let blocks = [...document.querySelectorAll('*[data-bc="change"]')];
  // const arrTop = blocks.filter((el, i, arr) => el.getBoundingClientRect().width).map(el => Math.abs(el.getBoundingClientRect().height/5 + el.getBoundingClientRect().top)); // values for control desired block => previous to Math.abs(el.getBoundingClientRect().top)
  // const indexArr = arrTop.indexOf(Math.min(...arrTop));

  let blockHeight = block.getBoundingClientRect().height, // height this block blocks[indexArr]
      blockTop = block.getBoundingClientRect().top, // pos scroll relatively this block
      headerHeight = header.getBoundingClientRect().height/2, // 1/2 header
      // height block +pos relative viewport - 1/2 header
      positionBlock = blockHeight + blockTop - (headerHeight);

  // console.log(positionBlock, arrTop, indexArr);
  if (blockTop < headerHeight && positionBlock > 0) header.setAttribute('data-color', 'change');
  else header.setAttribute('data-color', '');
}
