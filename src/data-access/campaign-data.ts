import "server-only";

import { prisma } from "@/lib/prisma";

export const getAllCampaings = async ({ userId }: { userId: string }) => {
	const campaigns = await prisma.campaign.findMany({
		where: {
			userId,
		},
		orderBy: {
			createdAt: "desc",
		},
	});
	return campaigns;
};