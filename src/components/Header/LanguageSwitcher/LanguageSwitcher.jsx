import React, { useContext } from 'react';
import { LanguageContext } from '../../../i18n/LocalesProvider';
import ptbr from "../../../assets/icons/br-flag.png";
import en from "../../../assets/icons/usa-flag.png";

const LanguageSwitcher = () => {
	const { locale, setLocale } = useContext(LanguageContext);

	const toggle = () => {
		setLocale(locale === 'pt-BR' ? 'en-US' : 'pt-BR');
	};

	return (
		<div className="hidden sm:block">
			{locale === 'pt-BR'
				? <img src={en} className="h-8 text-gray-100 cursor-pointer" onClick={toggle} />
				: <img src={ptbr} className="h-8 text-gray-100 cursor-pointer" onClick={toggle} />
			}
		</div>

		// <button onClick={toggle}>
		// 	{locale === 'pt-BR'
		// 		? <img src={ptbr} className="h-8 text-gray-100 cursor-pointer" />
		// 		: <img src={en} className="h-8 text-gray-100 cursor-pointer" />}
		// </button>
	);
};

export default LanguageSwitcher;
