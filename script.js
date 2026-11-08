
/* =========================================
   FLOATING CONTACT WIDGET
========================================= */

(function () {

    const widget = document.getElementById("contactWidget");
    const toggle = document.getElementById("contactToggle");
    const menu = document.getElementById("contactMenu");

    // Check if elements exist

    if (!widget || !toggle || !menu) return;

    // Open Contact Menu

    function openContactMenu() {

        widget.classList.add("is-open");

        toggle.setAttribute("aria-expanded", "true");
        toggle.setAttribute("aria-label", "Close contact options");

        menu.setAttribute("aria-hidden", "false");

    }

    // Close Contact Menu

    function closeContactMenu() {

        widget.classList.remove("is-open");

        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open contact options");

        menu.setAttribute("aria-hidden", "true");

    }

    // Toggle Button Click

    toggle.addEventListener("click", function () {

        const isOpen = widget.classList.contains("is-open");

        if (isOpen) {

            closeContactMenu();

        } else {

            openContactMenu();

        }

    });

    // Close Menu When Clicking Outside

    document.addEventListener("click", function (event) {

        if (!widget.contains(event.target)) {

            closeContactMenu();

        }

    });

    // Close Menu Using Escape Key

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            closeContactMenu();

        }

    });

    // Close Menu After Selecting an Option

    menu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", closeContactMenu);

    });

})();
