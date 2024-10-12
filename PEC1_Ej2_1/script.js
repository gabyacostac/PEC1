const form = document.getElementById('form');
const username = document.getElementById('username');
const age = document.getElementById('age');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
  const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  if(re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Enter a valid email adress');
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(input => {
    if(input.value.trim() === '') {
      showError (input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  })
}

// Check length
function checkLenght(input, min, max) {
  if(input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if(input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// Check passwrds match
function checkPasswordMatch(input1, input2) {
  if(input1.value === input2.value) {
    showSuccess(input2);
  } else {
    showError(input2, 'Passwords do not match');
  }
}

//Check password is valid
function checkPassword(input) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@$%^&*()_+\-={}|[\]\\:";'<>?,./]).{8,}$/;
  if(re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, 'Your password should be at least 8 characters long and contain uppercase and lowercase letters, symbols and numbers');
  }

}

// Check age
function checkAge(input, min, max) {
  if(input.value < min || input.value > max) {
    showError(input, 'Enter a valid age')
  } else {
    showSuccess(input);
  }
}

// Get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// Event listeners 
form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLenght(username, 3, 15);
  checkEmail(email);
  checkPasswordMatch(password, password2);
  checkPassword(password);
  checkAge(age, 0, 1000);
})