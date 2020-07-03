let imageWrappers = [...document.querySelectorAll('.club__image-wrap')];

if (imageWrappers.length) randomImage(imageWrappers);

function randomImage(arr) {
  let randomNum = randomInteger(0, arr.length - 1);
  let images = Array.from(imageWrappers[randomNum].querySelectorAll('.club__image'));

  images.forEach(el => el.style.borderRadius = `50%`);
}

function randomInteger(min, max) {  // случайное число от min до (max + 1)
  return Math.floor(min + Math.random() * (max + 1 - min));
}



/// Рандомные фотки для блока about \\\

if (window.matchMedia("(max-width: 767px)").matches) {
  let imagesSpace = [...document.querySelectorAll('.space__image-wrap')];

  if (imagesSpace) {
    let randNum = randomInteger(0, imagesSpace.length - 1);

    imagesSpace.forEach(el => el.style.display = 'none');
    imagesSpace[randNum].style.display = '';
  }
}
