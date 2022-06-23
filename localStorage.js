const form = document.querySelector('.ContactForm');

const { userName, email, msg } = form.elements;

if (!localStorage.getItem('formObjectData')) {
  const formData = { fnameData: '', emailData: '', messageData: '' };
  localStorage.setItem('formObjectData', JSON.stringify(formData));
}

const reservedata = (element, val) => {
  element.addEventListener('change', () => {
    const data = element.value;
    const formData = JSON.parse(localStorage.getItem('formObjectData'));
    formData[val] = data;
    localStorage.setItem('formObjectData', JSON.stringify(formData));
 });
};

reservedata(userName, 'fnameData');
reservedata(email, 'emailData');
reservedata(msg, 'messageData');
