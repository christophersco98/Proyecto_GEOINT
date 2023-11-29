/* Este código hace que el menú de navegación se cierre cuando se hace clic en cualquier parte de la ventana del navegador fuera del menú o indiceelemento. Esto evita que el menú permanezca abierto accidentalmente cuando el usuario hace clic en otras partes de la página.*/

const indice = document.querySelector('.indice');
const menu = document.querySelector('.menu-navegacion');



indice.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})


window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != indice ){
        
        menu.classList.toggle("spread")
    }
})