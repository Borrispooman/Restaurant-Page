import "./styles.css";
import "./reset.css";
import { homeContentLoad } from "./page-load-home.js";
import { menuContentLoad } from "./page-load-menu.js";
import { contactContentLoad } from "./page-load-contact.js"
homeContentLoad();

const menuButton = document.querySelector("#menu-btn")
menuButton.addEventListener("click", () => {
	menuContentLoad();
});

const homeButton = document.querySelector("#home-btn")
homeButton.addEventListener("click", () => {
	homeContentLoad();
});

const contactButton = document.querySelector("#contact-btn")
contactButton.addEventListener("click", () => {
	contactContentLoad();
});


