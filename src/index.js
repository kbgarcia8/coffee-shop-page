import Navigation from "./navigation";
import './style.css';

const navButtons = document.querySelectorAll(".navigation-button");
const myNavigation = new Navigation();

window.onload = function() {
    // Code to be executed when the page loads
    alert('Welcome to K Coffee!');
    myNavigation.home();
  };
navButtons.forEach(function(navButton, index) {
    navButton.addEventListener("click", function() {
        let window = navButton.textContent;
        if (window == "Home") {
            console.log(window+" page active again");
            myNavigation.home();
        } else if (window == "Menu") {
            console.log(window+" page active");
            myNavigation.menu();
        } else if (window == "Services") {
            console.log(window+" page active");
            myNavigation.services();
        } else {
            console.log("No page assigned to clicked navigation button");
        }
    });
});
