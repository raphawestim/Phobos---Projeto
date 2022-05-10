const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector(".menu-lateral");



botaoMenu.addEventListener("click",() => {
    menu.classList.toggle('menu-lateral--ativo');
})

function paginaAnimal(){
    window.location = "../data/CatalogoAnimal.html"
 }

 const numeroVisu = document.querySelector('.cartao_info--visualiza');
 const btnVisu = document.querySelector("[data-visualizacao]");

let visualizacoes = 0;

function addVisual(){
    visualizacoes++;
    numeroVisu.innerText = `${visualizacoes} Visualizações`;
}

btnVisu.addEventListener("click", addVisual);

document.addEventListener("DOMContentLoaded", function(event) {
    //console.log("DOM completamente carregado e analisado");
    $(".js-video-button").modalVideo({
        youtube:{
            controls:0,
            nocookie: true
        },
  url: "https://developer.a-blogcms.jp/themes/developer/movies/280.mp4"
    });
  });

  function saveCache(){
      
  }

