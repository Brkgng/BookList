import { createBookCard } from "./createBookCard.js";

// Default Books
const book1 = {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    pages: "310",
    hasRead: true,
};
const book2 = {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    pages: "374",
    hasRead: false,
};

const cardGroup = document.querySelector(".cardGroup");
const formBtn = document.querySelector("#plusCircle");
const form = document.querySelector(".bookForm");
const submitBtn = document.querySelector("#submitBtn");
let books = [];

function loadBookList() {
    // Check localStorage
    // If no books on page, load the default books
    if (localStorage.getItem("books") === null) {
        books = [book1, book2];
        updateLocalStorage();
    } else {
        books = JSON.parse(localStorage.getItem("books"));
    }

    renderBooks();
}

function updateLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
}

function renderBooks() {
    books.forEach((book) => {
        cardGroup.appendChild(createBookCard(book));
    });
}

function toggleForm() {
    this.classList.toggle("fa-rotate-45");
    form.classList.toggle("active");
}

function appendBookCard(button) {
    button.preventDefault();

    const book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        pages: document.getElementById("pages").value,
        hasRead: document.getElementById("read").checked,
    };
    books.push(book);

    cardGroup.appendChild(createBookCard(book));
    updateLocalStorage();

    form.reset();
    formBtn.click();
}

function clickCard(book) {
    if (book.target && book.target.className == "card-hasRead") {
        toggleRead(book);
        return;
    }

    if (book.target && book.target.classList[2] == "delete-card") {
        deleteCard(book);
        return;
    }
}

function toggleRead(bookHasRead) {
    if (bookHasRead.target.textContent == "read") {
        bookHasRead.target.textContent = "not read";
        bookHasRead.target.style.color = "rgb(164, 6, 6)";
    } else {
        bookHasRead.target.textContent = "read";
        bookHasRead.target.style.color = "rgb(255, 98, 0)";
    }
}

function deleteCard(book) {
    books = books.filter((book) => {
        return book.title != book.target.parentElement.firstChild.innerText;
    });
    updateLocalStorage();
    book.target.parentElement.remove();
}

formBtn.addEventListener("click", toggleForm);
submitBtn.addEventListener("click", appendBookCard);
cardGroup.addEventListener("click", clickCard);

loadBookList();
