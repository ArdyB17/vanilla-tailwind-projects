const topBar = document.querySelector('#top-bar');
const exteriorColorSection = document.querySelector('#exterior-buttons');
const interiorColorSection = document.querySelector('#interior-buttons');
const exteriorImage = document.querySelector('#exterior-image');
const interiorImage = document.querySelector('#interior-image');
const wheelButtonsSection = document.querySelector('#wheel-buttons');
const performanceBtn = document.querySelector('#performance-btn');
const totalPriceElement = document.querySelector('#total-price');
const fullSelfDrivingCheckbox = document.querySelector('#full-self-driving-checkbox');
const accessoryCheckboxes = document.querySelectorAll('.accessory-form-checkbox');
const downPaymentElement = document.querySelector('#down-payment');
const monthlyPaymentElement = document.querySelector('#monthly-payment');
const buyCarBtn = document.querySelector('#buy-car-btn');
const paymentModal = document.querySelector('#payment-modal');
const closeModalBtn = document.querySelector('#close-modal');
const modalTotalPrice = document.querySelector('#modal-total-price');
const paymentForm = document.querySelector('#payment-form');

const basePrice = 52490;
let currentPrice = basePrice;

let selectedColor = 'Stealth Grey';
const selectedOptions = {
    'Performance Wheels': false,
    'Performance Package': false,
    'Full Self-Driving': false,
};

// Pricing structure
const pricing = {
    'Performance Wheels': 2500,
    'Performance Package': 5000,
    'Full Self-Driving': 8500,
    Accessories: {
        'Center Console Trays': 35,
        Sunshade: 105,
        'All-Weather Interior Liners': 225,
    },
};

// Update total price in the UI
const updateTotalPrice = () => {
    currentPrice = basePrice;

    if (selectedOptions['Performance Wheels']) {
        currentPrice += pricing['Performance Wheels'];
    }

    if (selectedOptions['Performance Package']) {
        currentPrice += pricing['Performance Package'];
    }

    if (selectedOptions['Full Self-Driving']) {
        currentPrice += pricing['Full Self-Driving'];
    }

    accessoryCheckboxes.forEach((checkbox) => {
        const accessoryLabel = checkbox.closest('label').querySelector('span').textContent.trim();
        const accessoryPrice = pricing['Accessories'][accessoryLabel];

        if (checkbox.checked) {
            currentPrice += accessoryPrice;
        }
    });

    totalPriceElement.textContent = `$${currentPrice.toLocaleString()}`;
    updatePaymentBreakdown();
};

// Update payment breakdown based on current price
const updatePaymentBreakdown = () => {
    const downPayment = currentPrice * 0.1;
    downPaymentElement.textContent = `$${downPayment.toLocaleString()}`;

    const loanTermMonths = 60;
    const interestRate = 0.03;
    const loanAmount = currentPrice - downPayment;

    const monthlyInterestRate = interestRate / 12;
    const monthlyPayment =
        (loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermMonths))) /
        (Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1);

    monthlyPaymentElement.textContent = `$${monthlyPayment.toFixed(2).toLocaleString()}`;
};

// Handle Top Bar On Scroll
const handleScroll = () => {
    const atTop = window.scrollY === 0;
    topBar.classList.toggle('visible-bar', atTop);
    topBar.classList.toggle('hidden-bar', !atTop);
};

// Image Mapping
const exteriorImages = {
    'Stealth Grey': './images/model-y-stealth-grey.jpg',
    'Pearl White': './images/model-y-pearl-white.jpg',
    'Deep Blue': './images/model-y-deep-blue-metallic.jpg',
    'Solid Black': './images/model-y-solid-black.jpg',
    'Ultra Red': './images/model-y-ultra-red.jpg',
    'Quicksilver': './images/model-y-quicksilver.jpg',
};

const interiorImages = {
    Dark: './images/model-y-interior-dark.jpg',
    Light: './images/model-y-interior-light.jpg',
};

// Handle Color Selection
const handleColorButtonClick = (event) => {
    const button = event.target.closest('button');
    if (button) {
        const buttons = event.currentTarget.querySelectorAll('button');
        buttons.forEach((btn) => {
            btn.classList.remove('btn-selected');
        });
        button.classList.add('btn-selected');

        if (event.currentTarget === exteriorColorSection) {
            selectedColor = button.dataset.color;
            updateExteriorImage();
        } else if (event.currentTarget === interiorColorSection) {
            const color = button.dataset.color;
            interiorImage.src = interiorImages[color];
        }
    }
};

