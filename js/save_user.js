function saveUser() {
  // Get the username and password from the input fields
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Read the existing JSON file
  fetch('/users.json')
    .then(response => response.json())
    .then(data => {
      // Check if the username already exists
      const existingUser = data.users.find(user => user.username === username);

      if (existingUser) {
        console.error('Username already exists');
      } else {
        // Add the new user to the array of users
        const newUser = {
          "username": username,
          "password": password
        };
        data.users.push(newUser);

        // Convert the updated data to JSON
        const jsonData = JSON.stringify(data);

        // Write the updated data back to the JSON file
        fetch('/users.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: jsonData
        })
          .then(response => {
            console.log('New user added successfully');
          })
          .catch(error => {
            console.error('Error adding new user:', error);
          });
      }
    })
    .catch(error => {
      console.error('Error reading JSON file:', error);
    });
}