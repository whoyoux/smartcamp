import CreateNewCampaign from "@/components/create-new-campaign";
import getSession from "@/lib/auth-server";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function DashboardPage() {
	const session = await getSession();
	if (!session) {
		return notFound();
	}

	const campaigns = await prisma.campaign.findMany({
		where: {
			userId: session.user.id,
		},
		orderBy: {
			createdAt: "desc",
		},
	});
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
						<div className="w-full aspect-video cursor-pointer bg-card rounded-lg p-4 flex flex-col justify-between">
							<div>
								<h3 className="text-lg font-semibold truncate">{cam.name}</h3>
								<p className="text-muted-foreground truncate">
									{cam.description}
								</p>
							</div>
							<div>
								<span className="text-sm text-muted-foreground truncate">
									{new Date(cam.createdAt).toLocaleString()}
								</span>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
