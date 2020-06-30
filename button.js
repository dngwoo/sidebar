const buttons = document.querySelectorAll("button");
const container = document.querySelectorAll(".sidebar__submenus");

// console.log(buttons, buttons[1]);
// console.log(typeof buttons);
// not only object but also array

buttons.forEach(function (button, index) {
  const changeButtonClassName = () => {
    button.classList.toggle("open");
    if (button.className.includes("open")) {
      button.nextElementSibling.style.transform = "rotate(180deg)";
      container[index].style.display = "block";
    } else {
      button.nextElementSibling.style.transform = "rotate(0deg)";
      container[index].style.display = "none";
    }
  };
  button.addEventListener("click", changeButtonClassName);
});
