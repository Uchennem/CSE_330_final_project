const loginForm = document.getElementById("login_form");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission
  const username = document.getElementById("username_input").value;
  const password = document.getElementById("password_input").value;

  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
    const data = await response.json();

    const user = data.find((user) => user.userName === username && user.password === password);

    if (user) {
      console.log(user)
      sessionStorage.setItem('userId', user.id)
      // Redirect to Smart Notes List page
      window.location.href = "http://localhost:5500/create_notes.html";
    } else {
      alert("Incorrect username or password");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
});