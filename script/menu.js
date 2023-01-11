function menuMobile(){
    let menu = document.querySelector('.menu-mobile')
    let button = document.getElementById('hamb-menu')
    if(window.innerWidth > 800 && menu.classList.contains('open')){
        menu.classList.remove('open')
        button.className = 'bi bi-list'
    }else{
        menu.classList.add('open')
        button.className = 'bi bi-x-lg'

    }
}