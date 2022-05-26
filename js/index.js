const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector(".menu-lateral");



// const btnAtiva = document.querySelector('btnView');
// const div = document.querySelector('containerView');

// console.log(btnView);
// console.log(containerView);

// btnAtiva.addEventListener("click", function(){
//   const div = document.getElementById('containerView');
//     div.classList.toggle('hide');

// })
function onDiv(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none")
      document.getElementById(el).style.display = 'block';
    else
      document.getElementById(el).style.display = 'none';
  }

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

 function aranhas(){
    window.location = "../data/aranhas.html"
 }

 function cosmos(){
  window.location = "../data/cosmofobia.html"
}

function relato1(){
  window.location = "../data/relato1.html"
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

  function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

console.log("este navagador e IE?: " + isIE());