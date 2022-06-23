const form = document.querySelector('.form-info'); // class name of the form

const {fname, email, messagebox} = form.elements; // name of the form inputs


if (!localStorage.getItem('formObjectData')) {
    const formData = {fnameData:'',emailData:'',messageData:''}; // change name of object names to name of inputs 

    localStorage.setItem('formObjectData', JSON.stringify(formData));
}

const reservedata = (element, val) => {
    element.addEventListener('change', (e) =>{
    const data = element.value;
    const formData = JSON.parse(localStorage.getItem('formObjectData'));
    formData[val] = data;
    localStorage.setItem('formObjectData', JSON.stringify(formData));})
}

reservedata(fname, 'fnameData')
reservedata(email, 'emailData')
reservedata(messagebox, 'messageData')
