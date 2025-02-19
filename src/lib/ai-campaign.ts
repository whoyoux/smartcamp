import { z } from "zod";

interface CampaignGenerationInput {
    targetAudience: string;
    productDescription: string;
    campaignGoal: string;
    toneOfVoice: string;
    keyMessage: string;
    specialRequirements?: string;
}

// Zod schema for AI response validation
export const campaignContentSchema = z.object({
    adTitle: z.string()
        .min(5, "Ad title must be at least 5 characters")
        .max(100, "Ad title must not exceed 100 characters"),
    adDescription: z.string()
        .min(20, "Ad description must be at least 20 characters")
        .max(200, "Ad description must not exceed 200 characters"),
    callToAction: z.string()
        .min(2, "Call to action must be at least 2 characters")
        .max(30, "Call to action must not exceed 30 characters"),
    socialMediaPosts: z.array(z.string()
        .min(10, "Social media post must be at least 10 characters")
        .max(280, "Social media post must not exceed 280 characters"))
        .min(1, "At least one social media post is required")
        .max(5, "Maximum 5 social media posts allowed"),
    suggestedImages: z.array(z.string()
        .min(10, "Image description must be at least 10 characters")
        .max(500, "Image description must not exceed 500 characters"))
        .min(1, "At least one image suggestion is required")
        .max(3, "Maximum 3 image suggestions allowed"),
});

// Type inference from the Zod schema
export type GeneratedCampaignContent = z.infer<typeof campaignContentSchema>;

export function generateAIPrompt(input: CampaignGenerationInput): string {
    return `As an AI marketing expert, create a comprehensive marketing campaign based on the following information:

TARGET AUDIENCE:
${input.targetAudience}

PRODUCT/SERVICE:
${input.productDescription}

CAMPAIGN GOAL: ${input.campaignGoal}
TONE OF VOICE: ${input.toneOfVoice}

KEY MESSAGE:
${input.keyMessage}

${input.specialRequirements ? `SPECIAL REQUIREMENTS/CONSTRAINTS:\n${input.specialRequirements}` : ''}

Please create a marketing campaign that includes:

1. Main Advertisement:
   - Create a compelling headline that captures attention
   - Write a persuasive ad description (max 200 characters)
   - Suggest an appropriate call-to-action

2. Social Media Content:
   - Generate 3 unique social media posts
   - Each post should be platform-agnostic and under 280 characters
   - Include relevant hashtag suggestions

3. Visual Suggestions:
   - Describe 2-3 image concepts that would complement the campaign
   - Include specific details about composition, style, and elements to include

Remember to:
- Maintain consistent branding and messaging across all content
- Ensure all content aligns with the specified tone of voice
- Focus on the target audience's pain points and desires
- Emphasize the unique value proposition
- Keep the campaign goal in mind for all generated content

Format the response in clear sections for easy implementation.`;
}

export async function mockGenerateCampaignContent(input: CampaignGenerationInput): Promise<GeneratedCampaignContent> {
    // This is a mock function that simulates AI response
    // In production, this would make an actual API call to an AI service
    
    console.log("Generated AI Prompt:", generateAIPrompt(input));
    
    // Mock response
    const mockResponse = {
        adTitle: "Transform Your Digital Presence Today",
        adDescription: "Unlock the power of AI-driven marketing with our cutting-edge platform. Reach your audience more effectively than ever before.",
        callToAction: "Start Your Journey",
        socialMediaPosts: [
            "🚀 Ready to revolutionize your marketing? Our AI-powered platform helps you create stunning campaigns in minutes. #MarketingAI #DigitalTransformation",
            "💡 Smart marketing doesn't have to be complicated. Let AI do the heavy lifting while you focus on growth. Try it now!",
            "✨ Your competitors are already using AI. Don't fall behind - join the marketing revolution today! #AIMarketing #Innovation"
        ],
        suggestedImages: [
            "Modern workspace with laptop showing campaign dashboard - warm, inviting lighting with soft bokeh effect",
            "Split screen showing before/after of marketing results - clean, data-driven visuals with brand colors",
            "Happy team members collaborating around a digital display - diverse, authentic workplace setting"
        ]
    };

    // Validate the response using Zod schema
    const validatedResponse = campaignContentSchema.parse(mockResponse);
    
    return validatedResponse;
}
