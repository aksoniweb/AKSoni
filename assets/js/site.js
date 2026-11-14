document.addEventListener("DOMContentLoaded", function () {
    const year = document.getElementById("currentYear");
    if (year) year.textContent = new Date().getFullYear();
    const openButton = document.getElementById("openContactForm");
    const closeButton = document.getElementById("closeContactForm");
    const modal = document.getElementById("contactModal");
    if (!openButton || !closeButton || !modal) return;
    function openModal(event) { event.preventDefault(); modal.classList.add("show"); modal.setAttribute("aria-hidden", "false"); closeButton.focus(); }
    function closeModal() { modal.classList.remove("show"); modal.setAttribute("aria-hidden", "true"); openButton.focus(); }
    openButton.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);
    modal.addEventListener("click", function (event) { if (event.target === modal) closeModal(); });
    document.addEventListener("keydown", function (event) { if (event.key === "Escape" && modal.classList.contains("show")) closeModal(); });
});
