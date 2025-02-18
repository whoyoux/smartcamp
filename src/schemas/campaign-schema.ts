import { z } from "zod";

export const createNewCampaignFormSchema = z.object({
	name: z
		.string()
		.min(4, {
			message: "Name has to have at least 4 characters.",
		})
		.max(100, {
			message: "Name has to have max 100 characters.",
		}),
	description: z
		.string()
		.max(255, { message: "Description has to have max 255 characters." })
		.optional(),
});