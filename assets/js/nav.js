const btnMenu = document.getElementById("menu-btn")

btnMenu.addEventListener('click', ()=>{
    const menu = document.querySelector('.menu-container')
    const mainDiv = document.querySelector('main')
    if(menu.classList.contains('closed-menu')){
        menu.classList.remove('closed-menu')
        btnMenu.innerHTML = 'close'
        mainDiv.style.marginLeft = '424px'
    }else{
        menu.classList.add('closed-menu')
        btnMenu.innerHTML = 'menu'
        mainDiv.style.marginLeft = '74px'
    }  
})