const loginForm = document.getElementById("login_form");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission
  const username = document.getElementById("username_input").value;
  const password = document.getElementById("password_input").value;

  try {
    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });
    const data = await response.json();

    if (response.ok) {
      // Redirect to Smart Notes List page
      window.location.href = "http://localhost:5500/notes_list.html";
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
});