(() => {
  const refs = {
    menuBtn: document.querySelector("[data-menu-button]"),
    mobileMenu: document.querySelector("[data-menu]"),
    body: document.querySelector("body"),
  };

  refs.menuBtn.addEventListener("click", () => {
    const expanded =
      refs.menuBtn.getAttribute("aria-expanded") === "true" || false;

    refs.menuBtn.setAttribute("aria-expanded", !expanded);
    refs.menuBtn.classList.toggle("is-open");
    refs.mobileMenu.classList.toggle("is-open");
    refs.body.classList.toggle("is-open");
  });
})();
