export function createElement(tag, className, text = "") {
    let element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    return element;
}
