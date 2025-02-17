import getSession from "@/lib/auth-server";
import { notFound } from "next/navigation";

export default async function DashboardPage() {
	const session = await getSession();
	if (!session) {
		return notFound();
	}
	return <div>dashboard. only for logged in users</div>;
}
