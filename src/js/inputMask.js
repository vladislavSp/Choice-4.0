let nameField = document.querySelector('[send-field="name"]');
// let mailField = document.querySelector('[send-field="mail"]');

if (nameField) {
  var maskNameOptions = {
    mask: /[^0-9.]/g
  };

  var maskName = IMask(nameField, maskNameOptions);
}
