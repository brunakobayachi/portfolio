import i18next from "i18next";

import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            copyright: "All rights reserved.",
            home: "home",
            about: "about",
            works: "works",
            skills: 'skills',
            contact: 'contact',
            know: 'I know',
            development: 'Good development',
            means: 'Means',
            business: 'Good business',
            hello: 'Hello, I am',
            role:'Jr. Fullstack Developer',
            all: 'All',
            my: 'my',
            portfolio: 'Portfolio',
            exp: 'Experiences',
            talk: "Contact me!",
            name: 'Your name',
            email: 'Your email',
            message: 'Your message',
            sending: 'Sending',
            send: 'Send message',
            thanks: 'Thank you for your message!',
            about_title1: 'Frontend Development',
            desc1: "I'm a frontend developer looking to build various appealing and functional applications.",
            about_title2: 'Backend Development',
            desc2:"I'm completely passionate for backend development, and I want to build various functional applications.",
            work_name1:"Bachelor's degree in Energy Engineering",
            work_desc1: 'Started to study Energy Engineering, ends at 2022.',
            work_name2:'New Business Intern',
            work_desc2: 'Assistance at Distributed Generation sector with data intelligence, build and maintain the team dashboards, assistance at new business sector with studies and energy generation data analysis.',
            work_name3:'Program Jovens de Energia',
            work_desc3: "Participant at EnergyC's program, Jovens de Energia.",
            project_desc1:'Ignite Timer is a timer where you can set intervals between 5 and 60 minutes. You can also access the history of past timers set and the status of them.',
            project_desc2:'Pokemon data Web Scraping with Python',
            project_desc3:"Ignite Feed it's a simple social media where you can comment, delete and aplaud to interact at the application!",
            project_desc4:'This web app is totally responsible to mobile devices and has the function to change between languages (American English and Brazilian Portuguese).',
            project_desc5: 'Destiny Bond is an online Pok??dex, built with Vue.js, and is still under development. It utilizes a database created by web scraping Serebii.net with Python and storing the data in MongoDB. A collab with Diego Yuri.',
            portfolio_title: 'This portfolio!',
        },
    },

    pt_BR: {
        translation: {
            copyright: "Todos os direitos reservados.",
            home: "home",
            about: "sobre",
            works: "projetos",
            skills: 'habilidades',
            contact: 'contato',
            know: 'Um bom',
            development: 'Desenvolvimento',
            means: 'Significa um bom',
            business: 'Neg??cio',
            hello: 'Ol??, meu nome ??',
            role:'Desenvolvedora Fullstack J??nior',
            all: 'Todos',
            my: 'Meus',
            portfolio: 'Projetos',
            exp: 'Experi??ncias',
            talk: 'Entre em contato!',
            name: 'Seu nome',
            email: 'Seu email',
            message: 'Sua mensagem',
            sending: 'Enviando',
            send: 'Enviar mensagem',
            thanks: 'Obrigada por entrar em contato!',
            about_title1: 'Desenvolvimento Frontend',
            desc1: 'Sou uma desenvolvedora frontend com o desejo de construir diversas aplica????es bonitas e funcionais.',
            about_title2: 'Desenvolvimento Backend',
            desc2:"Sou completamente apaixonada pelo desenvolvimento backend e quero construir muitas aplica????es funcionais.",
            work_name1:'Gradua????o em Engenharia de Energia',
            work_desc1: 'Come??ou a estudar Engenharia de Energia, previs??o para forma????o em 2022.',
            work_name2:'Est??gio em Novos Neg??cios',
            work_desc2: 'Aux??lio na ??rea de Gera????o Distribu??da com intelig??ncia de dados, construir e manter manuten????o de dashboards da ??rea, aux??lio na ??rea de novos neg??cios com estudos e an??lises de dados de gera????o de energia.',
            work_name3:'Programa Jovens de Energia',
            work_desc3: 'Participante do programa Jovens de Energia da EnergyC.',
            project_desc1:'Ignite Timer ?? um timer onde voc?? pode definir intervalos de 5 a 60 minutos. Voc?? tamb??m pode acessar o hist??rico de timers e o status deles.',
            project_desc2:'Web Scraping de dados de Pokemon usando Python',
            project_desc3:"Ignite Feed ?? uma rede social simples, onde voc?? pode fazer coment??rios, delet??-los e aplaudir para interagir com a aplica????o!",
            project_desc4:'Essa aplica????o ?? totalmente responsiva e tem a fun????o de trocar o idioma (ingl??s americano e portug??s brasileiro).',
            project_desc5:'Destiny Bond ?? uma Pok??dex feita em Vue.js, e est?? em desenvolvimento. ?? utilizado um banco de dados criado com um web scraping em Python no site Serebii.net e armazenado no MongoDB. Uma colabora????o com Diego Yuri.',
            portfolio_title: 'Este portfolio!'
        },
    },
};

i18next

    .use(initReactI18next)

    .init({
        resources,

        lng: "pt_BR",

        interpolation: {
            escapeValue: false,
        },
    });

export default i18next;
