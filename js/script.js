// VYBE Website - General JavaScript

// Wait until the webpage is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Automatically update the copyright year
    const copyrightYear = document.getElementById("copyrightYear");

    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

});
