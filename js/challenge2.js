document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('billing');  
    if (textarea) {
        console.log(textarea.value.trim());  
    } else {
        console.error('Textarea not found!');
    }

    const addressCheckbox = document.querySelector('input[type="checkbox"][name="useBilling"]');  
    const homeAddress = document.getElementById('home'); 
    
    if (addressCheckbox && homeAddress) {
        addressCheckbox.addEventListener('change', function() {
            if (addressCheckbox.checked) {
                homeAddress.value = textarea.value;
                homeAddress.disabled = true;
            } else {
                homeAddress.value = '';
                homeAddress.disabled = false;
            }
        });
    } else {
        if (!addressCheckbox) console.error('Checkbox for address not found!');
        if (!homeAddress) console.error('Home address field not found!');
    }
});
