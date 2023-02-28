import throttle from 'lodash.throttle';

const warehouse = 'feedback-form-state'
const form = document.querySelector('.feedback-form')

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(warehouse)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(event) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(warehouse, JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert(`Будь ласка, заповніть всі обов'язкові поля.`);
  }

  localStorage.removeItem(warehouse);
  event.currentTarget.reset();
  dataForm = {};
}