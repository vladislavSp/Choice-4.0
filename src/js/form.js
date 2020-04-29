let sendBtn = document.querySelector('*[send-form="btn"]'),
    sendAgainBtn = document.querySelector('*[send-again="btn"]'),
    checkFields = Array.from(document.querySelectorAll('*[check-field]')),
    sendFields = Array.from(document.querySelectorAll('*[send-field]')),
    fieldsObj = {},
    infoBrif = new Set();

let formMail = document.querySelector('*[form-block="mail"]'),
    formSuccess = document.querySelector('*[form-block="success"]');



// Selectors for Projects
let selectorsBrif = Array.from(document.querySelectorAll('*[selector="brif"]')),
    projectField = document.querySelector('*[send-field="project"]');

if (selectorsBrif.length) selectorsBrif.forEach(el => el.addEventListener('click', stateSelectorsHandler));

function stateSelectorsHandler () {
  if (this.getAttribute('state') === 'enable') {
    this.setAttribute('state', 'disable');
    infoBrif.delete(this.textContent);
  }
  else {
    this.setAttribute('state', 'enable');
    infoBrif.add(this.textContent);
  }

  projectField.setAttribute('value-proj', `${Array.from(infoBrif)}`);
  // projectField.setAttribute('state', 'valid');
}

if (sendBtn) sendBtn.addEventListener('click', checkFormsHandler);
if (sendAgainBtn) sendAgainBtn.addEventListener('click', sendFormsAgainHandler);
if (checkFields.length) checkFields.forEach(el => el.addEventListener('focus', validInputHandler));

function checkFormsHandler() {
  checkFields.forEach(el => {
    if (el.value === '') el.setAttribute('state', 'invalid'); // || el.getAttribute('value-proj') === 'invalid'
    else el.setAttribute('state', 'valid');
  });

// проверка каждого элемента (требующего валидации) на заполненность
  let sendFlag = checkFields.every(el => el.getAttribute('state') === 'valid');

  if (sendFlag) {
  // проверка всех полей и отправка данных sendForms(fieldsObj)
    sendFields.forEach(el => {
      el.getAttribute('send-field') === 'project' ? fieldsObj[el.getAttribute('send-field')] = el.getAttribute('value-proj') : fieldsObj[el.getAttribute('send-field')] = el.value;
    });

    sendForms(fieldsObj);
  }
};

function sendForms(obj) {
  gsap.to(formMail, {duration: 0.3, opacity: 0, zIndex:-1, position: `absolute`});
  gsap.to(formSuccess, {duration: 0.4, opacity: 1, zIndex:1});
  resetForm();
}

function resetForm() {
  let form = formMail.getElementsByTagName(`form`);
  form[0].reset();
  selectorsBrif.forEach(el => el.setAttribute('state', 'disable'));
}

function sendFormsAgainHandler() {
  gsap.to(formSuccess, {duration: 0.3, opacity: 0, zIndex: -1});
  gsap.to(formMail, {duration: 0.3, opacity: 1, zIndex: 1, position: `relative`});
}

function validInputHandler() {
  this.setAttribute('state', '');
}
