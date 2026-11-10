
// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if(mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Order Form Logic
const orderForm = document.getElementById('orderForm');
if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const menuItem = document.getElementById('menuItem').value;
        const quantity = parseInt(document.getElementById('quantity').value);
        const specs = document.getElementById('specs').value;

        const pricePerItem = 300;
        const cearl = 150;
        const biryani = 250;
        const burger = 200;
        const  pizza = 350;
        const sandwich = 180;
        const pasta = 220;
        const deliveryCharges = 100;

        if (!menuItem) {
            alert("Please select a menu item.");
            return;
        }

        if (isNaN(quantity) || quantity < 1) {
            alert("Please enter a valid quantity (minimum 1).");
            return;
        }

        const foodTotal = quantity * pricePerItem;
        const finalTotal = foodTotal + deliveryCharges;

        const confirmationMessage = `Order Confirmation:\n\nItem: ${menuItem}\nQuantity: ${quantity}\n\nBreakdown:\n${quantity} x Rs. ${pricePerItem} = Rs. ${foodTotal}\nDelivery Charges = Rs. ${deliveryCharges}\n\nTotal Amount = Rs. ${finalTotal}\n\nDo you want to confirm this order? (Yes/No)`;

        const userConfirmed = confirm(confirmationMessage);

        if (userConfirmed) {
            alert("Order Confirmed!\nPay using Easypaisa '012345677' to confirm order with extra delivery charges 200 rupees.");

            const emailSubject = encodeURIComponent(`New Order from Syed's Cafe: ${menuItem}`);
            const emailBody = encodeURIComponent(`Order Details:\n\nMenu Item: ${menuItem}\nQuantity: ${quantity}\nSpecial Instructions: ${specs}\n\nTotal Food Price: Rs. ${foodTotal}\nDelivery Charges: Rs. ${deliveryCharges}\nGrand Total: Rs. ${finalTotal}\n\nPlease confirm receipt of this order.`);

            window.location.href = `mailto:i263158@isb.nu.edu.pk?subject=${emailSubject}&body=${emailBody}`;

            orderForm.reset();
        } else {
            alert("Order Cancelled.");
        }
    });
}

// Fade/Slide In Animations
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card, .gallery-item');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});
