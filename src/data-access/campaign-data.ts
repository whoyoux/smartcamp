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

export const getCampaignById = async ({ campaignId, userId }: { campaignId: string, userId: string }) => {
	const campaign = await prisma.campaign.findUnique({
		where: {
			id: campaignId,
			userId,
		},
	});
	return campaign;
}