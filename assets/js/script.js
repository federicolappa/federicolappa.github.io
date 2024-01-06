document.addEventListener('DOMContentLoaded', () => {
    const navbarMenu = document.querySelector('#navbarNav');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Close the navbar menu if open
            if (navbarMenu.classList.contains('show')) {
                navbarMenu.classList.remove('show');
            }
        });
    });

    navbarToggler.addEventListener('click', function() {
        navbarMenu.classList.toggle('show');
    });

    // Close navbar when any nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarMenu.classList.contains('show')) {
                navbarMenu.classList.remove('show');
            }
        });
    });

    (function() {
        emailjs.init("wBASQ9TpaWAJazne4");
    })();

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_l2b833g', 'template_qyc3bcx', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
});
