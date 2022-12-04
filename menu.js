(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobNoneRef = document.querySelector("[display-none]");
    const disNoneRef = document.querySelector("[data-none]");

    menuBtnRef .addEventListener("click", () => {
        const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
        mobNoneRef.classList.toggle("is-open");
        disNoneRef.classList.toggle("is-open");
    })
})()