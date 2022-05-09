const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector(".menu-lateral");



botaoMenu.addEventListener("click",() => {
    menu.classList.toggle('menu-lateral--ativo');
})

function paginaAnimal(){
    window.location = "../data/CatalogoAnimal.html"
 }

