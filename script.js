"use strict";


/* =========================
   ELEMENTS
========================= */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");

const navLinks =
    document.querySelectorAll(".nav-link");


/* =========================
   MOBILE NAVIGATION
========================= */

if (menuButton && navigation) {

    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                navigation.classList.toggle("open");


            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );


            menuButton.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation"
                    : "Open navigation"
            );

        }
    );


    /* Close menu after navigation */

    navLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                navigation.classList.remove(
                    "open"
                );


                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            }
        );

    });


    /* Close menu with Escape */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                navigation.classList.contains("open")
            ) {

                navigation.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

                menuButton.focus();

            }

        }
    );

}


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


if (sections.length && navLinks.length) {

    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        navLinks.forEach(
                            (link) => {

                                const target =
                                    link.getAttribute(
                                        "href"
                                    );


                                link.classList.toggle(
                                    "active",
                                    target ===
                                    `#${entry.target.id}`
                                );

                            }
                        );

                    }
                );

            },

            {
                rootMargin:
                    "-35% 0px -55% 0px",

                threshold: 0
            }

        );


    sections.forEach(
        (section) => {

            observer.observe(section);

        }
    );

}


/* =========================
   CURRENT YEAR
========================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}