const navSlide = () => {
    const burger =  document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const nav_Links = document.querySelectorAll('.navlinks li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        nav_Links.forEach((link, index) => {
        
            if(link.style.animation) {
                link.style.animation = ''; }
                else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
                };
        });
        burger.classList.toggle(`toggle`)
    });
}
navSlide();

var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);
