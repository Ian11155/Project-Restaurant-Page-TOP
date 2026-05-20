export function loadAbout() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    const subtitle = document.createElement("p");
    subtitle.textContent = "Our Story";
    subtitle.classList.add("about-subtitle");

    const headline = document.createElement("h1");
    headline.textContent = "Serving with Passion Since 2010";
    headline.classList.add("about-headline");

    const para1 = document.createElement("p");
    para1.innerHTML = "Founded in 2002 by <strong>Lebron James</strong>, Arges Steakhouse \
    began as a charming Italian-style eatery located right in the heart of Serangoon, Singapore.";
    para1.classList.add("about-text");

    const para2 = document.createElement("p");
    para2.textContent = "Inspired by a beloved 1960s concept from italy, Arges Steakhouse \
    serves the iconic entrecôte steak—a premium cut of beef rib—paired with crispy golden fries and doused in our legendary secret sauce.\
     It's an ode to timeless Italian fare, brought to life with precision and passion.";
    para2.classList.add("about-text");

    aboutContainer.append(subtitle, headline, para1, para2);
    content.appendChild(aboutContainer);
}