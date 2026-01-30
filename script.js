// Script.js

document.addEventListener("DOMContentLoaded", () => {
    // FAQ Accordion Logic
    const faqToggles = document.querySelectorAll(".faq-toggle");

    faqToggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const content = toggle.nextElementSibling;
            const icon = toggle.querySelector("ion-icon");

            // Toggle accessibility
            const isExpanded = toggle.getAttribute("aria-expanded") === "true";
            toggle.setAttribute("aria-expanded", !isExpanded);

            if (content.style.display === "block") {
                content.style.display = "none";
                icon.name = "chevron-down-outline";
                icon.style.color = "var(--secondary)";
            } else {
                // Close other open faqs
                document.querySelectorAll(".faq-content").forEach(item => {
                    item.style.display = "none";
                });
                document.querySelectorAll(".faq-toggle ion-icon").forEach(i => {
                    i.name = "chevron-down-outline";
                    i.style.color = "var(--secondary)";
                });
                
                content.style.display = "block";
                icon.name = "chevron-up-outline";
                icon.style.color = "var(--primary)";
            }
        });
    });

    // Password Toggle Logic
    const passwordToggles = document.querySelectorAll(".password-toggle");
    passwordToggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const input = toggle.previousElementSibling;
            if (input.type === "password") {
                input.type = "text";
                toggle.name = "eye-off-outline";
            } else {
                input.type = "password";
                toggle.name = "eye-outline";
            }
        });
    });

    // Mobile Menu (Simple placeholder for now, ensuring links work)
    // In a real app, we would toggle the nav ul display property on small screens
});
