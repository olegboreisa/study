import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import languageDetector from 'i18next-browser-languagedetector'

import en from './translation/en.json'
import lt from './translation/lt.json'

i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            lt,
            en
        },
        load: "languageOnly",
        ns: ['common'],
        defaultNS: 'common',
        fallbackLng: 'en',
        supportedLng: 'dev',
        whitelist: ['lt', 'en'],
        debug: true,
        interpolation: {
            escapeValue: false
        }
    });


export default i18next