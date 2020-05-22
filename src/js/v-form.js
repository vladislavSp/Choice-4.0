let vBtn = document.querySelector('[v-btn="form"]'),
    vForm = document.querySelector('[v-form="form"]');

// let vacancyBlock = document.querySelector('.hello-vacancy');

if (vBtn) {
  vBtn.addEventListener('click', formVisHandler);
}

function formVisHandler(e) {
  e.preventDefault();
  // console.log(this);
  this.parentNode.style.display = 'none';
  vForm.style.display = 'block';
  vacancyBlock.addEventListener('mouseleave', formVisHandler);
}
