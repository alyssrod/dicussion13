document.addEventListener('DOMContentLoaded', function() {
    const secondCaption = document.querySelectorAll('figure caption')[1]; 
    alert(secondCaption.textContent);

    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.addEventListener('mouseover', function() {
            document.body.style.backgroundImage = `url(${image.src})`;
            document.getElementById('display-text-id').textContent = image.alt;  
            image.style.visibility = 'hidden';
        });

        image.addEventListener('mouseout', function() {
            document.body.style.background = 'blue';  
            image.style.visibility = 'visible';
        });

        image.addEventListener('focus', function() {  
            document.body.style.backgroundImage = `url(${image.src})`;
            document.getElementById('display-text-id').textContent = image.alt;  
            image.style.visibility = 'hidden';
        });

        image.addEventListener('blur', function() { 
            document.body.style.background = 'blue';
            image.style.visibility = 'visible';
        });
    });
});
