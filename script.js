// ==========================================
// KUSHAAL PORTFOLIO - JAVASCRIPT
// ==========================================


// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });

}


// ==========================================
// CLOSE MOBILE MENU AFTER CLICKING A LINK
// ==========================================

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }

    });

});


// ==========================================
// SMOOTH SCROLLING
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ==========================================
// CONTACT FORM
// ==========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {

            alert("Please fill in all the fields.");

            return;
        }


        alert(
            "Thanks, " + name +
            "! Your message has been received. 🚀"
        );


        contactForm.reset();

    });

}


// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .learning-box, .contact-container"
);

const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// ==========================================
// SKILL BAR ANIMATION
// ==========================================

const skillSection = document.querySelector(".skills");

let skillsAnimated = false;

if (skillSection) {

    const skillObserver = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting && !skillsAnimated) {

                    skillsAnimated = true;

                    const bars = document.querySelectorAll(
                        ".skill-progress"
                    );

                    bars.forEach(function (bar) {

                        bar.classList.add("animate");

                    });

                }

            });

        },

        {
            threshold: 0.25
        }

    );

    skillObserver.observe(skillSection);

}


// ==========================================
// ACTIVE NAVIGATION LINK
// ==========================================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    links.forEach(function (link) {

        link.classList.remove("active");

        const linkTarget = link.getAttribute("href");

        if (linkTarget === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


// ==========================================
// NAVBAR SHADOW WHEN SCROLLING
// ==========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (!header) {
        return;
    }

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ==========================================
// CURRENT YEAR
// ==========================================

const copyright = document.querySelector(".copyright");

if (copyright) {

    const currentYear = new Date().getFullYear();

    copyright.textContent =
        "© " + currentYear +
        " Kushaal. Learning. Building. Improving.";

}


// ==========================================
// WELCOME MESSAGE
// ==========================================

console.log(
    "🚀 Welcome to Kushaal's portfolio!"
);

console.log(
    "HTML + CSS + JavaScript = Web Development 🔥"
);
