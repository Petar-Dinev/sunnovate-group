import { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        return sessionStorage.getItem('lang') || 'en'
    })

    const changeLanguage = (lang) => {
        setLanguage(lang);
        sessionStorage.setItem('lang', lang)
    }

    const value = {
        language,
        changeLanguage
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}