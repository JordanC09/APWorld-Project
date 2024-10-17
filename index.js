const DOMSelectors = {
    button: document.querySelectorAll(".btn"),
}
DOMSelectors.button.addEventListener("click", function (event) {
    console.log(event.target.parentElement);
    event.target.parentElement.style.backgroundColor = "red";
  });