const noteTableBody = document.getElementById("note_table_body");
const user_id = sessionStorage.getItem('userId')
const Card = document.getElementById("cards");

fetch(`http://localhost:3000/users/${user_id}/notes`)
  .then(response => response.json())
  .then(notes => {
    notes.forEach(note => {
      const newSection = document.createElement("section");
      const titleCol = document.createElement("h2");
      const contentCol = document.createElement("p");
      const editBtn = document.createElement("button");
      const deleteBtn = document.createElement("button");

      titleCol.innerText = note.title;
      contentCol.innerText = note.content;
      editBtn.innerText = "Edit";
      deleteBtn.innerText = "Delete";

      // Add click event listener to edit button
      editBtn.addEventListener("click", () => {
        const newTitle = prompt("Enter new title:", note.title);
        const newContent = prompt("Enter new content:", note.content);
        if (newTitle !== null || newContent !== null) {
          fetch(`http://localhost:3000/notes/${note.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: newTitle, content: newContent })
          })
          .then(response => response.json())
          .then(updatedNote => {
            // Update the title and content in the table cells
            titleCol.innerText = updatedNote.title;
            contentCol.innerText = updatedNote.content;
          })
          .catch(error => console.log(error));
        }
      });

      // Add click event listener to delete button
      deleteBtn.addEventListener("click", () => {
        fetch(`http://localhost:3000/notes/${note.id}`, {
          method: "DELETE"
        })
        .then(() => {
          // Remove the corresponding row from the table
          newRow.remove();
        })
        .catch(error => console.log(error));
      });

      newSection.appendChild(titleCol);
      newSection.appendChild(contentCol);
      newSection.appendChild(editBtn);
      newSection.appendChild(deleteBtn);

      Card.appendChild(newSection);
    });
  })
  .catch(error => console.log(error));

const logoutButton = document.getElementById('logout_btn');
logoutButton.addEventListener('click', function() {
  // Clear the session ID by setting it to null or deleting it from storage
  sessionStorage.removeItem('userID');

  // Redirect the user to the login page
  window.location.href = '../login.html';
});