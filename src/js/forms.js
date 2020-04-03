let selectorsBrif = Array.from(document.querySelectorAll('*[selector="brif"]'));

if (selectorsBrif.length > 0) selectorsBrif.map(el => el.addEventListener('click', stateSelectorsHandler));

function stateSelectorsHandler () {
  selectorsBrif.map(el => el.setAttribute('state', 'disable'));
  this.setAttribute('state', 'enable');
}
