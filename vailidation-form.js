const submitBtn = document.querySelector('.btn');
const validateEmail = (email) => {
  return (email.match(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/));
};

submitBtn.addEventListener('click', () => {
  const emailVal = document.getElementById('mail').value;
  if (!validateEmail(emailVal)) {
    document.querySelector('.txtt').innerHTML = ' please enter correct email in lower case eg abcde@fgh.com';
  }
});
