let register_btn = document.querySelector(".Register-btn");
let login_btn = document.querySelector(".Login-btn");
let form = document.querySelector(".Form-box");

let registerForm = document.querySelector(".Register-form");
let registerSlides = document.querySelectorAll(".register-slide");
let currentSlide = 0;

register_btn.addEventListener("click", () => {
    form.classList.add("change-form");
    form.style.width = "450px";
    form.style.height = "500px";
    
    showSlide(currentSlide);
});

login_btn.addEventListener("click", () => {
    form.classList.remove("change-form");
    form.style.width = "400px";
    form.style.height = "450px";
    form.style.overflowY = "hidden";
});

function showSlide(index) {
    registerSlides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });

    // Disable/enable previous and next buttons based on the current slide
    let prevButton = document.querySelector(".prev-slide");
    let nextButton = document.querySelector(".next-slide");

    if (index === 0) {
        prevButton.style.display = "none";
    } else {
        prevButton.style.display = "block";
    }

    if (index === registerSlides.length - 1) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "block";
    }
}

document.querySelector(".next-slide").addEventListener("click", () => {
    if (currentSlide < registerSlides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
});

document.querySelector(".prev-slide").addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
});


document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.next-slide',
            prevEl: '.prev-slide',
        },
    });
});
// script.js

// Validate email using a regular expression
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate password with one uppercase, one lowercase, one special char, and minimum length of 8
function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    return passwordRegex.test(password);
}

// Validate if password matches re-enter password
function passwordsMatch(password, reenterPassword) {
    return password === reenterPassword;
}

// Perform validations on form submission
document.addEventListener('DOMContentLoaded', function () {
    var registerForm = document.querySelector('.Register-form');
    registerForm.addEventListener('submit', function (event) {
        var emailInput = document.getElementById('register-email');
        var passwordInput = document.getElementById('register-password');
        var reenterPasswordInput = document.getElementById('reenter-password');

        // Email validation
        if (!validateEmail(emailInput.value)) {
            alert('Please enter a valid email address.');
            event.preventDefault(); // Prevent form submission
            return;
        }

        // Password validation
        if (!validatePassword(passwordInput.value)) {
            alert('Password must contain one uppercase, one lowercase, one special character, and be at least 8 characters long.');
            event.preventDefault(); // Prevent form submission
            return;
        }

        // Password match validation
        if (!passwordsMatch(passwordInput.value, reenterPasswordInput.value)) {
            alert('Passwords do not match.');
            event.preventDefault(); // Prevent form submission
            return;
        }

        // All validations passed, continue with form submission
        alert('Form submitted successfully!');
    });
});
// script.js

// Function to update the password rules message
function updatePasswordRules(isValid) {
    var passwordRulesBox = document.getElementById('password-rules-box');

    // Show or hide the password rules box based on validity
    passwordRulesBox.style.display = isValid ? 'none' : 'block';

    // Update the password rules message
    if (!isValid) {
        passwordRulesBox.innerHTML = '<p>Password must contain one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long.</p>';
    }
}

// Function to check if the password meets the requirements
function checkPasswordRequirements(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    return passwordRegex.test(password);
}

// Event listener for password input field
document.addEventListener('DOMContentLoaded', function () {
    var passwordInput = document.getElementById('register-password');
    var registerForm = document.querySelector('.Register-form');

    passwordInput.addEventListener('input', function () {
        var password = passwordInput.value;

        // Check if the password meets the requirements
        var isValid = checkPasswordRequirements(password);

        // Update the password rules message
        updatePasswordRules(isValid);
    });

    // Event listener to show/hide password rules box based on the current slide
    registerForm.addEventListener('submit', function (event) {
        var currentSlide = document.querySelector('.register-slide:not([style*="display: none;"])');

        // If the current slide is the first one, show the password rules box
        var isFirstSlide = currentSlide && currentSlide.id === 'slide-1';
        document.getElementById('password-rules-box').style.display = isFirstSlide ? 'block' : 'none';

        // Perform other form submission logic...
    });
});
// script.js

// Function to toggle the visibility of the new box
function toggleNewBoxVisibility(currentSlideId) {
    var newBox = document.getElementById('new-box');
    newBox.style.display = currentSlideId === 'slide-1' ? 'block' : 'none';
}

// Event listener to show/hide the new box based on the current slide
document.addEventListener('DOMContentLoaded', function () {
    var registerForm = document.querySelector('.Register-form');

    registerForm.addEventListener('submit', function () {
        var currentSlide = document.querySelector('.register-slide:not([style*="display: none;"])');
        var currentSlideId = currentSlide ? currentSlide.id : '';

        // Toggle visibility of the new box based on the current slide
        toggleNewBoxVisibility(currentSlideId);

        // Perform other form submission logic...
    });
});
// script.js

// Function to update the password rules message
function updatePasswordRules(isValid) {
    var passwordRulesElement = document.getElementById('password-rules');

    // Show or hide the password rules based on validity
    if (isValid) {
        passwordRulesElement.style.color = 'green';
        passwordRulesElement.textContent = 'Password is valid.';
    } else {
        passwordRulesElement.style.color = 'red';
        passwordRulesElement.textContent = 'Password must contain one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long.';
    }
}

// Function to check if the password meets the requirements
function checkPasswordRequirements(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    return passwordRegex.test(password);
}

// Event listener for password input field
document.addEventListener('DOMContentLoaded', function () {
    var passwordInput = document.getElementById('register-password');

    passwordInput.addEventListener('input', function () {
        var password = passwordInput.value;

        // Check if the password meets the requirements
        var isValid = checkPasswordRequirements(password);

        // Update the password rules message
        updatePasswordRules(isValid);
    });
});
