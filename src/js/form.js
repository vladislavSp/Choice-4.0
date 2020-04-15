let sendBtn = document.querySelector('*[send-form="btn"]'),
    checkFields = Array.from(document.querySelectorAll('*[check-field]')),
    sendFields = Array.from(document.querySelectorAll('*[send-field]')),
    fieldsObj = {};



// Selectors for Projects
let selectorsBrif = Array.from(document.querySelectorAll('*[selector="brif"]')),
    projectField = document.querySelector('*[send-field="project"]');

if (selectorsBrif.length) selectorsBrif.map(el => el.addEventListener('click', stateSelectorsHandler));

function stateSelectorsHandler () {
  selectorsBrif.map(el => el.setAttribute('state', 'disable'));
  this.setAttribute('state', 'enable');
  projectField.setAttribute('value-proj', `${this.textContent}`);
  projectField.setAttribute('state', 'valid');
}



if (sendBtn) sendBtn.addEventListener('click', checkFormsHandler);
if (checkFields.length) checkFields.map(el => el.addEventListener('focus', validInputHandler));

function checkFormsHandler() {
  checkFields.map(el => {
    if (el.value === '' || el.getAttribute('value-proj') === 'invalid') el.setAttribute('state', 'invalid');
    else el.setAttribute('state', '');
  });

// проверка каждого элемента (требующего валидации) на заполненность
  let sendFlag = checkFields.every(el => el.getAttribute('state') === '');

  if (sendFlag) {
  // проверка всех полей и отправка данных sendForms(fieldsObj)
    sendFields.map(el => {
      el.getAttribute('send-field') === 'project' ? fieldsObj[el.getAttribute('send-field')] = el.getAttribute('value-proj') : fieldsObj[el.getAttribute('send-field')] = el.value;
    });

    sendForms(fieldsObj);
  }
};

function sendForms(obj) {
  console.log(obj);
  // добавить отправку и реакцию на отправку формы
}

function validInputHandler() {
  this.setAttribute('state', '');
}
