var message = 'Hello, TypeScript!';
console.log(message);

//this creates a cool fade-in effect for your pages
document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 1.5s ease";
        document.body.style.opacity = 1;
    }, 100);
});