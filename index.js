const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  clearErrors();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const birthdate = document.getElementById("birthdate").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  const firstNameError = validateName(firstName);
  const lastNameError = validateName(lastName);
  const birthdateError = validatebirthdate(birthdate);
  const emailError = validateEmail(email);
  const passwordError = validatePassword(password);
  const confirmPasswordError = validateConfirmPassword(
    confirmPassword,
    password
  );

  if (firstNameError) {
    displayError("firstName-error", firstNameError);
  }
  if (lastNameError) {
    displayError("last-name-error", lastNameError);
  }
  if (birthdateError) {
    displayError("birthdate-error", birthdateError);
  }
  if (emailError) {
    displayError("email-error", emailError);
  }
  if (passwordError) {
    displayError("password-error", passwordError);
  }
  if (confirmPasswordError) {
    displayError("confirm-password-error", confirmPasswordError);
  }

  if (
    !firstNameError &&
    !lastNameError &&
    !birthdateError &&
    !emailError &&
    !passwordError &&
    !confirmPasswordError
  ) {
    const userData = {
      firstName: firstName,
      lastName: lastName,
      birthdate: birthdate,
      email: email,
      password: password,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
});

function clearErrors() {
  document.getElementById("firstName-error").innerHTML = "";
  document.getElementById("last-name-error").innerHTML = "";
  document.getElementById("birthdate-error").innerHTML = "";
  document.getElementById("email-error").innerHTML = "";
  document.getElementById("password-error").innerHTML = "";
  document.getElementById("confirm-password-error").innerHTML = "";
}

function displayError(elementId, errorMessage) {
  document.getElementById(elementId).innerHTML = errorMessage;
}

function validateName(name) {
  const minLength = 2;
  const maxLength = 25;

  if (!name) {
    return "Это поле обязательно для заполнения";
  }
  if (name.length < minLength || name.length > maxLength) {
    return `Имя должно содержать от ${minLength} до ${maxLength} символов`;
  }

  return "";
}

function validatebirthdate(birthdate) {
  if (!birthdate) {
    return "Это поле обязательно для заполнения";
  }
  if (new Date(birthdate) > new Date()) {
    return "Дата рождения не может быть в будущем";
  }

  return "";
}

function validateEmail(email) {
  if (!email) {
    return "Это поле обязательно для заполнения";
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return "Введите корректный email";
  }

  return "";
}

function validatePassword(password) {
  const minLength = 8;

  if (!password) {
    return "Это поле обязательно для заполнения";
  }
  if (password.length < minLength) {
    return `Пароль должен содержать минимум ${minLength} символов`;
  }
  if (!/[A-Z]/.test(password)) {
    return "Пароль должен содержать минимум одну заглавную букву";
  }
  if (!/\d/.test(password)) {
    return "Пароль должен содержать минимум одну цифру";
  }
  if (!/[!@#$%]/.test(password)) {
    return "Пароль должен содержать минимум один специальный символ (!, @, #, $, %)";
  }
  return "";
}

function validateConfirmPassword(confirmPassword, password) {
  if (!confirmPassword) {
    return "Это поле обязательно для заполнения";
  }
  if (confirmPassword !== password) {
    return "Пароли не совпадают";
  }

  return "";
}
