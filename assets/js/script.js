document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            closeNavbarMenu();
        });
    });

    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', () => {
        navbarMenu.classList.toggle('show');
    });

    function closeNavbarMenu() {
        if (navbarMenu.classList.contains('show')) {
            navbarMenu.classList.remove('show');
        }
    }
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