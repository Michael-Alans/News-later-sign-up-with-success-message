//variables
const container = document.querySelector('.container');
const successMessage = document.querySelector('.success-message');
const submit = document.getElementById('submit');
const reset = document.querySelector('span')
const dismissMessage = document.getElementById('Dismiss');






//Event listeners 
submit.addEventListener('click', function() {

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
    
        
})

