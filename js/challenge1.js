document.addEventListener('DOMContentLoaded', (event) => {
    const heading = document.querySelector('h1');
    heading.classList.add('desired-style-class');
  
    document.addEventListener('dblclick', () => {
        const currentTime = new Date().toLocaleTimeString();
        alert(`Current time: ${currentTime}`);
    });

    const toggleCheckbox = document.getElementById('toggle');
    const emailBox = document.getElementById('emailBox');

    toggleCheckbox.addEventListener('click', () => {
        if (toggleCheckbox.checked) {
            emailBox.classList.remove('hidden');
        } else {
            emailBox.classList.add('hidden');
        }
    });
});

