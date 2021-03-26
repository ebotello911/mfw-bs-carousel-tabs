const form = document.querySelector('#contact form');
let newMessageObject = {
    _name: '',
    email: '',
    message: ''
}
console.log(nameInput, emailInput,messageInput);

// nameInput.addEventListener('keydown', () => nameInput.value)

form.addEventListener('submit', evnt => {
    // Stops the window from reloading
    evnt.preventDefault();
    newMessageObject = {
        _name: form.querySelector('#nameInput').value,
        email: form.querySelector('#emailInput').value,
        message: form.querySelector('#messageInput').value
    }
    
    const { _name, email, message } = newMessageObject
    
    popupBox = document.querySelector('[data-form-confirmation-popup]');
    popupBox.innerHTML = createPopUp(_name, email, message);
})

function createPopUp(name, email, message) {
    const nameText = document.createElement('p').innerText= name;
    const emailText = document.createElement('p').innertText=email;
   const messageText = document.createElement('p').innerText=message;
    const info = 'Thank you for your submission. Your receipt number is #. Please allow 10 to 15 days for a response. The following is a transcript of your form submission.';
    const response = `
    ${info}\n
    ${nameText}\n
    ${emailText}\n
    ${messageText}
    `
    return response;
}

