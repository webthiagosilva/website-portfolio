import ToggleTheme from "./ToggleTheme/ToggleTheme";

const Header = ({ user }) => {
	return <div className="flex h-20 bg-website-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
		<span className="text-gray-100">Thiago Silva</span>
		
		<div className="flex space-x-5">
			<h1>Home</h1>
			<h1>About</h1>
			<h1>Contact</h1>
		</div>

		<ToggleTheme />
	</div>
}

export default Header;
