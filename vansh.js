
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Navigation bar active state
const navbarLinks = document.querySelectorAll('.navbar a');

function setActiveLink() {
    navbarLinks.forEach(link => {
        link.classList.remove('active');
    });

    this.classList.add('active');
}

navbarLinks.forEach(link => {
    link.addEventListener('click', setActiveLink);
});

// Form validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Validate form inputs
        const name = form.elements['name'].value.trim();
        const age = form.elements['age'].value.trim();
        const gender = form.elements['gender'].value.trim();
        const locality = form.elements['locality'].value.trim();

        const errorMessages = [];

        if (name === '') {
            errorMessages.push('Please enter your name.');
        }

        if (age === '') {
            errorMessages.push('Please enter your age.');
        } else if (isNaN(age) || age <= 0) {
            errorMessages.push('Please enter a valid age.');
        

        if (gender === '') {
            errorMessages.push('Please enter your gender.');
        }

        if (locality === '') {
            errorMessages.push('Please enter your locality.');
        }

        if (errorMessages.length > 0) {
            alert(errorMessages.join('\n'));
            return;
        }

        // If all fields are filled and valid, proceed with form submission
        alert('Thank you for registering! We will contact you soon.');
        form.reset(); // Reset the form after submission
}});
});
