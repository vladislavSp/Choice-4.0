let header = document.querySelector('[hr="color"]');
let blocks = Array.from(document.querySelectorAll('[bc="change"]'));

if (blocks.length) document.addEventListener('scroll', changeColorHandler);

function changeColorHandler() {
  const arrTop = blocks.filter((el, i, arr) => el.getBoundingClientRect().width).map(el => Math.abs(el.getBoundingClientRect().height/5 + el.getBoundingClientRect().top)); // values for control desired block => previous to Math.abs(el.getBoundingClientRect().top) 

  const indexArr = arrTop.indexOf(Math.min(...arrTop));
  let blockHeight = blocks[indexArr].getBoundingClientRect().height, // height this block
      blockTop = blocks[indexArr].getBoundingClientRect().top, // pos scroll relatively this block
      headerHeight = header.getBoundingClientRect().height/2, // 1/2 header
      positionBlock = blockHeight + blockTop - (headerHeight); // height block +pos relative viewport - 1/2 header

      // console.log(positionBlock, arrTop, indexArr);

  if (blockTop < headerHeight && positionBlock > 0) header.setAttribute('color', 'change');
  else header.setAttribute('color', '');
}

// changeColorHandler();
