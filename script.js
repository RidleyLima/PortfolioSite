
function escrevendo(){
function toggleEscrita(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 95 * i);
    });
}

const titulo = document.querySelector('.digitando');
toggleEscrita(titulo);
}

escrevendo();

const menuIcon = document.querySelector('.fa-bars');
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('fa-xmark');
        const nav = document.querySelector('nav');
        nav.classList.toggle('active');
    })