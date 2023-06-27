const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy-btn');
const resultView = document.getElementById('result');
const lengthInput = document.querySelector('.length__title');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numberCheckbox = document.getElementById('number');
const symbolCheckbox = document.getElementById('symbol');
const infoLeft = document.querySelector('.result__info.left');
const infoRight = document.querySelector('.result__info.right');

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_-+=<>?/{}';

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyToClipboard);

function generatePassword() {
  const length = document.getElementById('slider').value;
  const includeUppercase = uppercaseCheckbox.checked;
  const includeLowercase = lowercaseCheckbox.checked;
  const includeNumber = numberCheckbox.checked;
  const includeSymbol = symbolCheckbox.checked;

  let characters = '';
  let password = '';

  if (includeUppercase) {
    characters += uppercaseLetters;
  }

  if (includeLowercase) {
    characters += lowercaseLetters;
  }

  if (includeNumber) {
    characters += numbers;
  }

  if (includeSymbol) {
    characters += symbols;
  }

  if (characters === '') {
    alert('Please select at least one character type.');
    return;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  resultView.textContent = password;
}

function copyToClipboard() {
  const password = resultView.textContent;
  if (password !== '') {
    navigator.clipboard.writeText(password).then(function() {
      infoLeft.style.opacity = 1;
      setTimeout(() => {
        infoLeft.style.opacity = 0;
      }, 1500);
    });
  }
}
