 document.addEventListener('DOMContentLoaded', function() {
    const captions = document.querySelectorAll('figure figcaption');
    if (captions.length > 1) {  
        alert(captions[1].textContent);  
    } else {
        console.error('Second caption not found!');
    }

    const images = document.querySelectorAll('img.thumbnail');
    const displayDiv = document.getElementById('display'); 

    images.forEach(image => {
        image.addEventListener('mouseover', function() {
            if (displayDiv) {
                displayDiv.style.backgroundImage = `url(${image.src})`;
                displayDiv.textContent = image.alt;
                image.style.visibility = 'hidden';
            }
        });

        image.addEventListener('mouseout', function() {
            if (displayDiv) {
                displayDiv.style.background = '';  
                displayDiv.textContent = 'Hover over an image below to display the image and the alt text.';
                image.style.visibility = 'visible';
            }
        });

        image.addEventListener('focus', function() {  
            if (displayDiv) {
                displayDiv.style.backgroundImage = `url(${image.src})`;
                displayDiv.textContent = image.alt;
                image.style.visibility = 'hidden';
            }
        });

        image.addEventListener('blur', function() {  
            if (displayDiv) {
                displayDiv.style.background = '';
                displayDiv.textContent = 'Hover over an image below to display the image and the alt text.';
                image.style.visibility = 'visible';
            }
        });
    });
});
