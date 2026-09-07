/* 
EFEITO DE DIGITAÇÃO
 */

function escrevendo() {

function toggleEscrita(elemento) {

    const textoOriginal = elemento.textContent.trim();

    const arrTexto = textoOriginal.split('');

    elemento.textContent = '';

    arrTexto.forEach((letra, i) => {

        setTimeout(() => {

            elemento.textContent += letra;

        }, 95 * i);

    });

}


const titulo = document.querySelector('.digitando');


if (titulo) {

    toggleEscrita(titulo);

}

}

escrevendo();

/* 
MENU MOBILE
 */

const menuIcon = document.querySelector('#menu-icon');

const navMenu = document.querySelector(
'header .nav-primary'
);

if (menuIcon && navMenu) {

menuIcon.addEventListener('click', () => {

    menuIcon.classList.toggle('fa-xmark');

    navMenu.classList.toggle('active');

});


const menuLinks = navMenu.querySelectorAll('a');


menuLinks.forEach(link => {

    link.addEventListener('click', () => {

        navMenu.classList.remove('active');

        menuIcon.classList.remove('fa-xmark');

    });

});

}

/* 
SOBRE MIM INTERATIVO
 */

const aboutOptions = document.querySelectorAll(
'.about-option'
);

const aboutImage = document.querySelector(
'#about-image'
);

const aboutTitle = document.querySelector(
'#about-title'
);

const aboutDescription = document.querySelector(
'#about-description'
);

const aboutInfo = document.querySelector(
'#about-info'
);

/* DADOS DAS OPÇÕES */

const aboutData = {

perfil: {

    image: 'img/about.jpg',


    title: 'Eu sou um desenvolvedor Web',


    description: `
        Sou apaixonado por tecnologia e programação.
        Busco criar soluções digitais que sejam funcionais,
        modernas e que proporcionem uma excelente experiência
        para os usuários.
    `,


    info: `

        <p>
            <i class="fas fa-user"></i>
            <span>Nome:</span>
            Dev da Silva
        </p>

        <p>
            <i class="fas fa-code"></i>
            <span>Área:</span>
            Desenvolvimento Web
        </p>

        <p>
            <i class="fas fa-map-marker-alt"></i>
            <span>Localização:</span>
            Brasil
        </p>

        <p>
            <i class="fas fa-envelope"></i>
            <span>Email:</span>
            dev@email.com
        </p>

        <p>
            <i class="fas fa-laptop-code"></i>
            <span>Experiência:</span>
            Front-end e Back-end
        </p>

        <p>
            <i class="fas fa-language"></i>
            <span>Línguas:</span>
            Português e Inglês
        </p>

    `

},


skills: {

    image: 'img/skills.png',


    title: 'Minhas habilidades',


    description: `
        Estou sempre buscando novos conhecimentos e aperfeiçoando
        minhas habilidades para acompanhar as tecnologias,
        tendências e desafios do mercado.
    `,


    info: `

        <p>
            <i class="fab fa-html5"></i>
            <span>Front-end:</span>
            HTML, CSS e JavaScript
        </p>

        <p>
            <i class="fab fa-react"></i>
            <span>Frameworks:</span>
            React
        </p>

        <p>
            <i class="fab fa-node-js"></i>
            <span>Back-end:</span>
            Node.js
        </p>

        <p>
            <i class="fas fa-database"></i>
            <span>Banco de dados:</span>
            SQL e NoSQL
        </p>

        <p>
            <i class="fab fa-git-alt"></i>
            <span>Versionamento:</span>
            Git e GitHub
        </p>

        <p>
            <i class="fas fa-mobile-screen"></i>
            <span>Mobile:</span>
            React Native
        </p>

    `

},


objetivos: {

    image: 'img/goals.png',


    title: 'Meus objetivos',


    description: `
        Meu objetivo é evoluir constantemente como desenvolvedor,
        participar de projetos desafiadores e transformar ideias
        em soluções digitais que façam uma diferença real.
    `,


    info: `

        <p>
            <i class="fas fa-rocket"></i>
            <span>Objetivo:</span>
            Evoluir constantemente
        </p>

        <p>
            <i class="fas fa-briefcase"></i>
            <span>Carreira:</span>
            Desenvolvedor Full Stack
        </p>

        <p>
            <i class="fas fa-lightbulb"></i>
            <span>Foco:</span>
            Criar soluções inovadoras
        </p>

        <p>
            <i class="fas fa-users"></i>
            <span>Ambiente:</span>
            Trabalho em equipe
        </p>

        <p>
            <i class="fas fa-book"></i>
            <span>Estudos:</span>
            Tecnologias modernas
        </p>

        <p>
            <i class="fas fa-chart-line"></i>
            <span>Meta:</span>
            Crescimento profissional
        </p>

    `

}

};

/* FUNÇÃO PARA ALTERAR O CONTEÚDO */

function changeAboutContent(selected) {

if (!aboutData[selected]) {

    return;

}


aboutImage.style.opacity = '0';

aboutTitle.style.opacity = '0';

aboutDescription.style.opacity = '0';

aboutInfo.style.opacity = '0';



setTimeout(() => {


    aboutImage.src =
        aboutData[selected].image;


    aboutTitle.textContent =
        aboutData[selected].title;


    aboutDescription.textContent =
        aboutData[selected].description;


    aboutInfo.innerHTML =
        aboutData[selected].info;



    aboutImage.style.opacity = '1';

    aboutTitle.style.opacity = '1';

    aboutDescription.style.opacity = '1';

    aboutInfo.style.opacity = '1';


}, 250);

}

/* EVENTOS DOS BOTÕES */

aboutOptions.forEach(option => {

option.addEventListener('mouseenter', () => {


    const selected =
        option.dataset.option;



    aboutOptions.forEach(item => {

        item.classList.remove('active');

    });


    option.classList.add('active');


    changeAboutContent(selected);


});


/* FUNCIONA TAMBÉM NO CELULAR */

option.addEventListener('click', () => {


    const selected =
        option.dataset.option;



    aboutOptions.forEach(item => {

        item.classList.remove('active');

    });


    option.classList.add('active');


    changeAboutContent(selected);


});

});

/* 
FORMULÁRIO DE CONTATO
 */

const contactForm = document.querySelector(
'.contact-form'
);

if (contactForm) {

contactForm.addEventListener(
    'submit',

    function (event) {


        event.preventDefault();


        const button =
            contactForm.querySelector('button');


        const textoOriginal =
            button.innerHTML;


        button.innerHTML =
            '<i class="fas fa-check"></i> Mensagem enviada!';


        button.style.backgroundColor =
            '#0fad85';


        setTimeout(() => {


            button.innerHTML =
                textoOriginal;


            contactForm.reset();


        }, 2500);


    }

);

}
