```javascript
// =========================================
// PORTFOLIO JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // -----------------------------------------
    // 1. Smooth scrolling for navigation links
    // -----------------------------------------
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(function (link) {
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


    // -----------------------------------------
    // 2. Contact form
    // -----------------------------------------
    const contactForm = document.querySelector("#contact form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const subject = document.querySelector("#subject").value.trim();
            const message = document.querySelector("#message").value.trim();

            // Check required fields
            if (!name || !email || !message) {
                alert("Please fill in your name, email, and message.");
                return;
            }

            // Basic email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Create email message
            const emailSubject = subject || "Portfolio Contact";
            const emailBody =
                "Hello Bezawit,%0D%0A%0D%0A" +
                "Name: " + encodeURIComponent(name) + "%0D%0A" +
                "Email: " + encodeURIComponent(email) + "%0D%0A%0D%0A" +
                "Message:%0D%0A" +
                encodeURIComponent(message);

            // Open the user's email application
            window.location.href =
                "mailto:bezaayu8@gmail.com" +
                "?subject=" + encodeURIComponent(emailSubject) +
                "&body=" + emailBody;

            // Reset form
            contactForm.reset();
        });
    }


    // -----------------------------------------
    // 3. Scroll-to-top button functionality
    // -----------------------------------------
    const backToTop = document.querySelector('footer a[href="#home"]');

    if (backToTop) {
        backToTop.addEventListener("click", function (event) {
            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    // -----------------------------------------
    // 4. Highlight active navigation section
    // -----------------------------------------
    const sections = document.querySelectorAll("main section");
    const menuLinks = document.querySelectorAll("nav ul li a");

    function updateActiveNavigation() {
        let currentSection = "";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        menuLinks.forEach(function (link) {
            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveNavigation);

    updateActiveNavigation();


    // -----------------------------------------
    // 5. Project image fallback
    // -----------------------------------------
    const projectImages = document.querySelectorAll("#projects img");

    projectImages.forEach(function (image) {
        image.addEventListener("error", function () {
            this.alt = "Project image unavailable";
        });
    });


    // -----------------------------------------
    // 6. Current year in footer
    // -----------------------------------------
    const footerYear = document.querySelector("footer time");

    if (footerYear) {
        const currentYear = new Date().getFullYear();

        footerYear.textContent = currentYear;
        footerYear.setAttribute("datetime", currentYear);
    }


    // -----------------------------------------
    // 7. Simple welcome message
    // -----------------------------------------
    console.log("Welcome to Bezawit Ayal's portfolio!");
    console.log("Portfolio loaded successfully.");
});
```
