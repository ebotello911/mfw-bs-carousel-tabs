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
    getMessage = createPopUp(_name, email, message);
    console.log('Get message: ', getMessage)
    popupBox.innerHTML = getMessage;
})

function createPopUp(name, email, message) {
    nameText = document.createElement('p').innerText= name;
    emailText = document.createElement('p').innertText=email;
   messageText = document.createElement('p').innerText=message;
    responseMessage = 'Thank you for your submission. Your receipt number is #. Please allow 10 to 15 days for a response. The following is a transcript of your form submission.';
    messageWrapper = `
    ${responseMessage}\n
    ${nameText}\n
    ${email}\n
    ${message}
    `
    return messageWrapper;
}

