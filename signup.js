const signupForm = document.getElementById('signup-form');
const password = document.getElementById('password');
const confirmation = document.getElementById('confirm-password');
const customers = [];

function checkPasswords() {
    confirmation.setCustomValidity(confirmation.value !== password.value ? 'Passwords must match.' : '');
}

password.addEventListener('input', checkPasswords);
confirmation.addEventListener('input', checkPasswords);

signupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    checkPasswords();
    if (!signupForm.reportValidity()) return;

    const customer = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('signup-email').value,
        phone: document.getElementById('signup-phone').value,
        membership: document.getElementById('membership').value,
        trainingInterest: document.getElementById('training-interest').checked
    };
    customers.push(customer);
    console.clear();
    console.log(customers);

    document.getElementById('signup-result').textContent = 'Your signup passed validation. This is a demo only; no account was created and no information was saved.';
    signupForm.reset();
    confirmation.setCustomValidity('');
});
