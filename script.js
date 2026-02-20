document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when a link is clicked (for single-page or smooth scroll)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Add 'active' class to current page link in navigation
    const currentPath = window.location.pathname.split('/').pop();
    const navLinksList = document.querySelectorAll('.nav-links a');

    navLinksList.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else if (currentPath === 'index.html' && linkPath === '') { // Handle root index.html
            link.classList.add('active');
        }
    });

    // Simple form submission (for contact page)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const name = contactForm.querySelector('#name').value;
            const email = contactForm.querySelector('#email').value;
            const message = contactForm.querySelector('#message').value;

            if (name && email && message) {
                // In a real application, you would send this data to a server
                // For a static site, you might use a service like Formspree or Netlify Forms
                alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email}.`);
                contactForm.reset(); // Clear the form
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});
