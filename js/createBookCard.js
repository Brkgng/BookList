import { createElement } from "./createElement.js";

export function createBookCard(book) {
    let card = createElement("div", "book-card");
    let bookName = createElement("p", "card-name", book.title);
    let bookAuthorPages = createElement("div", "card-author-pages");
    let authorName = createElement("p", "", book.author);
    let bookPages = createElement("p", "pages", book.pages);
    let deleteCard = createElement(
        "div",
        "fas fa-trash-alt delete-card delete-card-active"
    );
    let read = createElement("p", "card-hasRead");

    if (book.hasRead) {
        read.textContent = "read";
        read.style.color = "rgb(255, 98, 0)";
    } else {
        read.textContent = "not read";
        read.style.color = "rgb(164, 6, 6)";
    }

    bookPages.textContent += " pages";

    card.setAttribute("id", book.title);
    card.appendChild(bookName);
    card.appendChild(bookAuthorPages);
    bookAuthorPages.appendChild(authorName);
    bookAuthorPages.appendChild(bookPages);
    card.appendChild(read);
    card.appendChild(deleteCard);

    return card;
}
