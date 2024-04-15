document.addEventListener('DOMContentLoaded', function() {
    const captions = document.querySelectorAll('figure caption');
    if (captions.length > 1) {  
        const secondCaption = captions[1];
        alert(secondCaption.textContent);
    } else {
        console.error('Second caption not found!');
    }

    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.addEventListener('mouseover', function() {
            const displayText = document.getElementById('display-text-id'); 
            if (displayText) {
                document.body.style.backgroundImage = `url(${image.src})`;
                displayText.textContent = image.alt;
                image.style.visibility = 'hidden';
            } else {
                console.error('Display text element not found!');
            }
        });

        image.addEventListener('mouseout', function() {
            document.body.style.background = 'blue';  
            image.style.visibility = 'visible';
        });

        image.addEventListener('focus', function() {  
            const displayText = document.getElementById('display-text-id'); 
            if (displayText) {
                document.body.style.backgroundImage = `url(${image.src})`;
                displayText.textContent = image.alt;
                image.style.visibility = 'hidden';
            } else {
                console.error('Display text element not found!');
            }
        });

        image.addEventListener('blur', function() {  
            document.body.style.background = 'blue';
            image.style.visibility = 'visible';
        });
    });
});
