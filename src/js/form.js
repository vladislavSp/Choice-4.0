let sendBtn = document.querySelector('*[send-form="btn"]'),
    sendAgainBtn = document.querySelector('*[send-again="btn"]'),
    checkFields = Array.from(document.querySelectorAll('*[check-field]')),
    sendFields = Array.from(document.querySelectorAll('*[send-field]')),
    formMail = document.querySelector('*[form-block="mail"]'),
    formSuccess = document.querySelector('*[form-block="success"]'),
    nameUser = document.querySelector('[brif-name="user"]'),
    textArea = document.querySelector('[brif="textarea"]'),
    scrollBlock = document.querySelector('[scroll="form"]'),
    fileField = document.querySelector('[send-field="file"]'),
    fieldsObj = {}, infoBrif = new Set();

if (textArea) {
  textArea.setAttribute('rows', `1`);
  autosize(textArea);
}

// INPUT MASK
let nameField = document.querySelector('[send-field="name"]');
// let mailField = document.querySelector('[send-field="mail"]');

if (nameField) {
  nameField.addEventListener('input', function() {
    let numbers = [], initArr = [];
    let value = this.value;

    numbers.push(value.replace(/[^\d]/g,'')); // находится значения цифр в инпуте
    initArr = value.split(''); // создается весь массив ввода, разделенный ","

    let num = initArr.indexOf(numbers[0]); // поиск первого ввода цифры

    if (num >= 0) {
      initArr.splice(num, 1); // удаление этого ввода
      this.value = initArr.join(''); // подстановка в поле ввода значения без цифр
    }
  });
}



// Selectors for Projects
let selectorsBrif = Array.from(document.querySelectorAll('*[selector="brif"]')),
    projectField = document.querySelector('*[send-field="project"]');

if (selectorsBrif.length) selectorsBrif.forEach(el => el.addEventListener('click', stateSelectorsHandler));
if (sendBtn) sendBtn.addEventListener('click', checkFormsHandler);
if (sendAgainBtn) sendAgainBtn.addEventListener('click', sendFormsAgainHandler);
if (checkFields.length) checkFields.forEach(el => el.addEventListener('focus', validInputHandler));

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

function checkFormsHandler() {
  checkFields.forEach(el => {
    if (el.value === '') el.setAttribute('state', 'invalid'); // el.getAttribute('value-proj') === 'invalid'
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
  // скролл к верхней части блока
  if (window.matchMedia("(max-width: 767px)").matches) {
    let topScrollBlock = scrollBlock.getBoundingClientRect().top + pageYOffset - 100;
    window.scrollTo(0, topScrollBlock);
  }

  // axios({
  //     method: 'post',
  //     url: 'assets/choice/php/send.php',
  //     data: ` name=${name}&phone=${contact} `
  //   }).then();

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
