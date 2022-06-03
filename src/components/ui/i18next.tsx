import React from "react";
import i18n, { init } from "i18next"
import { initReactI18next } from 'react-i18next';
import translationRU from '../locales/ru/translationRU.json'
import translationUZ from '../locales/uz/TranslationUZ.json'

const resources = {
    ru: {
        translation: translationRU
    },
    uz: {
        translation: translationUZ
    },

}

i18n
    .use(initReactI18next)
init({
    resources,
    lng: window.location.href.split('/')[window.location.href.split('/').length-1]==="ru" || window.location.href.split('/')[window.location.href.split('/').length-2]==="ru"?"ru":'uz',
    keySeparator: false,
    detection: {
        order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
        caches: ['cookie']
    },

    interpolation: {
        escapeValue: false
    }
});
export default i18n;