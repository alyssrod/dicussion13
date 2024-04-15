document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('textarea');
    console.log(textarea.value);

    const addressCheckbox = document.getElementById('your-checkbox-id');  
    const billingAddress = document.getElementById('billing-address-id');  
    const homeAddress = document.getElementById('home-address-id');  
    addressCheckbox.addEventListener('change', function() {
        if (addressCheckbox.checked) {
            homeAddress.value = billingAddress.value;
            homeAddress.disabled = true;
        } else {
            homeAddress.value = '';
            homeAddress.disabled = false;
        }
    });
});
