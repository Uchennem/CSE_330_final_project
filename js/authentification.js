// Function to authenticate user
function authenticateUser(username, password) {
    // Read in JSON file containing user data
    fetch("users.json")
      .then(response => response.json())
      .then(data => {
        // Check if user exists in JSON file and password matches
        const user = data.find(user => user.username === username && user.password === password);
        if (user) {
          // Set cookie or session variable to indicate user is authenticated
          document.cookie = "authenticated=true";
          // Redirect to home page
          window.location.href = "home.html";
        } else {
          // Display error message
          const errorMessage = document.createElement("p");
          errorMessage.textContent = "Invalid username or password.";
          document.getElementById("login-form").appendChild(errorMessage);
        }
      })
      .catch(error => {
        // Display error message
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "There was an error logging in. Please try again later.";
        document.getElementById("login-form").appendChild(errorMessage);
      });
  }
  
  // Event listener for login form submission
  document.getElementById("login-form").addEventListener("submit", event => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    authenticateUser(username, password);
  });