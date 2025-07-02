function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        document.getElementById("error-message").style.display = "block";
        return false;
    }


    document.getElementById("error-message").style.display = "none";
    return true;
}
