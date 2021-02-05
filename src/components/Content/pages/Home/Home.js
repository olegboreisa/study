import React from 'react'
import {useTranslation} from "react-i18next";

export default () => {
    const { t, i18n } = useTranslation('homepage')

    const languageHandler = (lang) => {
        i18n.changeLanguage(lang)
    }
    return (
        <>
        <div>
            {t('home')}
        </div>
            <button onClick={() => languageHandler('en')}>EN</button>
            <button onClick={() => languageHandler('lt')}>LT</button>
        </>
    )


}


