import steakImage from './assets/perfectly-grilled-steak-with-rosemary-peppercorns.jpg';

export function loadPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const header = document.getElementById("header");
    header.classList.add("header");

    const nav = document.createElement("nav");
    nav.classList.add("nav-links");
    
    const homeBtn = document.createElement("button");
    homeBtn.textContent = "Home";
    const menuBtn = document.createElement("button");
    menuBtn.textContent = "Menu";
    const aboutBtn = document.createElement("button");
    aboutBtn.textContent = "About Us";
    
    nav.append(homeBtn, menuBtn, aboutBtn);

    const logo = document.createElement("div");
    logo.classList.add("logo");
    logo.textContent = "Arges Steakhouse.";

    const contactBtn = document.createElement("button");
    contactBtn.classList.add("contact-btn");
    contactBtn.textContent = "Contact us";

    header.append(nav, logo, contactBtn);

    const main = document.createElement("main");
    main.classList.add("hero");

    const textArea = document.createElement("div");
    textArea.classList.add("hero-text");
    
    const headline = document.createElement("h1");
    headline.textContent = "'As interesting as a beef'";
    
    textArea.append(headline);

    const imageArea = document.createElement("div");
    imageArea.classList.add("hero-image");
    
    const plantImg = document.createElement("img");
    plantImg.src = steakImage; 
    plantImg.alt = "A beautiful potted plant";
    
    imageArea.appendChild(plantImg);

    main.append(textArea, imageArea);

    content.append(main);
}