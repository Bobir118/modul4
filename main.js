let menu = document.querySelector(".fixed-menu");

menu.addEventListener('click', function(event){
    let clickTarget = event.target;
    let activeStn = document.querySelector('.active');

    if (clickTarget.classList.contains('nav-link')){
        clickTarget.classList.add('active');
        activeBth.classList.remove('active');
    }
});

let classList = 'main-link';
window.onscroll = function() {
    let h = document.documentElement.clientHeight;
    if (window.scrollY >= h*4){
        classLink = '.comments-link';
    }
    else if (window.scrollY >= h*3){
        classLink = '.works-link';
    }
    else if (window.scrollY >= h*2){
        classLink = '.skills-link';
    }
    else if (window.scrollY >= h){
        classLink = '.about-link';
    }
    else{
        classLink = '.main-link';
    }
    let activeBth = document.querySelector('.active');
    let newActiveBth = document.querySelector(classLink);
    if (!newActiveBth.classList.contains('active')){
        newActiveBth.classList.add('active');
        activeBth.classList.remove('active')
    }
};