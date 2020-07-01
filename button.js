const buttons = document.querySelectorAll("button");
const containers = document.querySelectorAll(".sidebar__submenus");
const subMenus = document.querySelectorAll(".sidebar__link");

// console.log(buttons, buttons[1]);
// console.log(typeof buttons);
// not only object but also array

buttons.forEach(function (button, index) {
  const changeButtonClassName = () => {
    button.classList.toggle("open");
    if (button.className.includes("open")) {
      button.nextElementSibling.style.transform = "rotate(180deg)";
      containers[index].style.display = "block";
    } else {
      button.nextElementSibling.style.transform = "rotate(0deg)";
      containers[index].style.display = "none";
    }
  };
  button.addEventListener("click", changeButtonClassName);
});

subMenus.forEach((subMenu) => {
  const changeSubMenuColor = () => {
    if (subMenu.href === location.href) {
      subMenu.style.color = "#04456a";
    }
  };
  subMenu.addEventListener("click", changeSubMenuColor);
});
