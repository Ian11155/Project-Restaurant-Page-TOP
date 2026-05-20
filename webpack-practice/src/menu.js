export function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = ""; 

    // Menu Container
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Our Menu";
    menuTitle.classList.add("menu-title");
    
    menuContainer.appendChild(menuTitle);

    const item1 = document.createElement("div");
    item1.classList.add("menu-item");

    const title1 = document.createElement("h2");
    title1.textContent = "Trimmed Entrecôte Steak — $38.80";

    const desc1 = document.createElement("p");
    desc1.textContent = "Our crown jewel – the famous Arges Steakhouse steak with our legendary secret sauce generously poured over tender sliced steak. Served with golden French fries and green salad with walnuts.";

    const highlight1 = document.createElement("p");
    highlight1.textContent = "*Fries are Free Flow! Just ask for more*";
    highlight1.classList.add("highlight");

    const addon1 = document.createElement("p");
    addon1.textContent = "Top your steak with pan-seared foie gras for an extra touch of luxury (Rossini style) + $12";
    addon1.classList.add("italic-note");

    item1.append(title1, desc1, highlight1, addon1);

    const item2 = document.createElement("div");
    item2.classList.add("menu-item");

    const badge2 = document.createElement("span");
    badge2.textContent = "Limited-Time Special";
    badge2.classList.add("badge");

    const title2 = document.createElement("h2");
    title2.textContent = "Stockyard Angus Tenderloin Steak — $58.00";

    const desc2 = document.createElement("p");
    desc2.textContent = "Award-winning Stockyard Angus tenderloin, served with our legendary secret sauce and crisp French fries.";

    const donenessSubtitle = document.createElement("h3");
    donenessSubtitle.textContent = "Choose your doneness:";
    donenessSubtitle.classList.add("doneness-title");

    const donenessOptions = document.createElement("p");
    donenessOptions.textContent = "Bleu (rare) · Saignant (medium rare) · À point (medium) · Bien cuit (well done)";
    
    const note2 = document.createElement("p");
    note2.textContent = "Please note: French-style doneness is slightly rarer than American or Western standards.";
    note2.classList.add("italic-note");

    item2.append(badge2, title2, desc2, donenessSubtitle, donenessOptions, note2);

    // Append everything to the DOM 
    menuContainer.append(item1, item2);
    content.appendChild(menuContainer);
}