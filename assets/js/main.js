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
});


/*/ changing an image on click
let myImg = document.querySelectorAll('img');

myImg.onclick = function(){
    let mySrc = myImg.getAttribute('src');
    if(mySrc === "/assets/img/removed.png"){
        myImg.setAttribute('src', "/assets/img/removed2.png");
    }
    else{
        myImg.setAttribute('src', "/assets/img/removed.png")
    }
}

// login code
let myWelcome = document.getElementById('welcome');
let mybutton = document.getElementById('login');

function myUserName(){
    let myName = prompt('Enter Your Name');
    if(!myName){
        myUserName();
    }
    else{
       localStorage.setItem('name', myName);
    myWelcome.textContent = 'Welcome to my Page' + ' ' + myName; 
    }
    
}

if(!localStorage.getItem('name')){
    myUserName;
}
else{
    let StoredName = localStorage.getItem('name');
    myWelcome.textContent = 'Welcome to my Page,' + ' ' + StoredName
}


mybutton.onclick = function(){
    myUserName();
}*/