//variables
const container = document.querySelector('.container');
const successMessage = document.querySelector('.success-message');
const submit = document.getElementById('submit');
const reset = document.getElementById('second-span')
const dismissMessage = document.getElementById('Dismiss');
const form = document.getElementById('form');
const emailField = document.getElementById('Email');
const error = document.getElementById('email-error-message')







//Event listeners 
/*submit.addEventListener('click', function() {

    const validateForm = document.forms['Email-form']['Email'].value;

    if(validateForm === "") {
        alert('Please enter your email');
        return false
    }  else {
        container.style.display ="none";
        successMessage.style.display ="block";

        reset.innerText = ` ${validateForm} `
    }
    
});

dismissMessage.addEventListener('click', function() {
    successMessage.style.display ="none";
    
        
})*/

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const EmailInputValue = emailField.value;

    if(EmailInputValue.includes('@')) {
        container.style.display ="none";
        successMessage.style.display ="block";

        reset.innerText = ` ${EmailInputValue} `
    } else if (EmailInputValue === "") {
        error.style.visibility = "visible";
        emailField.style.borderColor = "red";
        emailField.style.backgroundColor = "rgba(255, 0, 0, 0.2)"
        return false;
    }
    
})