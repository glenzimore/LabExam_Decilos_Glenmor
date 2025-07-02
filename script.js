function validateForm() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (!email) {
        errorMessage.textContent = "Email is required.";
        errorMessage.style.display = "block";
        return false;
    }

    if (!password) {
        errorMessage.textContent = "Password is required.";
        errorMessage.style.display = "block";
        return false;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.display = "block";
        return false;
    }


    errorMessage.style.display = "none";
    window.location.href = "home.html";
    return false; 
}
