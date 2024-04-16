document.addEventListener('DOMContentLoaded', function() {
    const billingLabel = document.querySelector('label[for="bill"]');
    const billingTextArea = document.getElementById('billing');
    if (billingLabel && billingTextArea) {
        billingLabel.addEventListener('click', function() {
            billingTextArea.focus();  
        });
    } else {
        console.error('Billing label or textarea not found!');
    }

    const homeLabel = document.querySelector('label[for="home"]');
    const homeTextArea = document.getElementById('home');
    if (homeLabel && homeTextArea) {
        homeLabel.addEventListener('click', function() {
            homeTextArea.focus(); 
        });
    } else {
        console.error('Home label or textarea not found!');
    }

    const addressCheckbox = document.querySelector('input[name="useBilling"]');
    if (addressCheckbox && homeTextArea && billingTextArea) {
        addressCheckbox.addEventListener('change', function() {
            if (addressCheckbox.checked) {
                homeTextArea.value = billingTextArea.value;
                homeTextArea.disabled = true;
            } else {
                homeTextArea.value = '';
                homeTextArea.disabled = false;
            }
        });
    } else {
        if (!addressCheckbox) console.error('Checkbox for address not found!');
        if (!homeTextArea) console.error('Home address field not found!');
        if (!billingTextArea) console.error('Billing address field not found!');
    }
});
