(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnRef .addEventListener("click", () => {
        const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
    })
    const menuBtnCross = document.querySelector("[data-menu-cross]");

    menuBtnCross .addEventListener("click", () => {
        const expanded =
        menuBtnCross.getAttribute("aria-expanded") === "true" || false;

        menuBtnCross.classList.toggle("is-open");
        menuBtnCross.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
    })
})()