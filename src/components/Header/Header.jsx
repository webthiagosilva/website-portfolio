import React from "react";
import { FormattedMessage } from "react-intl";
import ToggleTheme from "./ToggleTheme/ToggleTheme";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";

const Header = () => {
	return (
		<div className="flex h-20 bg-website-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
			{/* <span className="text-gray-100">Thiago Silva</span> */}
			<LanguageSwitcher />

			<div className="flex space-x-10">
				<h1><FormattedMessage id="header.home" /></h1>
				<h1><FormattedMessage id="header.about" /></h1>
				<h1><FormattedMessage id="header.services" /></h1>
				<h1><FormattedMessage id="header.contact" /></h1>
			</div>

			<ToggleTheme />
		</div>
	);
}

export default Header;
