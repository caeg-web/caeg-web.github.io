document.addEventListener("DOMContentLoaded", () => {
    // Force light mode as default
    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "light");
    }

    // Make sure the theme is applied immediately
    const mode = localStorage.getItem("theme");
    if (mode === "dark") {
        document.documentElement.setAttribute("data-mode", "dark");
    } else {
        document.documentElement.setAttribute("data-mode", "light");
    }
});