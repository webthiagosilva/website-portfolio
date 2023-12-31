import React from "react";
import { FormattedMessage } from 'react-intl';
import Duck from "../../assets/icons/duck.gif";

const Home = () => {
    return (
        <div id="home" className="flex items-center justify-center h-screen relative overflow-hidden">
            <div className="duck-animation">
                <img src={Duck} alt="duck" />
            </div>
            <div className="text-animation">
                <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-center text-website-300 dark:text-dark-100">
                    <FormattedMessage
                        id="home.greeting"
                        defaultMessage="Olá, Eu sou <span>Thiago.</span>"
                        values={{
                            span: chunks => <span className="text-website-200 dark:text-dark-200">{chunks}</span>
                        }}
                    />
                </h1>
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center text-website-300 dark:text-dark-100">
                    <FormattedMessage
                        id="home.introduction"
                        defaultMessage="Da imaginação à inovação, <span>transformo ideias em realidade com o poder da programação.</span>"
                        values={{
                            span: chunks => <span className="text-website-200 dark:text-dark-200">{chunks}</span>
                        }}
                    />
                </h2>
            </div>
        </div>
    );
}

export default Home;
