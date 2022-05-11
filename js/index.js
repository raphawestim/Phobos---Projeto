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

// Local Storage --------------------------------------------------------------------//
 function getLocalStorage(){
     let visualizacoes;
    const visuStorage = JSON.parse(localStorage.getItem('visualizacoes') )|| {};
    visualizacoes = visuStorage.visu;
    numeroVisu.innerText = `${visuStorage.visu} Visualizações`;
    return {visualizacoes, visuStorage};
 }

 getLocalStorage();

 // evento de salvar Visualizações------------------------------------------//
 function addVisual(){
    let {visualizacoes, visuStorage} = getLocalStorage();
    visualizacoes++;
    visuStorage["visu"] = visualizacoes;
    localStorage.setItem("visualizacoes", JSON.stringify(visuStorage));
    numeroVisu.innerText = `${visuStorage.visu} Visualizações`;
}

console.log(numeroVisu);

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

