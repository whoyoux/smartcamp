"use client";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	campaignContentSchema,
	type GeneratedCampaignContent,
} from "@/lib/ai-campaign";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

export default function CreateAd() {
	const form = useForm<GeneratedCampaignContent>({
		resolver: zodResolver(campaignContentSchema),
	});

	const onSubmit = async (data: GeneratedCampaignContent) => {
		toast.success("Ad created successfully");
		// Add your ad creation logic here
	};
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="adTitle"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Ad Title <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter your ad title (5-100 characters)"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								A compelling title for your advertisement
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="adDescription"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Ad Description <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Enter your ad description (20-200 characters)"
									{...field}
									rows={4}
								/>
							</FormControl>
							<FormDescription>
								Detailed description of your advertisement
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="callToAction"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Call to Action <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<Input
									placeholder="e.g., Shop Now, Learn More, Sign Up (2-30 characters)"
									{...field}
								/>
							</FormControl>
							<FormDescription>Action you want users to take</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="socialMediaPosts"
					render={({ field: { onChange, value, ...field } }) => (
						<FormItem>
							<FormLabel>
								Social Media Posts <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<div className="space-y-2">
									{[...Array(5)].map((_, index) => (
										<Textarea
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											key={index}
											placeholder={`Social media post ${index + 1} (10-280 characters)`}
											value={value?.[index] || ""}
											onChange={(e) => {
												const newPosts = [...(value || [])];
												newPosts[index] = e.target.value;
												onChange(newPosts.filter(Boolean));
											}}
											{...field}
										/>
									))}
								</div>
							</FormControl>
							<FormDescription>
								Add 1-5 social media posts for your campaign
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="suggestedImages"
					render={({ field: { onChange, value, ...field } }) => (
						<FormItem>
							<FormLabel>
								Image Descriptions <span className="text-red-500">*</span>
							</FormLabel>
							<FormControl>
								<div className="space-y-2">
									{[...Array(3)].map((_, index) => (
										<Textarea
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											key={index}
											placeholder={`Image description ${index + 1} (10-500 characters)`}
											value={value?.[index] || ""}
											onChange={(e) => {
												const newDescriptions = [...(value || [])];
												newDescriptions[index] = e.target.value;
												onChange(newDescriptions.filter(Boolean));
											}}
											{...field}
											rows={3}
										/>
									))}
								</div>
							</FormControl>
							<FormDescription>
								Add 1-3 image descriptions for your campaign
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" className="w-full">
					Create Ad
				</Button>
			</form>
		</Form>
	);
}
