const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]
const line1 = document.getElementsByClassName("line1")[0]
const line2 = document.getElementsByClassName("line2")[0]
const line3 = document.getElementsByClassName("line3")[0]

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active');
    line1.classList.toggle('active');
    line2.classList.toggle('active');
    line3.classList.toggle('active');
})

