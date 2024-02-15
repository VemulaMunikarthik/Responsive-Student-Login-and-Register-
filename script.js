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

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    return passwordRegex.test(password);
}


function passwordsMatch(password, reenterPassword) {
    return password === reenterPassword;
}


document.addEventListener('DOMContentLoaded', function () {
    var registerForm = document.querySelector('.Register-form');
    registerForm.addEventListener('submit', function (event) {
        var emailInput = document.getElementById('register-email');
        var passwordInput = document.getElementById('register-password');
        var reenterPasswordInput = document.getElementById('reenter-password');

        
        if (!validateEmail(emailInput.value)) {
            alert('Please enter a valid email address.');
            event.preventDefault(); 
            return;
        }

   
        if (!validatePassword(passwordInput.value)) {
            alert('Password must contain one uppercase, one lowercase, one special character, and be at least 8 characters long.');
            event.preventDefault(); 
            return;
        }

       
        if (!passwordsMatch(passwordInput.value, reenterPasswordInput.value)) {
            alert('Passwords do not match.');
            event.preventDefault(); 
            return;
        }

        
        alert('Form submitted successfully!');
    });
});

function updatePasswordRules(isValid) {
    var passwordRulesBox = document.getElementById('password-rules-box');

    
    passwordRulesBox.style.display = isValid ? 'none' : 'block';

  
    if (!isValid) {
        passwordRulesBox.innerHTML = '<p>Password must contain one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long.</p>';
    }
}


function checkPasswordRequirements(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    return passwordRegex.test(password);
}


document.addEventListener('DOMContentLoaded', function () {
    var passwordInput = document.getElementById('register-password');
    var registerForm = document.querySelector('.Register-form');

    passwordInput.addEventListener('input', function () {
        var password = passwordInput.value;

        
        var isValid = checkPasswordRequirements(password);

      
        updatePasswordRules(isValid);
    });


    registerForm.addEventListener('submit', function (event) {
        var currentSlide = document.querySelector('.register-slide:not([style*="display: none;"])');

      
        var isFirstSlide = currentSlide && currentSlide.id === 'slide-1';
        document.getElementById('password-rules-box').style.display = isFirstSlide ? 'block' : 'none';

        
    });
});


function toggleNewBoxVisibility(currentSlideId) {
    var newBox = document.getElementById('new-box');
    newBox.style.display = currentSlideId === 'slide-1' ? 'block' : 'none';
}


document.addEventListener('DOMContentLoaded', function () {
    var registerForm = document.querySelector('.Register-form');

    registerForm.addEventListener('submit', function () {
        var currentSlide = document.querySelector('.register-slide:not([style*="display: none;"])');
        var currentSlideId = currentSlide ? currentSlide.id : '';

      
        toggleNewBoxVisibility(currentSlideId);

      
    });
});



function updatePasswordRules(isValid) {
    var passwordRulesElement = document.getElementById('password-rules');

  
    if (isValid) {
        passwordRulesElement.style.color = 'green';
        passwordRulesElement.textContent = 'Password is valid.';
    } else {
        passwordRulesElement.style.color = 'red';
        passwordRulesElement.textContent = 'Password must contain one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long.';
    }
}


function checkPasswordRequirements(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    return passwordRegex.test(password);
}


document.addEventListener('DOMContentLoaded', function () {
    var passwordInput = document.getElementById('register-password');

    passwordInput.addEventListener('input', function () {
        var password = passwordInput.value;

        
        var isValid = checkPasswordRequirements(password);

       
        updatePasswordRules(isValid);
    });
});
