const submitBtn = document.querySelector('.btn');
const validateEmail = (email) => {
  return email.match ( (
    /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:.[a-z0-9-]+)*$/
  )
  );
};

submitBtn.addEventListener('click', () => {
  const emailVal = document.getElementById('mail').value;

  if (!validateEmail(emailVal)) {
    window.alert(
      'Please enter email as lower case eg. manar.qasem732016@gmail.com',
    );
  }
});
