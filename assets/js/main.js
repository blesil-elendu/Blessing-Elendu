// 1. We create a common function to toggle the js menu
const toggleMenu = () =>{
    document.getElementById('js-menu').classList.toggle('active');
}


// 2. We toggle the js menu on bugger(i.e. js-navbar-toggle) click
document.getElementById('js-navbar-toggle').addEventListener('click', toggleMenu);


//3. We get all the navigation links
document.querySelectorAll('a.nav-links').forEach((item, index, items) => {
//     4. We add a click event listerner to all with the toggleMenu function we earlier created as callback
    item.addEventListener('click', toggleMenu);
});
