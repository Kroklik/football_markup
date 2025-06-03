
document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".menu-header, .menu-item, .filter-item");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const next = toggle.nextElementSibling;
            if (next && (next.tagName === "DIV" || next.tagName === "UL")) {
                next.classList.toggle("open");
            }
            toggle.classList.toggle("active");
        });
    });
});
