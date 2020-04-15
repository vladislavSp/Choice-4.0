let viewBtn = document.querySelector('[project-btn="add"]'),
    visibleList = document.querySelector('[visible-list]');

if (viewBtn) viewBtn.addEventListener('click', viewBlockHandler);

function viewBlockHandler() {
  visibleList.setAttribute('visible-list', 'true');
  viewBtn.style.display = 'none';
}
