// VYBE Product Ordering - JavaScript Method # 2

const productOrderForm = document.getElementById("productOrderForm");

if (productOrderForm) {
    const productPanel = document.querySelector(".product-panel");
    const sizeButtons = document.querySelectorAll(".vybe-size-option");
    const orderStatus = document.getElementById("orderStatus");
    const quantityOutput = document.querySelector(".product-quantity output");
    const increaseButton = document.querySelector('.vybe-quantity-button[aria-label="Increase quantity"]');
    const decreaseButton = document.querySelector('.vybe-quantity-button[aria-label="Decrease quantity"]');

    sizeButtons.forEach(function (sizeButton) {
        sizeButton.addEventListener("click", function () {
            sizeButtons.forEach(function (button) {
                button.classList.remove("selected");
                button.setAttribute("aria-pressed", "false");
            });

            sizeButton.classList.add("selected");
            sizeButton.setAttribute("aria-pressed", "true");
            orderStatus.textContent = "";
            orderStatus.hidden = true;
            orderStatus.classList.remove("order-status-error");
            productPanel.classList.remove("has-order-error");
        });
    });

    increaseButton.addEventListener("click", function () {
        const quantity = Number(quantityOutput.textContent);
        quantityOutput.textContent = quantity + 1;
    });

    decreaseButton.addEventListener("click", function () {
        const quantity = Number(quantityOutput.textContent);

        if (quantity > 1) {
            quantityOutput.textContent = quantity - 1;
        }
    });

    productOrderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Check that a size has been selected
        const selectedSize = document.querySelector(".vybe-size-option.selected");

        if (!selectedSize) {
            orderStatus.textContent = "*Please select a size before ordering.";
            orderStatus.hidden = false;
            orderStatus.classList.add("order-status-error");
            productPanel.classList.add("has-order-error");
            return;
        }

        // Get the product information
        const productTitle = document.getElementById("product-title").textContent.trim();
        const productPrice = document.querySelector(".product-information .product-price").textContent.trim();
        const quantity = Number(quantityOutput.textContent);
        const unitPrice = Number(productPrice.replace("₱", "").trim());
        const totalPrice = unitPrice * quantity;

        // Prepare the email
        const recipient = "orders@examplewebsite142.com";
        const emailSubject = encodeURIComponent("Order: " + productTitle);
        const emailBody = encodeURIComponent(
            "Product: " + productTitle + "\n" +
            "Size: " + selectedSize.textContent.trim() + "\n" +
            "Quantity: " + quantity + "\n" +
            "Unit price: " + productPrice + "\n" +
            "Total: ₱" + totalPrice
        );

        const mailtoLink =
            "mailto:" + recipient +
            "?subject=" + emailSubject +
            "&body=" + emailBody;

        orderStatus.textContent = "Your email application should open with your order.";
        orderStatus.hidden = false;
        orderStatus.classList.remove("order-status-error");
        productPanel.classList.remove("has-order-error");

        window.location.href = mailtoLink;
    });
}
