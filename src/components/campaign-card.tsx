import type { Campaign } from "@prisma/client";

export default function CampaignCard({ campaign }: { campaign: Campaign }) {
	return (
		<div className="w-full aspect-video cursor-pointer bg-card rounded-lg p-4 flex flex-col justify-between border">
			<div>
				<h3 className="text-lg font-semibold truncate">{campaign.name}</h3>
				<p className="text-muted-foreground truncate">{campaign.description}</p>
			</div>
			<div>
				<span className="text-sm text-muted-foreground truncate">
					{new Date(campaign.createdAt).toLocaleString()}
				</span>
			</div>
		</div>
	);
}