// Update exterior image based on color and wheels
const updateExteriorImage = () => {
    const performanceSuffix = selectedOptions['Performance Wheels'] ? '-performance' : '';
    exteriorImage.src = exteriorImages[selectedColor].replace('.jpg', `${performanceSuffix}.jpg`);
};

// Wheel Selection
const handleWheelButtonClick = (event) => {
    const button = event.target.closest('button');
    if (button) {
        const buttons = document.querySelectorAll('#wheel-buttons button');
        buttons.forEach((btn) => btn.classList.remove('bg-gray-700', 'text-white'));

        button.classList.add('bg-gray-700', 'text-white');
        selectedOptions['Performance Wheels'] = button.textContent.includes('Performance');
        updateExteriorImage();
        updateTotalPrice();
    }
};

// Performance Package Selection
const handlePerformanceButtonClick = () => {
    const isSelected = performanceBtn.classList.toggle('bg-gray-700');
    performanceBtn.classList.toggle('text-white');
    selectedOptions['Performance Package'] = isSelected;
    updateTotalPrice();
};

// Full Self Driving Selection
const fullSelfDrivingChange = () => {
    selectedOptions['Full Self-Driving'] = fullSelfDrivingCheckbox.checked;
    updateTotalPrice();
};

// Handle Accessory Checkbox Listeners
accessoryCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => updateTotalPrice());
});

// Initial Update Total Price
updateTotalPrice();

// Event Listeners
window.addEventListener('scroll', () => requestAnimationFrame(handleScroll));
exteriorColorSection.addEventListener('click', handleColorButtonClick);
interiorColorSection.addEventListener('click', handleColorButtonClick);
wheelButtonsSection.addEventListener('click', handleWheelButtonClick);
performanceBtn.addEventListener('click', handlePerformanceButtonClick);
fullSelfDrivingCheckbox.addEventListener('change', fullSelfDrivingChange);

// Modal Functionality
buyCarBtn.addEventListener('click', () => {
    modalTotalPrice.textContent = `$${currentPrice.toLocaleString()}`; // Set the total price in the modal
    paymentModal.classList.remove('hidden'); // Show the modal
    document.body.classList.add('overflow-hidden'); // Prevent scrolling on the background
});

closeModalBtn.addEventListener('click', () => {
    paymentModal.classList.add('hidden'); // Hide the modal
    document.body.classList.remove('overflow-hidden'); // Allow scrolling again
});

// Handle Payment Form Submission
paymentForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission
    alert('Payment Successful! Thank you for your purchase!'); // Show a success message
    paymentModal.classList.add('hidden'); // Hide the modal after payment
    document.body.classList.remove('overflow-hidden'); // Allow scrolling again
});

// Additional Functionality: Validate Card Number
const validateCardNumber = (number) => {
    // Simple validation for card number length
    return number.length >= 13 && number.length <= 19;
};

// Add Event Listener for Card Number Input
document.getElementById('card-number').addEventListener('input', (e) => {
    const cardNumber = e.target.value;
    if (!validateCardNumber(cardNumber)) {
        e.target.classList.add('border-red-500');
    } else {
        e.target.classList.remove('border-red-500');
    }
});

// Additional Functionality: Show Payment Summary
const showPaymentSummary = () => {
    const summary = `
        Total Price: ${modalTotalPrice.textContent}
        Name: ${document.getElementById('name').value}
        Card Number: ${document.getElementById('card-number').value.replace(/\d(?=\d{4})/g, "*")}
        Expiry Date: ${document.getElementById('expiry').value}
    `;
    console.log(summary); // Log the summary to the console
};

// Add Event Listener for Payment Form Submission
paymentForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission
    showPaymentSummary(); // Show payment summary in console
    alert('Payment Successful! Thank you for your purchase!'); // Show a success message
    paymentModal.classList.add('hidden'); // Hide the modal after payment
    document.body.classList.remove('overflow-hidden'); // Allow scrolling again
});
