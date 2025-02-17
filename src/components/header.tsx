import { ThemeModeDropdown } from "./theme-mode-dropdown";

function Header() {
	return (
		<header className="w-full max-w-screen-xl mx-auto px-2 py-6 flex justify-between items-center border-b mb-8">
			<h1 className="text-lg font-semibold">SmartCamp</h1>
			<div className="flex items-center gap-4">
				<span>not auth</span>
				<ThemeModeDropdown />
			</div>
		</header>
	);
}

export default Header;
