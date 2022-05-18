const validateForm = (() => {
    const email = document.getElementById('email');
    const country = document.getElementById('country');
    const zip = document.getElementById('zip');
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('passwordConfirm');
    const submit = document.getElementById('submit');
    const form = document.getElementsByTagName('form')[0];
    const emailError = document.getElementById('emailError');
    const countryError = document.getElementById('countryError');
    const zipError = document.getElementById('zipError');
    const passwordError = document.getElementById('passwordError');
    const passwordConfirmError = document.getElementById('passwordConfirmError');
 
    form.noValidate = true;

    submit.addEventListener('click', validate);
    email.addEventListener('input', validateEmail);
    country.addEventListener('input', validateCountry);
    zip.addEventListener('input', validateZip);
    password.addEventListener('input', validatePassword);
    passwordConfirm.addEventListener('input', validatePasswordConfirm);

    function validate(e) {

        if (form.checkValidity()) {
            alert('High five - form submitted successfully');

        } else {
            e.preventDefault();
            validateEmail();
            validateCountry();
            validateZip();
            validatePassword();
            validatePasswordConfirm();
        }
        
    }

    function validateEmail() {
        if (email.validity.typeMismatch || email.value === '') {
            emailError.textContent = 'Please enter a valid email';
            email.classList.add('error');
        } else {
            email.classList.remove('error');
            emailError.textContent = '';
        }
    }

    function validateCountry() {
        if (country.value === '') {
            countryError.textContent = 'Please enter a country';
            country.classList.add('error');
        } else {
            country.classList.remove('error');
            countryError.textContent = '';
        }
    }

    function validateZip() {
        let zipRegex = /^\d{5}(?:[- ]?\d{4})?$/;

        if (zip.value === "" || !zipRegex.test(zip.value)) {
            zipError.textContent = 'Please enter a valid zip code';
            zip.classList.add('error');
        } else {
            zip.classList.remove('error');
            zipError.textContent = '';
        }

    }

    function validatePassword() {
        if (password.value === '') {
            passwordError.textContent = 'Please enter a password';
            password.classList.add('error');
        } else if (password.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters';
            password.classList.add('error');
        } else {
            password.classList.remove('error');
            passwordError.textContent = ''; 
        }

    }

    function validatePasswordConfirm() {
        if (passwordConfirm.value === '') {
            passwordConfirmError.textContent = 'Please confirm password';
            passwordConfirm.classList.add('error');
        }else if (passwordConfirm.value !== password.value) {
            passwordConfirmError.textContent = 'Password confirmation does not match password';
            passwordConfirm.classList.add('error');
        } else {
            passwordConfirm.classList.remove('error');
            passwordConfirmError.textContent = ''; 
        }
    }

})();