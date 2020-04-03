let accordionItem = Array.from(document.querySelectorAll('[acc="item"]'));
let accBtn = Array.from(document.querySelectorAll('[acc="btn"]'));

if (accBtn.length > 0) accBtn.map(el => el.addEventListener('click', stateAccordionHandler));
if (accordionItem.length > 0) accordionItem.map(el => el.style.height = `${0}px`);



function stateAccordionHandler(evt) {
  if (this.getAttribute('state') === 'none') this.setAttribute('state', 'active');
  else this.setAttribute('state', 'none');

  let accordBlock = this.parentNode.querySelector('.tech__accordion'); // элемент, которому задается высота

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
