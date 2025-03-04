document.addEventListener("DOMContentLoaded", () => {
    
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0; 
    
    function moveSlide(direction) {
        
        items[currentIndex].classList.remove("active");

        
        currentIndex = (currentIndex + direction + items.length) % items.length;

        
        items[currentIndex].classList.add("active");
    }

    
    items[currentIndex].classList.add("active"); 

    
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

   
    prevButton.addEventListener('click', () => moveSlide(-1)); 

   
    nextButton.addEventListener('click', () => moveSlide(1));  
    
    function autoSlide() {
        moveSlide(1); 
    }

   
    setInterval(autoSlide, 3000); 
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Gracias por tu mensaje, ' + name + '!');
        form.reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
