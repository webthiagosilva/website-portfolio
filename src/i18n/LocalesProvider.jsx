import React, { useState, createContext } from 'react';
import { IntlProvider } from 'react-intl';
import ptBR from './locales/pt-BR.json';
import enUS from './locales/en-US.json';

export const LanguageContext = createContext();

const messages = {
    'pt-BR': ptBR,
    'en-US': enUS,
};

const LocaleProvider = ({ children }) => {
    const [locale, setLocale] = useState('pt-BR');

    return (
        <LanguageContext.Provider value={{ locale, setLocale }}>
            <IntlProvider locale={locale} messages={messages[locale]}>
                {children}
            </IntlProvider>
        </LanguageContext.Provider>
    );
};

export default LocaleProvider;
