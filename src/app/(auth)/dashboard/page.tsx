import CreateNewCampain from "@/components/create-new-campain";
import getSession from "@/lib/auth-server";
import { notFound } from "next/navigation";

export default async function DashboardPage() {
	const session = await getSession();
	if (!session) {
		return notFound();
	}
	return (
		<div>
			<div className="w-full flex justify-between items-center">
				<h2 className="text-xl font-semibold">My campains</h2>
				<CreateNewCampain />
			</div>
		</div>
	);
}
