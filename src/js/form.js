let sendBtn = document.querySelector('*[send-form="btn"]'),
    sendAgainBtn = document.querySelector('*[send-again="btn"]'),
    checkFields = Array.from(document.querySelectorAll('*[check-field]')),
    sendFields = Array.from(document.querySelectorAll('*[send-field]')),
    formMail = document.querySelector('*[form-block="mail"]'),
    formSuccess = document.querySelector('*[form-block="success"]'),
    nameUser = document.querySelector('[brif-name="user"]'),
    textArea = document.querySelector('[brif="textarea"]'),
    fieldsObj = {}, infoBrif = new Set();

if (textArea) {
  textArea.setAttribute('rows', `1`);
  autosize(textArea);
}
  // let initRows = 1; // increase = false;

  // textArea.addEventListener('keyup', function(evt) {
  //   // console.log(this.value.length, evt);
  //   // console.log(textArea.getAttribute('rows');
  //   // if (this.value.length > 60) textArea.setAttribute('rows', '5');
  //   console.log(this.scrollTop, this.scrollHeight, initRows);
  //   console.log(this.getBoundingClientRect());
  //   console.log(textArea.scrollHeight);
  //
  //   if (this.scrollTop > 0) {
  //     initRows = initRows + 1;
  //     textArea.setAttribute('rows', `${initRows}`);}
  //   //   // this.style.height = this.scrollHeight + "px";
  //   //   increase = true;
  //   // } else if (this.scrollTop === 0 && increase) {
  //   //   initRows = initRows - 1;
  //   //   textArea.setAttribute('rows', `${initRows}`);
  //   //   // this.style.height = this.scrollHeight + "px";
  //   //   increase = false;
  //   // }
  // });



// INPUT MASK
let nameField = document.querySelector('[send-field="name"]');
// let mailField = document.querySelector('[send-field="mail"]');

if (nameField) {
  nameField.addEventListener('input', function() {
    let numbers = [];
    let value = this.value;
    let initArr = [];

    numbers.push(value.replace(/[^\d]/g,'')); // находится значения цифр в инпуте
    initArr = value.split(''); // создается весь массив ввода, разделенный ","
    let num = initArr.indexOf(numbers[0]); // поиск первого ввода цифры

    if (num > 0) {
      initArr.splice(num, 1); // удаление этого ввода
      this.value = initArr.join(''); // подстановка в поле ввода значения без цифр
    }
  });
}



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
      if (el.getAttribute('send-field') === 'name') nameUser.textContent = el.value;
    });

    sendForms(fieldsObj);
  }
};

function sendForms(obj) {
  formMail.style.display = 'none';
  formSuccess.style.display = 'block';
  resetForm();
}

function resetForm() {
  let form = formMail.getElementsByTagName(`form`);
  form[0].reset();
  selectorsBrif.forEach(el => el.setAttribute('state', 'disable'));
}

function sendFormsAgainHandler() {
  formMail.style.display = '';
  formSuccess.style.display = 'none';
}

function validInputHandler() {
  this.setAttribute('state', '');
}
