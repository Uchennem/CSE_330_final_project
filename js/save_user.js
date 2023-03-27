// Read the existing JSON file
fetch('/users.json')
  .then(response => response.json())
  .then(data => {
    // Add the new user to the array of users
    const newUser = {
      "username": "newuser",
      "password": "newpassword"
    };
    data.users.push(newUser);

    // Convert the updated data to JSON
    const jsonData = JSON.stringify(data);

    // Write the updated data back to the JSON file
    fetch('users.json', {
      method: 'PUT',
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
  })
  .catch(error => {
    console.error('Error reading JSON file:', error);
  });