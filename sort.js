(() => {
    const sortBtnRef = document.querySelector("[data-sort-button]");
    const sortMenuRef = document.querySelector("[data-sort]");

    sortBtnRef .addEventListener("click", () => {
        const expanded =
        sortBtnRef.getAttribute("aria-expanded") === "true" || false;

        sortBtnRef.classList.toggle("is-open");
        sortBtnRef.setAttribute("aria-expanded", !expanded);

        sortMenuRef.classList.toggle("is-open");
    })
})()