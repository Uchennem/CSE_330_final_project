
const user_id = sessionStorage.getItem('userId')

document.addEventListener("DOMContentLoaded", () => {
    // Get user's first name from JSON server
    const getUser = async () => {
      try {
        const response = await fetch(`http://localhost:3000/users/${user_id}`);
        const user = await response.json();
        const firstName = user.firstName;
  
        // Display welcome message
        const welcomeMessage = document.getElementById("welcome");
        welcomeMessage.textContent = `Welcome to SmartNotes, ${firstName}!`;
  
        // Logout button event listener
        const logoutButton = document.getElementById("logout_btn");
        logoutButton.addEventListener("click", () => {
          localStorage.removeItem("user");
          window.location.href = "http://localhost:5500/";
        });
  
        // All notes button event listener
        const allNotesButton = document.getElementById("all_notes_btn");
        allNotesButton.addEventListener("click", () => {
          window.location.href = "http://localhost:5500/all_notes.html";
        });
  
        // Load user's notes
        const notesList = document.getElementById("notes_list");
        loadNotes(notesList);
  
        // Create note form event listener
        const createNoteForm = document.getElementById("note_form");
        createNoteForm.addEventListener("submit", async (event) => {
          event.preventDefault(); // Prevent default form submission
          const title = document.getElementById("note_title").value;
          const content = document.getElementById("note_content").value;
  
          try {
            const response = await fetch(`http://localhost:3000/users/${user_id}/notes`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                title: title,
                content: content
              })
            });
            const data = await response.json();
  
            if (response.ok) {
              // Reload notes list
              notesList.innerHTML = "";
              loadNotes(notesList);
  
              // Reset create note form
              createNoteForm.reset();
            } else {
              alert(data.message);
            }
          } catch (error) {
            console.error("Error creating note:", error);
          }
        });
  
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    const loadNotes = async (notesList) => {
      try {
        const response = await fetch(`http://localhost:3000/users/${user_id}/notes`);
        const notes = await response.json();
        
        // Display notes as links
        // notes.forEach(note => {
        //   const noteLink = document.createElement('a');
        //   noteLink.textContent = note.title;
        //   noteLink.href = `./note.html?id=${note.id}`;
        //   notesList.appendChild(noteLink);
        //   notesList.appendChild(document.createElement('br'));
        // });
        
      } catch (error) {
        console.error("Error loading notes:", error);
      }
    };
  
    getUser();
  });