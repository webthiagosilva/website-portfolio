import React from 'react';
import LocaleProvider from './i18n/LocalesProvider';
import Header from './components/Header/Header';

const App = () => {
  return (
    <LocaleProvider>
      <div className="h-screen">
        <Header />
      </div>
    </LocaleProvider>
  );
};

export default App;
