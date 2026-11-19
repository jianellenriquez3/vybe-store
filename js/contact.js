// VYBE Contact Form - JavaScript Method #2

// Get the Contact Us form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {

        // Prevent the form from submitting normally
        event.preventDefault();

        // Get the visitor's information
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Get the form status message element
        const formStatus = document.getElementById("formStatus");

        // Check that all fields have information
        if (!name || !email || !subject || !message) {
            formStatus.textContent =
                "Please complete all fields before submitting.";
            return;
        }

        // Prepare the email recipient
        const recipient = "hello@examplewebsite142.com";

        // Encode the email subject
        const emailSubject = encodeURIComponent(subject);

        // Prepare and encode the email body
        const emailBody = encodeURIComponent(
            "Name: " + name + "\n" +
            "Email: " + email + "\n\n" +
            "Message:\n" + message
        );

        // Create the mailto link
        const mailtoLink =
            "mailto:" + recipient +
            "?subject=" + emailSubject +
            "&body=" + emailBody;

        // Inform the visitor
        formStatus.textContent =
            "Your email application should open with your inquiry.";

        // Open the visitor's default email application
        window.location.href = mailtoLink;

    });
}
