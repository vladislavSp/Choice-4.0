let viewBtn = document.querySelector('[project-btn="add"]'),
    visibleList = document.querySelector('[visible-list]');

if (viewBtn) viewBtn.addEventListener('click', viewBlockHandler);

function viewBlockHandler() {
  visibleList.setAttribute('visible-list', 'true');
  viewBtn.style.display = 'none';
}

// Script for add hide text-link
// let visibleBtns = Array.from(document.querySelectorAll('*[visible-btn]')),
//     list = Array.from(document.querySelectorAll('[visible-list]'));
//
// if (visibleBtns.length) visibleBtns.forEach(el => el.addEventListener('click', viewBlocks));
//
// function viewBlocks() {
//   let attr = this.getAttribute('visible-btn');
//   let item = list.filter(el => el.getAttribute('visible-list') === `${attr}`);
//   item[0].setAttribute('visible', '');
//   this.style.display = 'none';
// }
