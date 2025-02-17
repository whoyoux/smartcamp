"use client";

import Link from "next/link";
import LoginButton from "./login-button";
import { ThemeModeDropdown } from "../theme-mode-dropdown";
import { useSession } from "@/lib/auth-client";
import AuthUser from "./auth-user";

function Header() {
	const { isPending, data: session, error } = useSession();

	return (
		<header className="w-full max-w-screen-xl mx-auto px-2 py-6 flex justify-between items-center border-b mb-8">
			<Link href="/">
				<h1 className="text-lg font-semibold">SmartCamp</h1>
			</Link>
			<div className="flex items-center gap-2">
				{session ? (
					<AuthUser user={session.user} />
				) : (
					<LoginButton isPending={isPending} />
				)}
				<ThemeModeDropdown />
			</div>
		</header>
	);
}

export default Header;
