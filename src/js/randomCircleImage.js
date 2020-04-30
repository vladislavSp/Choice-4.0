let imageWrappers = Array.from(document.querySelectorAll('.club__image-wrap'));

if (imageWrappers.length) randomImage(imageWrappers);

function randomImage(arr) {
  let randomNum = randomInteger(0, arr.length - 1);
  let images = Array.from(imageWrappers[randomNum].querySelectorAll('img'));

  images.forEach(el => el.style.borderRadius = `50%`);
}

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.round(rand);
}
