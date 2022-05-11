const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector(".menu-lateral");



botaoMenu.addEventListener("click",() => {
    menu.classList.toggle('menu-lateral--ativo');
})

function paginaAnimal(){
    window.location = "../data/CatalogoAnimal.html"
 }

 function paginaVideo(){
    window.location = "../data/video1.html"
 }

 function paginaVideo2(){
    window.location = "../data/video2.html"
 }

 const numeroVisu = document.querySelector('.cartao_info--visualiza');
 const btnVisu = document.querySelector("[data-visualizacao]");

 // Local Storage ------------------------//
 function getLocalStorage(){
    const visualizacoesLocalStorage = JSON.parse(localStorage.getItem('visualizacoes')) || 0;
    numeroVisu.innerText = `${visualizacoesLocalStorage} Visualizações`
    return visualizacoesLocalStorage;
}

getLocalStorage();

// Contador de cliques ------------------------//
function addVisualizacoes(){
    let visualizacoesLocalStorage = getLocalStorage();
    visualizacoesLocalStorage += 1;
    localStorage.setItem('visualizacoes', JSON.stringify(visualizacoesLocalStorage));
    getLocalStorage();
}
btnVisu.addEventListener("click", addVisualizacoes);




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

