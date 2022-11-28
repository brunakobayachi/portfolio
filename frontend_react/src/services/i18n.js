import i18next from "i18next";

import { initReactI18next } from "react-i18next";

// "Inline" English and Arabic translations.

// We can localize to any language and any number of languages.

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
            thanks: 'Thank you for your message!'
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
            business: 'Negócio',
            hello: 'Olá, meu nome é',
            role:'Desenvolvedora Fullstack Júnior',
            my: 'Meus',
            portfolio: 'Projetos',
            exp: 'Experiências',
            talk: 'Entre em contato!',
            name: 'Seu nome',
            email: 'Seu email',
            message: 'Sua mensagem',
            sending: 'Enviando',
            send: 'Enviar mensagem',
            thanks: 'Obrigada por entrar em contato!'
        },
    },
};

i18next

    .use(initReactI18next)

    .init({
        resources,

        lng: "en",

        interpolation: {
            escapeValue: false,
        },
    });

export default i18next;
