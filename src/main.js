let btnCloseMenuMobile = document.querySelector('.btn-close-menu-mobile');
let menuBarMobile = document.querySelector('.menu-bar-mobile');
let btnNavMenu = document.querySelector('.btn-nav-menu');
let displayNone = (componente) => componente.style.display = 'none';
let displayBlock = (componente) => componente.style.display = 'block';



btnNavMenu.addEventListener('click', function () {
    menuBarMobile.style.height = document.querySelector('body').offsetHeight + 'px';
    displayBlock(menuBarMobile)
});
btnCloseMenuMobile.addEventListener('click', function () {
    displayNone(menuBarMobile)
}
);

let homeWelcome = document.querySelector('.home-welcome');
let homeContratarMaoObra = document.querySelector('.home-contratar-mao-obra');
let homeSobre = document.querySelector('.home-sobre');

function scrollElemento(section) {
    displayNone(menuBarMobile);
    let posicaoElemento = section.offsetTop;
    window.scrollTo(0, posicaoElemento);
}

let btnSobreNos = document.querySelector('.btn-sobre-nos');
btnSobreNos.addEventListener('click', () => scrollElemento(homeSobre));

let btnPaginaInicial = document.querySelector('.btn-pagina-inicial');
btnPaginaInicial.addEventListener('click', () => scrollElemento(homeWelcome));

let btnContratarMaoObra = document.querySelector('.btn-contratar-mao-obra');
btnContratarMaoObra.addEventListener('click', () => scrollElemento(homeContratarMaoObra));

let menuMobileLI = document.querySelectorAll('li');
for (i = 0; i < menuMobileLI.length; i++) {
    menuMobileLI[0].addEventListener('click', () => scrollElemento(homeWelcome));
    menuMobileLI[1].addEventListener('click', () => scrollElemento(homeContratarMaoObra));
    menuMobileLI[2].addEventListener('click', () => scrollElemento(homeSobre));
}

let btnPesquisarFuncionario = document.querySelector('.btn-pesquisar-funcionario');
let btnCloseWorkers = document.querySelector('.btn-close-workers');
let workers = document.querySelector('.workers');

btnPesquisarFuncionario.addEventListener('click', () => displayBlock(workers));
btnCloseWorkers.addEventListener('click', () => displayNone(workers));


cardWorkers = document.querySelectorAll('.card-worker');
let btnFinalizarContrato = document.querySelectorAll('.btn-finalizar-contrato');


for (i = 0; i < cardWorkers.length; i++) {
    btnFinalizarContrato[i].addEventListener('click', function () {
        alert('O profissional receberá o seu contato !');
        displayNone(workers);
    });
}




