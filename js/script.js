// Botão de Pesquisa 

let formPesquisa = document.querySelector('.form-pesquisa');

document.querySelector('#pesquisa-btn').onclick = () => {
    formPesquisa.classList.toggle('active');
    navbar.classList.remove('active');
    carrinho.classList.remove('active');
    login.classList.remove('active');
}


//Botão Carrinho 

let carrinho = document.querySelector('.carrinho');

document.querySelector('#cart-btn').onclick = () => {
    carrinho.classList.toggle('active');
    navbar.classList.remove('active');
    formPesquisa.classList.remove('active');
    login.classList.remove('active');
}


//Botão Login 

let login = document.querySelector('.form-login');

document.querySelector('#login-btn').onclick = () => {
    login.classList.toggle('active');
    navbar.classList.remove('active');
    formPesquisa.classList.remove('active');
    carrinho.classList.remove('active');
}


//Botão Menu 

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    formPesquisa.classList.remove('active');
    carrinho.classList.remove('active');
    login.classList.remove('active');
}


//Slides

let slides = document.querySelectorAll('.home .slides-container .slide')
let index = 0;

function proximo(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function anterior(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}