import React from 'react';
import LocaleProvider from './i18n/LocalesProvider';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <LocaleProvider>
      <div className='h-screen'>
        <Header />
        <Home />
        <About />
        <Services />
        <Contact />
      </div>
    </LocaleProvider>
  );
};

export default App;
