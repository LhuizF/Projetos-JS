function btnNav() {
    const btnMenu = document.getElementById("menu-btn")
    btnMenu.addEventListener('click', () => {
        const menu = document.querySelector('.menu-container')
        const mainDiv = document.querySelector('main')
        if (menu.classList.contains('closed-menu')) {
            menu.classList.remove('closed-menu')
            btnMenu.innerHTML = 'close'
            mainDiv.style.marginLeft = '424px'
        } else {
            menu.classList.add('closed-menu')
            btnMenu.innerHTML = 'menu'
            mainDiv.style.marginLeft = '74px'
        }
    })
}

async function navMenu() {
    const nav = document.querySelector('nav')
    const response = await fetch("../pages/includes/nav.html")
    const responseText = await response.text()

    nav.innerHTML += responseText

    btnNav()
}

async function footer(){
    const footer = document.querySelector('footer')
    const response = await fetch("../pages/includes/footer.html")
    const responseText = await response.text()

    footer.innerHTML += responseText
}

async function header(){
    const header = document.querySelector('header')
    const response = await fetch("../pages/includes/header.html")
    const responseText = await response.text()

    header.innerHTML += responseText
}

function start(){
    header()
    navMenu()
    footer()
}

export default start