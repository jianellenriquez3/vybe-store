
// VYBE Contact Form - JavaScript Method # 2

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get the visitor's information
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check that all fields have information
        if (!name || !email || !subject || !message) {
            document.getElementById("formStatus").textContent =
                "Please complete all fields before submitting.";
            return;
        }

        // Prepare the email
        const recipient = "hello@examplewebsite142.com";

        const emailSubject = encodeURIComponent(subject);

        const emailBody = encodeURIComponent(
            "Name: " + name + "\n" +
            "Email: " + email + "\n\n" +
            "Message:\n" + message
        );

        // Open the visitor's default email application
        const mailtoLink =
            "mailto:" + recipient +
            "?subject=" + emailSubject +
            "&body=" + emailBody;

        document.getElementById("formStatus").textContent =
            "Your email application should open with your inquiry.";

        window.location.href = mailtoLink;
    });
}

