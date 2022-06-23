const emailVal = document.querySelector('.email');

validate.addEventListener('click', () => {
    if (emailVal === emailVal.lower()) {
        alert("Please enter email as lower case eg. manar.qasem732016@gmail.com")
    }
});