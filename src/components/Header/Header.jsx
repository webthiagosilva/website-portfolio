import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import ToggleTheme from "./ToggleTheme/ToggleTheme";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navigation = [
	{ name: 'header.home', href: '#home', current: false },
	{ name: 'header.about', href: '#about', current: false },
	{ name: 'header.services', href: '#services', current: false },
	{ name: 'header.contact', href: '#contact', current: false },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const Header = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<Disclosure as="nav" className={({ open }) => classNames(
			"fixed top-0 left-0 right-0 z-10 transition-colors duration-300",
			open || scrolled ? "bg-website-300 dark:bg-dark-300" : "bg-transparent"
		)}>
			{({ open }) => (
				<>
					<div className="flex h-20 items-center justify-between px-10 sm:rounded-xl">
						<ToggleTheme />

						<div className="hidden sm:block">
							<div className="flex space-x-5">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="px-3 py-2 rounded-md text-lg font-medium text-website-100 hover:scale-110 transition-transform duration-300"
										aria-current={item.current ? 'page' : undefined}
									>
										<FormattedMessage id={item.name} />
									</a>
								))}
							</div>
						</div>

						<div className="block sm:hidden">
							<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-website-100 hover:bg-website-300 dark:hover:bg-dark-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
								{open
									? (<XMarkIcon className="block h-6 w-6" aria-hidden="true" />)
									: (<Bars3Icon className="block h-6 w-6" aria-hidden="true" />)
								}
							</Disclosure.Button>
						</div>

						<LanguageSwitcher />
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className="block px-8 py-2 rounded-md text-base font-medium text-website-100 hover:bg-website-200 dark:hover:bg-dark-400"
									aria-current={item.current ? 'page' : undefined}
								>
									<FormattedMessage id={item.name} />
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}

export default Header;
