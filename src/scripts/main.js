import '../styles/style.css';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const form = document.querySelector('[data-js-form]');
const inputForm = document.querySelector('[data-js-form-input]');
const errorMessage = document.querySelector('[data-js-error-message]');

const validationEmail = (email) => EMAIL_REGEX.test(email);

const setError = (message) => {
  errorMessage.textContent = message;
  errorMessage.classList.remove('opacity-0');
  errorMessage.classList.add('opacity-100');
  inputForm.setAttribute('aria-invalid', 'true');
};

const clearError = () => {
  errorMessage.textContent = '';
  errorMessage.classList.remove('opacity-100');
  errorMessage.classList.add('opacity-0');
  inputForm.setAttribute('aria-invalid', 'false');
};

const onSubmitForm = (event) => {
  event.preventDefault();

  const email = inputForm.value.trim();

  if (!email) {
    setError('Oops! Please add your email');
    inputForm.focus();
    return;
  }

  if (!validationEmail(email)) {
    setError("Oops! That doesn't look like an email address");
    inputForm.focus();
    return;
  }

  clearError();
  console.log('Subscribed:', email);
  inputForm.value = '';
};

const onInputForm = () => {
  if (inputForm.getAttribute('aria-invalid', 'true') === 'true') {
    clearError();
  }
};

form.addEventListener('submit', (event) => onSubmitForm(event));
form.addEventListener('input', onInputForm);
