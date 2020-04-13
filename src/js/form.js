let sendBtn = document.querySelector('*[send-form="btn"]'),
    checkFields = Array.from(document.querySelectorAll('*[check-field]')),
    sendFields = Array.from(document.querySelectorAll('*[send-field]')),
    fieldsObj = {};

if (sendBtn) sendBtn.addEventListener('click', checkFormsHandler);
if (checkFields.length) checkFields.map(el => el.addEventListener('focus', validInputHandler));

function checkFormsHandler() {
  checkFields.map(el => {
    if (el.value == '') el.setAttribute('state', 'invalid');
    else el.setAttribute('state', '');
  });

// проверка каждого элемента (требующего валидации) на заполненность
  let sendFlag = checkFields.every(el => el.getAttribute('state') === '');

  if (sendFlag) {
  // проверка всех полей и отправка данных sendForms(fieldsObj)
    sendFields.map(el => fieldsObj[el.getAttribute('send-field')] = el.value);
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
