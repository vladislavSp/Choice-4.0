let sendBtn = document.querySelector('*[data-send-form="btn"]'),
    sendAgainBtn = document.querySelector('*[data-send-again="btn"]'),
    checkFields = Array.from(document.querySelectorAll('*[data-check-field]')),
    sendFields = Array.from(document.querySelectorAll('*[data-send-field]')),
    formMail = document.querySelector('*[data-form-block="mail"]'),
    formSuccess = document.querySelector('*[data-form-block="success"]'),
    nameUser = document.querySelector('[data-brif-name="user"]'),
    textArea = document.querySelector('[data-brif="textarea"]'),
    scrollBlock = document.querySelector('[data-scroll="form"]'),
    fileField = document.querySelector('[data-send-field="file"]'),
    fieldsObj = {}, infoBrif = new Set();

if (textArea) {
  textArea.setAttribute('rows', `1`);
  autosize(textArea);
}

// INPUT MASK
let nameField = document.querySelector('[data-send-field="name"]');
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
let selectorsBrif = Array.from(document.querySelectorAll('*[data-selector="brif"]')),
    projectField = document.querySelector('*[data-send-field="project"]');

if (selectorsBrif.length) selectorsBrif.forEach(el => el.addEventListener('click', stateSelectorsHandler));
if (sendBtn) sendBtn.addEventListener('click', checkFormsHandler);
if (sendAgainBtn) sendAgainBtn.addEventListener('click', sendFormsAgainHandler);
if (checkFields.length) checkFields.forEach(el => el.addEventListener('focus', validInputHandler));

function stateSelectorsHandler () {
  if (this.getAttribute('data-state') === 'enable') {
    this.setAttribute('data-state', 'disable');
    infoBrif.delete(this.textContent);
  }
  else {
    this.setAttribute('data-state', 'enable');
    infoBrif.add(this.textContent);
  }

  projectField.setAttribute('data-value-proj', `${Array.from(infoBrif)}`);
}

function checkFormsHandler() {
  checkFields.forEach(el => {
    if (el.value === '') el.setAttribute('data-state', 'invalid'); // el.getAttribute('value-proj') === 'invalid'
    else el.setAttribute('data-state', 'valid');
  });

// проверка каждого элемента (требующего валидации) на заполненность
  let sendFlag = checkFields.every(el => el.getAttribute('data-state') === 'valid');

  if (sendFlag) {
  // проверка всех полей и отправка данных fieldsObj
    sendFields.forEach(el => {
      el.getAttribute('data-send-field') === 'project' ? fieldsObj[el.getAttribute('data-send-field')] = el.getAttribute('data-value-proj') : fieldsObj[el.getAttribute('data-send-field')] = el.value;
      if (el.getAttribute('data-send-field') === 'name' && nameUser) nameUser.textContent = el.value;
    });

    fieldsObj.type = this.getAttribute('data-type-form');
    sendForms(JSON.stringify(fieldsObj));
  }
};

function sendForms(obj) {
  // скролл к верхней части блока
  if (window.matchMedia("(max-width: 767px)").matches) {
    let topScrollBlock = scrollBlock.getBoundingClientRect().top + pageYOffset - 100;
    window.scrollTo(0, topScrollBlock);
  }

  axios({
      method: 'post',
      url: '/back/send.php',
      data: ` data=${obj} `
    }).then((response) => {
      console.log(response.data);
    });

  formMail.style.display = 'none';
  formSuccess.style.display = 'block';
  resetForm();
}

function resetForm() {
  let form = formMail.getElementsByTagName(`form`);
  form[0].reset();

  selectorsBrif.forEach(el => el.setAttribute('data-state', 'disable'));
  if (projectField) {
    infoBrif.clear();
    projectField.setAttribute('data-value-proj', '');
  }
}

function sendFormsAgainHandler() {
  formMail.style.display = '';
  formSuccess.style.display = 'none';
}

function validInputHandler() {
  this.setAttribute('data-state', '');
}
