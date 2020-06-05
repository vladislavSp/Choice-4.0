// let fileInput = document.querySelector('[data-send-field="file"]');
// let labelFile = document.querySelector('.file-label');
//
// // if (labelFile) labelFile.setAttribute('for', `${fileInput.getAttribute('id')}`); // заплатка до того, как в вёрстке поправится
//
// if (fileInput) {
//   fileInput.setAttribute('type', 'file');
//   if (fileInput.type === 'file') fileInput.addEventListener('change', changeStateLabel);
// }
//
// function changeStateLabel() {
//   // console.log(this.files[0]);
//   if (this.files[0]) {
//     labelFile.textContent = `${this.files[0].name}`;
//     labelFile.classList.add('file-label--pick');
//   } else {
//     labelFile.textContent = `Pick up our file`;
//     labelFile.classList.remove('file-label--pick');
//   }
// }
