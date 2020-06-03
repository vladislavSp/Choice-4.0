let vBtn = document.querySelector('[data-v-btn="btn"]'),
    vForm = document.querySelector('[data-v-form="form"]');

// let vacancyBlock = document.querySelector('.hello-vacancy');

if (vBtn) {
  vBtn.addEventListener('click', formVisHandler);
}

function formVisHandler(e) {
  e.preventDefault();

  vBtn.classList.add('hello-vacancy--npoint');

  vBtn.querySelector('.hello__link-wrap').style.display = 'none';
  vForm.style.display = 'block';
  vBtn.removeEventListener('click', formVisHandler);
  // vacancyBlock.addEventListener('mouseleave', formVisHandler);
}
