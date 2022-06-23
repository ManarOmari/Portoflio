const submitBtn = document.querySelector('.btn');
const validateEmail = (email) => {
    return email.toLowercase();
  }

submitBtn.addEventListener('click', () => {
  const emailVal = document.getElementById('mail').value;
  if (!validateEmail(emailVal)) {
    window.alert(
        'Please enter email as lower case eg. manar.omari@gmail.com'
      );
  }
});
