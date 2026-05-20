import { loadPage } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./aboutUs.js";
import "./styles.css";

loadPage();

const header = document.getElementById("header");

header.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const tabName = e.target.textContent;

        if (tabName === "Home") {
            header.innerHTML = ""
            loadPage();
        } 
        else if (tabName === "Menu") {
            loadMenu();
        } 
        else if (tabName === "About Us") {
            loadAbout();
        }
    }
});