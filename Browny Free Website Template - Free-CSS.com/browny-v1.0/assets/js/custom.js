// JavaScript global
document.addEventListener("DOMContentLoaded", function () {
    // Animation simple sur les liens de navigation
    const navLinks = document.querySelectorAll("header .navbar a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth",
                });
            }
        });
    });

    // Exemple d'une interaction pour les sections
    console.log("Portfolio de Eytan Lacombe chargé avec succès !");
});
