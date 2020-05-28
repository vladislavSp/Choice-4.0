let imageWrappers = [...document.querySelectorAll('.club__image-wrap')];

if (imageWrappers.length) randomImage(imageWrappers);

function randomImage(arr) {
  let randomNum = randomInteger(0, arr.length - 1);
  let images = Array.from(imageWrappers[randomNum].querySelectorAll('.club__image'));

  images.forEach(el => el.style.borderRadius = `50%`);
}

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  return Math.round(min + Math.random() * (max + 1 - min));
}
