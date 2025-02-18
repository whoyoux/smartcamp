"use server";

import { prisma } from "@/lib/prisma";
import { authActionClient } from "@/lib/safe-action";
import { createNewCampaignFormSchema } from "@/schemas/campaign-schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createNewCampaignAction = authActionClient
	.schema(createNewCampaignFormSchema)
	.action(async ({ parsedInput: {name, description}, ctx: {session} }) => {
		console.log(session.user.name, name, description);

        let newCampaignId: string | null = null;

        try {
            const campaignDb = await prisma.campaign.create({
                data: {
                    name,
                    description,
                    user: {
                        connect: {
                            id: session.user.id
                        }
                    }
                }
            })

            newCampaignId = campaignDb.id
            
        } catch(err) {
            return {
                success: false,
                message: "Something went wrong."
            }
        }

        if(newCampaignId) {
            revalidatePath("/dashboard")
            redirect(`/dashboard/campaign/${newCampaignId}`)
        } else {
            return {
                success: false,
                message: "Something went wrong."
            }
        }
	});