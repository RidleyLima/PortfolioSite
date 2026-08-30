
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