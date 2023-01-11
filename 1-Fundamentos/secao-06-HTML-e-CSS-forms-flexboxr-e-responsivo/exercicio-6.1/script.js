const submitBtn = document.querySelector('#submit-btn');
const elements = document.querySelector('input');
const textArea = document.querySelector('textarea');
const clearBtn = document.querySelector('#clear-btn');
const agreement = document.querySelector('#agreement');
const email = document.querySelector('#email');
const fullName = document.querySelector('#fullName');
const reason = document.querySelector('#why');

const textValidation = () => {
  email.value.length;
  const invalidEmail = email < 10 || email > 50;
  fullName.value.length;
  const invalidFullName = fullName < 10 || fullName > 40;
  reason.value.length;
  const invalidReason = reason > 500;
  if (invalidEmail || invalidFullName || invalidReason) {
    return false;
  } 
  else {
    return true;
  }
}

const prepareSubmit = (event) => {
  event.preventDefault();
  const validation = textValidation();
  if (validation === false) {
    alert ('Dados inválidos');
  } else {
    alert ('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}

const clearInfos = () => {
  for (let index = 0; index < elements.length; index += 1) {
    const userInput = elements[index];
    if (elements[index].type === 'radio' || elements[index].type === 'checkbox') {
      userInput.checked = false;
    } else {
      userInput.value = '';
    }
  }
  textArea.value = '';
}

const enableSubmit = () => {
  submitBtn.disabled = !agreement.checked;
}

window.onload = () => {
  submitBtn.addEventListener('click', prepareSubmit);
  clearBtn.addEventListener('click', clearInfos);
  agreement.addEventListener('change', enableSubmit);
}