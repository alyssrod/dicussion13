document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('textarea');
    if (textarea) {
        console.log(textarea.value);
    } else {
        console.error('Textarea not found!');
    }

    const addressCheckbox = document.getElementById('your-checkbox-id');  
    const billingAddress = document.getElementById('billing-address-id');  
    const homeAddress = document.getElementById('home-address-id');  

    if (addressCheckbox && billingAddress && homeAddress) {
        addressCheckbox.addEventListener('change', function() {
            if (addressCheckbox.checked) {
                homeAddress.value = billingAddress.value;
                homeAddress.disabled = true;
            } else {
                homeAddress.value = '';
                homeAddress.disabled = false;
            }
        });
    } else {
        if (!addressCheckbox) console.error('Checkbox for address not found!');
        if (!billingAddress) console.error('Billing address field not found!');
        if (!homeAddress) console.error('Home address field not found!');
    }
});
