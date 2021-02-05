import i18n from 'i18next'
import { initReactI18next } from "react-i18next"
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const languages = ['en', 'lt']

i18n
    // [LOAD TRANSLATIONS]
    .use(Backend)
    // [DETECT USER LANGUAGE]
    .use(LanguageDetector)
    // [PASS THE i18n INSTANCE TO react-i18next]
    .use(initReactI18next)
    // [INIT i18next]
    .init({
        fallbackLng: 'en',
        debug:true,

        interpolation: {
            escapeValue: false
        }
    })

export default i18n