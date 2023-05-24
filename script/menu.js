document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    
    document.getElementById('menuOpen').addEventListener('click', () => {
        menu.classList.toggle('show-menu');
    })

    document.getElementById('menuClose').addEventListener('click', () => {
        menu.classList.remove('show-menu');
    })
})

