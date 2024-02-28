/* function Book(title, author, pages, read,completedPages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.completedPages=completedPages
    this.info = function() {
        return title + " By " + author + ", " + pages + " pages, " + read;
    }; 

}
 */
// Refactor it to class folowing the odin project practice in classes..
class Book {
    constructor(title,author,pages,read,completedPages){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.completedPages=completedPages
    }
    info(){
        return this.title + " By " + this.author + ", " + this.pages + " pages, " + this.read;
    }

}
let myLibrary = [];

function addBookToLibrary(title, author, pages, read,completedPages) {
    if(read=='read'){
        completedPages=pages
    }
    const newBook = new Book(title, author, pages, read,completedPages);
    myLibrary.push(newBook);
}

function displayBooks() {

    let countRead=0
    let countPages=0
    let countCompletedPages=0
    var book_box_container=document.createElement('div')
    book_box_container.classList.add('book-box-container')
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        var book_box=document.createElement('div')
        book_box.classList.add('book-box')
        book_box.innerHTML = 
        `<div class="edit-remove-btns">
            <div class="edit book-btn" onclick='editbook(${i})'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>book-edit-outline</title><path d="M6 20H11V22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H18C19.11 2 20 2.9 20 4V10.3C19.78 10.42 19.57 10.56 19.39 10.74L18 12.13V4H13V12L10.5 9.75L8 12V4H6V20M22.85 13.47L21.53 12.15C21.33 11.95 21 11.95 20.81 12.15L19.83 13.13L21.87 15.17L22.85 14.19C23.05 14 23.05 13.67 22.85 13.47M13 19.96V22H15.04L21.17 15.88L19.13 13.83L13 19.96Z" /></svg></div>
            <div class="remove book-btn" onclick='removeBook(${i})'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>book-remove-outline</title><path d="M13.09 20C13.21 20.72 13.46 21.39 13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H18C19.11 2 20 2.9 20 4V13.09C19.67 13.04 19.34 13 19 13C18.66 13 18.33 13.04 18 13.09V4H13V12L10.5 9.75L8 12V4H6V20H13.09M22.54 16.88L21.12 15.47L19 17.59L16.88 15.47L15.47 16.88L17.59 19L15.47 21.12L16.88 22.54L19 20.41L21.12 22.54L22.54 21.12L20.41 19L22.54 16.88Z" /></svg></div>
        </div>
        <div class="book-body">
            <div class="book-name">${book.title}</div>
            <div class="book-author">${book.author}</div>
        </div>
        <div class="book-control-btns">
            <div class="minus book-btn" onclick='decreasepages(${i})' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>file-minus-outline</title><path d="M13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H14L20 8V13.09C19.67 13.04 19.34 13 19 13S18.33 13.04 18 13.09V9H13V4H6V20H13.09C13.21 20.72 13.46 21.39 13.81 22M23 18H15V20H23V18Z" /></svg></div>
            <div class="done book-btn" onclick='increasefullpages(${i})'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>book-check-outline</title><path d="M16.75 22.16L14 19.16L15.16 18L16.75 19.59L20.34 16L21.5 17.41L16.75 22.16M18 2C19.1 2 20 2.9 20 4V13.34C19.37 13.12 18.7 13 18 13V4H13V12L10.5 9.75L8 12V4H6V20H12.08C12.2 20.72 12.45 21.39 12.8 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2H18Z" /></svg></div>
            <div class="plus book-btn" onclick='increasepages(${i})'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>file-plus-outline</title><path d="M13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H14L20 8V13.09C19.67 13.04 19.34 13 19 13S18.33 13.04 18 13.09V9H13V4H6V20H13.09C13.21 20.72 13.46 21.39 13.81 22M23 18H20V15H18V18H15V20H18V23H20V20H23V18Z" /></svg></div>
        </div>
        <div class="book-pages">
            <div class="read-pages">${book.completedPages}</div>|
            <div class="pages">${book.pages}</div>
        </div>`
        ;
        book_box_container.appendChild(book_box)                  
        if(book.read==='read'){
            countRead+=1
        }
        countPages+=parseInt(book.pages)
        countCompletedPages+=parseInt(book.completedPages)
    }
    document.getElementById('book-count').innerHTML=myLibrary.length
    document.getElementById('c-book-count').innerHTML=countRead
    document.getElementById('pages-count').innerHTML=countPages
    document.getElementById('c-pages-count').innerHTML=countCompletedPages
    const displayArea = document.getElementById('bookDisplay');
    displayArea.innerHTML = '';
    var add_book=document.createElement('div')
    add_book.innerHTML=
    `<div id="add-book-box">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
    </div>`
    add_book.addEventListener('click',()=>{
        const newBookForm = document.getElementById('modal');
        newBookForm.style.display = 'block';
    })
    book_box_container.appendChild(add_book);

    displayArea.appendChild(book_box_container);
}

function addNewBook(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;
    const completedPages= document.getElementById('completed-pages').value

    addBookToLibrary(title, author, pages, read,completedPages);
    displayBooks();

    document.getElementById('newBookForm').style.display = 'none';
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}
function decreasepages(index){
    if(myLibrary[index].completedPages>0)
        myLibrary[index].completedPages=parseInt(myLibrary[index].completedPages)-1
        displayBooks();
}
function increasepages(index){
    if(myLibrary[index].completedPages<myLibrary[index].pages)
    myLibrary[index].completedPages=parseInt(myLibrary[index].completedPages)+1
    displayBooks();
}
function increasefullpages(index){
    myLibrary[index].completedPages=myLibrary[index].pages
    displayBooks();
}
function editbook(index){
    openModal()
    removeBook(index)

}

Book.prototype.toggleRead=function() {
    this.read = this.read === 'read' ? 'not read yet' : 'read';
};
function toggleRead(index) {
    myLibrary[index].toggleRead();
    displayBooks();
}
// Initial books in the library
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet','20');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', '281', 'read','40');
addBookToLibrary('1984', 'George Orwell', '328', 'read','324');

// Display initial books
displayBooks();
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}


//delete storage btn
document.querySelector('#clear').addEventListener('click',() =>{
    myLibrary.splice(0,myLibrary.length);
    displayBooks();
    console.log(myLibrary)
})