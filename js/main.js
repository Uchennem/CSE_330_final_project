

// create a new document object
function createpage() {
    var newPage = document.implementation.createHTMLDocument("New Page");

    // create a new element
    var h1 = newPage.createElement("h1");
    h1.innerHTML = "This is a new page!";

    // add the element to the new page
    newPage.body.appendChild(h1);

    // set the current document's HTML to the new page's HTML
    document.documentElement.innerHTML = newPage.documentElement.innerHTML;

    function createNotePage() {
        // create a new page element
        const page = document.createElement('div');
      
        // create form element with title input, body textarea, and save button
        const form = document.createElement('form');
      
        // create title input element
        const titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('placeholder', 'Enter title');
        titleInput.setAttribute('name', 'title');
      
        // create body textarea element
        const bodyTextarea = document.createElement('textarea');
        bodyTextarea.setAttribute('placeholder', 'Enter note body');
        bodyTextarea.setAttribute('name', 'body');
      
        // create save button element
        const saveButton = document.createElement('button');
        saveButton.setAttribute('type', 'submit');
        saveButton.textContent = 'Save note';
      
        // add title input, body textarea, and save button to form
        form.appendChild(titleInput);
        form.appendChild(bodyTextarea);
        form.appendChild(saveButton);
      
        // add form to page
        page.appendChild(form);
      
        // add page to body of document
        document.body.appendChild(page);
    }

    createNotePage()
}
  
// const createNote = document.getElementById("create_note")
// createNote.addEventListener("click", createNotePage)

const createPage = document.getElementById("create_note")
createPage.addEventListener("click", createpage)