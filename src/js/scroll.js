const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        const offsetPosition = section.offsetTop - 180; // Subtract navbar height
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    }
};