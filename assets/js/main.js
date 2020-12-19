// ----  Start Preloder
/*const spinner = document.querySelector('.preloader');
        let rotateCount = 0;
        let startTime = null;
        let rAF;
        
        let spinning = true;

        function draw(timestamp) {
            if (!startTime) {
           startTime = timestamp;
          }
        
          rotateCount = (timestamp - startTime) / 3;
        
          if (rotateCount > 359) {
          rotateCount %= 360;
        }
        //to actually rotate the spinner
        spinner.style.transform = `rotate(${rotateCount}deg)`;
        
        rAF = requestAnimationFrame(draw);
        
        };
        draw()
const html = document.querySelector('html');
const preloaderArea = document.querySelector('.preloader-area');
window.addEventListener('load', function(){
    cancelAnimationFrame(rAF)
        spinning = false;
        preloaderArea.style.display = 'none';
})*/

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
    x.classList.toggle("change");
});

let navLinks = document.querySelector('.nav-links');
navLinks.addEventListener('click', function(){
    mainNav.classList.toggle('hide')
})

let contactForm = document.getElementById('contact-form');
contactForm.setAttribute('action', '//formspree.io/' + 'blesilelendu' + '@' + 'gmail' + '.' + 'com');