function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return title + " By " + author + ", " + pages + " pages, " + read;
    }; 

}

const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    const table = document.createElement('table');
    table.classList.add('book-table');

    const headerRow = table.insertRow(0);
    headerRow.innerHTML = '<th>Title</th><th>Author</th><th>Pages</th><th>Read</th><th>Actions</th>';

    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const row = table.insertRow(i + 1);
        row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td><td>${book.read}</td>
                        <td>
                            <button class="remove-button" onclick="removeBook(${i})">Remove</button>
                            <button class="toggle-read-button" onclick="toggleRead(${i})">Toggle Read</button>
                        </td>`;
    }

    const displayArea = document.getElementById('bookDisplay');
    displayArea.innerHTML = '';
    displayArea.appendChild(table);
}

function showForm() {
    const newBookForm = document.getElementById('modal');
    newBookForm.style.display = 'block';
}

function addNewBook(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    addBookToLibrary(title, author, pages, read);
    displayBooks();

    // Hide the form after adding the book
    document.getElementById('newBookForm').style.display = 'none';
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

Book.prototype.toggleRead=function() {
    this.read = this.read === 'read' ? 'not read yet' : 'read';
};
function toggleRead(index) {
    myLibrary[index].toggleRead();
    displayBooks();
}
// Initial books in the library
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281', 'read');
addBookToLibrary('1984', 'George Orwell', '328', 'read');

// Display initial books
displayBooks();
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
