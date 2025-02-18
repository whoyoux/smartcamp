import CampaignCard from "@/components/campaign-card";
import CreateNewCampaign from "@/components/create-new-campaign";
import { getAllCampaings } from "@/data-access/campaign-data";
import getSession from "@/lib/auth-server";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function DashboardPage() {
	const session = await getSession();
	if (!session) {
		return notFound();
	}

	const campaigns = await getAllCampaings({ userId: session.user.id });
	return (
		<div className="flex flex-col gap-4">
			<div className="w-full flex justify-between items-center">
				<h2 className="text-xl font-semibold">My campaigns</h2>
				<CreateNewCampaign />
			</div>
			{/* <pre>{JSON.stringify(campaigns, null, 2)}</pre> */}
			<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{campaigns.map((cam) => (
					<Link key={cam.id} href={`/dashboard/campaign/${cam.id}`}>
						<CampaignCard campaign={cam} />
					</Link>
				))}
			</div>
		</div>
	);
}
