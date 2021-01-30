

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
    x.classList.toggle("change");
});

let navLinks = document.querySelectorAll('.nav-links');
navLinks.forEach((item, index) => {
item.addEventListener('click', function(){
    mainNav.classList.toggle('hide')
});
});

