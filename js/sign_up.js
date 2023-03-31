document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#signup-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("here");
    const userNameInput = document.querySelector('#uname');
    const firstNameInput = document.querySelector('#fname');
    const lastNameInput = document.querySelector('#lname');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');

    if (firstNameInput && lastNameInput && emailInput && passwordInput) {
      const inputData = {
        userName: userNameInput.value,
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        password: passwordInput.value
      };

      const jsonData = JSON.stringify(inputData);

      fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: jsonData
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok!');
        }
        // handle successful response
        window.location.href = 'http://localhost:5500/account_created.html';
      })
      .catch(error => {
        console.error('Error:', error);
        // handle error
      });
    }
  });
});