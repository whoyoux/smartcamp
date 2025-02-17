"use client";
import { signIn, useSession } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { toast } from "sonner";

export default function LoginButton({ isPending }: { isPending: boolean }) {
	const login = async () => {
		const { data, error } = await signIn.social({
			provider: "discord",
			callbackURL: "/",
		});

		if (error) {
			//TODO: Send error to error reporting service
			console.error(error);
			toast.error(error.message || "An error occurred");
		}
	};
	return (
		<Button
			className="font-normal dark:font-semibold"
			disabled={isPending}
			onClick={async () => await login()}
		>
			Login via Google
		</Button>
	);
}
