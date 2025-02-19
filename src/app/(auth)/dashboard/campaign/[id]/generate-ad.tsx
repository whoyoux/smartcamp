"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { mockGenerateCampaignContent } from "@/lib/ai-campaign";

const generateAdFormSchema = z.object({
	targetAudience: z
		.string()
		.min(10, "Target audience must be at least 10 characters"),
	productDescription: z
		.string()
		.min(20, "Product description must be at least 20 characters"),
	campaignGoals: z.string().min(1, {
		message: "Please select a campaign goal",
	}),
	toneOfVoice: z.string().min(1, {
		message: "Please select a tone of voice",
	}),
	keyMessage: z.string().min(10, "Key message must be at least 10 characters"),
	specialRequirements: z.string().optional(),
});

type GenerateAdFormValues = z.infer<typeof generateAdFormSchema>;

export default function GenerateAd() {
	const [isPending, setIsPending] = useState(false);
	const form = useForm<GenerateAdFormValues>({
		resolver: zodResolver(generateAdFormSchema),
		defaultValues: {
			targetAudience: "",
			productDescription: "",
			campaignGoals: "",
			toneOfVoice: "",
			keyMessage: "",
			specialRequirements: "",
		},
	});

	async function onSubmit(values: GenerateAdFormValues) {
		setIsPending(true);
		try {
			// const content = await mockGenerateCampaignContent(values);
			// console.log("Generated content:", content);
			toast.success("Ad content generated successfully");
		} catch (error) {
			console.error("Error generating content:", error);
			toast.error("Failed to generate ad content");
		} finally {
			setIsPending(false);
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="targetAudience"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Target Audience <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder="e.g., Tech-savvy professionals aged 25-35, interested in productivity tools, active on LinkedIn, based in major urban areas"
									{...field}
									rows={4}
								/>
							</FormControl>
							<FormDescription>
								Describe your target audience (e.g., age, interests,
								demographics)
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="productDescription"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Product/Service Description{" "}
								<span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder="e.g., Our AI-powered marketing platform helps businesses automate their social media presence. Key features: content scheduling, analytics dashboard, AI post generation. Benefits: saves 10+ hours weekly, increases engagement by 40%"
									{...field}
									rows={4}
								/>
							</FormControl>
							<FormDescription>
								Describe your product or service in detail
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="campaignGoals"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Campaign Goals <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
									required
								>
									<SelectTrigger>
										<SelectValue placeholder="Select campaign goal" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="awareness">Brand Awareness</SelectItem>
										<SelectItem value="leads">Lead Generation</SelectItem>
										<SelectItem value="sales">Direct Sales</SelectItem>
										<SelectItem value="engagement">
											Social Engagement
										</SelectItem>
										<SelectItem value="traffic">Website Traffic</SelectItem>
									</SelectContent>
								</Select>
							</FormControl>
							<FormDescription>
								Choose the primary goal for your campaign
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="toneOfVoice"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Tone of Voice <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
									required
								>
									<SelectTrigger>
										<SelectValue placeholder="Select tone of voice" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="professional">Professional</SelectItem>
										<SelectItem value="casual">Casual & Friendly</SelectItem>
										<SelectItem value="humorous">Humorous</SelectItem>
										<SelectItem value="formal">Formal</SelectItem>
										<SelectItem value="luxury">
											Luxury & Sophisticated
										</SelectItem>
									</SelectContent>
								</Select>
							</FormControl>
							<FormDescription>
								Choose the tone that best matches your brand voice
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="keyMessage"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Key Message <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder="e.g., Our platform empowers marketers to create high-converting campaigns in minutes, not hours - letting them focus on strategy while AI handles the execution"
									{...field}
									rows={4}
								/>
							</FormControl>
							<FormDescription>
								What&apos;s the main message you want to convey?
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="specialRequirements"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Special Requirements</FormLabel>
							<FormControl>
								<Textarea
									placeholder="e.g., Must include our brand colors (blue #1E40AF and gray #374151), avoid negative language about competitors, focus on empowerment rather than automation replacing jobs"
									{...field}
									rows={4}
								/>
							</FormControl>
							<FormDescription>
								Any specific requirements or preferences for your campaign
								(optional)
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="flex items-center justify-end">
					<Button type="submit" disabled={isPending}>
						<Wand2 className="w-4 h-4 mr-2" />
						Generate Campaign Content
					</Button>
				</div>
			</form>
		</Form>
	);
}
