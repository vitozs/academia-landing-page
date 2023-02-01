let largura = null
let menu = document.querySelector('.menu-mobile')
let button = document.getElementById('hamb-menu')
function menuMobile(){

    if(menu.classList.contains('open')){
        menu.classList.remove('open')
        button.className = 'bi bi-list'
    }else{
        menu.classList.add('open')
        button.className = 'bi bi-x-lg'

    }
}

function getWidth(){
    largura = window.screen.width
    if(largura > 800){
        menu.classList.remove('open')
        button.className = 'bi bi-list'

    }
}