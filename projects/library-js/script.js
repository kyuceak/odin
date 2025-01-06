


const myLibrary = [];

const tbody = document.querySelector(".body");

function Book(title,author,pages,isread){

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isread = isread;
}


Book.prototype.toggleRead = function() {

    this.isread = this.isread == "not read yet" ? "already read":"not read yet";

}

function addBookToLibrary(title,author,pages,isread){
    
    const book = new Book(title,author,pages,isread);

    myLibrary.push(book);
}



addBookToLibrary("harry potter1","J. K. Rowling", 1000, "not read yet");

addBookToLibrary("lord of the rings","	J. R. R. Tolkien", 1000, "already read");


addBookToLibrary("Deep Work","Cal Newport", 300, "already read");



function loadBooks(){
    myLibrary.forEach( (book,index) =>{

      

        const row = document.createElement("tr");

        const title = document.createElement("td");
        title.textContent = book.title;


        const author = document.createElement("td");
        author.textContent = book.author;


        const pages = document.createElement("td");
        pages.textContent = book.pages;

        const isread = document.createElement("td");
        isread.textContent = book.isread;


        const removeCell = document.createElement("td");
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";

        removeCell.appendChild(removeButton);

        removeButton.setAttribute("data-index",index);


        removeButton.addEventListener("click", (e) => {

            const bookIndex = e.target.getAttribute("data-index");
            myLibrary.splice(bookIndex,1);
            tbody.textContent = "";
            loadBooks();

        });

        const toggleButton = document.createElement("button");
        toggleButton.textContent = "Toggle"
        toggleButton.setAttribute("data-index",index)

        toggleButton.addEventListener("click", (e) => {


            const bookIndex = e.target.getAttribute("data-index");
            console.log(bookIndex);
            myLibrary[bookIndex].toggleRead();
            tbody.textContent = "";
            loadBooks();

        });

        isread.appendChild(toggleButton);


        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(pages);
        row.appendChild(isread);
        row.appendChild(removeButton);
        

        
        tbody.appendChild(row);
    });
}


console.log(myLibrary);


loadBooks();

const modal = document.getElementById("modal");
const addBookBtn = document.getElementById("button");
const createBookBtn = document.getElementById("createbtn");
const bookForm = document.getElementById("bookForm");


addBookBtn.addEventListener("click", () => {
    modal.showModal();
});


createBookBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const title = document.getElementsByName("title")[0];
    const author = document.getElementsByName("author")[0];
    const pages = document.getElementsByName("pages")[0];
    const isread = document.getElementsByName("isread")[0];

    console.log(document.getElementsByName("isread")[0]);
    addBookToLibrary(title.value, author.value, pages.value, isread.value);

    bookForm.reset();
    tbody.textContent = "";
    loadBooks();
    

    modal.close();
});