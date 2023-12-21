import React from "react";
import { FormattedMessage } from "react-intl";
import ToggleTheme from "./ToggleTheme/ToggleTheme";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";


const navigation = [
	{ name: 'header.home', href: '#', current: false },
	{ name: 'header.about', href: '#', current: false },
	{ name: 'header.services', href: '#', current: false },
	{ name: 'header.contact', href: '#', current: false },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const Header = () => {
	return (
		<Disclosure as="nav" className="bg-website-200 dark:bg-dark-200">
			{({ open }) => (
				<>

					<div className="flex h-20 justify-between items-center px-5 sm:rounded-xl sm:m-5">
						<ToggleTheme />

						<div className="block sm:hidden">
							<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
								{open
									? (<XMarkIcon className="block h-6 w-6" aria-hidden="true" />)
									: (<Bars3Icon className="block h-6 w-6" aria-hidden="true" />)
								}
							</Disclosure.Button>
						</div>

						<div className="hidden sm:block">
							<div className="flex space-x-5">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="text-gray-100 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-100 px-3 py-2 rounded-md text-lg font-medium"
										aria-current={item.current ? 'page' : undefined}
									>
										<FormattedMessage id={item.name} />
									</a>
								))}
							</div>
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
									className={classNames(
										item.current
											? 'bg-gray-900'
											: 'text-gray-100 hover:bg-website-100 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-dark-100',
										'block px-3 py-2 rounded-md text-base font-medium'
									)}
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
