let accordionItem = Array.from(document.querySelectorAll('[data-acc="item"]'));
let accBtn = Array.from(document.querySelectorAll('[data-acc="btn"]'));

if (accBtn.length > 0) accBtn.forEach(el => el.addEventListener('click', stateAccordionHandler));
if (accordionItem.length > 0) accordionItem.forEach(el => el.style.height = `${0}px`);



function stateAccordionHandler(evt) {
  if (this.getAttribute('data-state') === 'none') this.setAttribute('data-state', 'active');
  else this.setAttribute('data-state', 'none');

  let accordBlock = this.parentNode.querySelector('[data-acc="item"]'); // элемент, которому задается высота

  if (accordBlock.style.height === "0px") {
    accordBlock.style.height = `${ accordBlock.scrollHeight }px`;
  } else {
      accordBlock.style.height = `${ accordBlock.scrollHeight }px`;
      window.getComputedStyle(accordBlock, null).getPropertyValue("height");
      accordBlock.style.height = "0";
  }

  accordBlock.addEventListener("transitionend", () => {
    if (accordBlock.style.height !== "0px") accordBlock.style.height = "auto";
  });
}
