import { createAuthClient } from "better-auth/react";
export const { signIn, signUp, signOut, useSession } = createAuthClient({
	baseURL:
		process.env.NODE_ENV === "production"
			? "https://smartcamp.vercel.app/"
			: "http://localhost:3000",
});
