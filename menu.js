document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('.page-header');
    if (header) {
        // Create the hamburger icon and menu container dynamically
        const menuButton = document.createElement('button');
        menuButton.className = 'hamburger-icon';
        menuButton.innerHTML = 'thomas e fleming |';
        menuButton.style.color = 'rgba(0, 184, 255, 0.7)';  // Set font color
        menuButton.onclick = toggleMenu;
        

        const menu = document.createElement('nav');
        menu.className = 'menu-items';
        menu.innerHTML = `
            <a href="https://thomasefleming.github.io/">Home</a>
            <a href="ttps://x.com/thomasefleming" target="_blank">My tweets</a>
            <a href="https://docs.google.com/document/d/1Nwq2Z1BhJhYm5UnOundlgRhWmUdy872j7Akp8kfs1q8/edit?usp=sharing" target="_blank">My writing</a>
            <a href="chiclets.html">chiclets</a>
        `;

        // Add the hamburger icon and the menu to the header
        header.prepend(menuButton);
        header.appendChild(menu);
    }
});

function toggleMenu() {
    const menu = document.querySelector('.menu-items');
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
