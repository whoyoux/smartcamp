"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { createNewCampaignFormSchema } from "@/schemas/campaign-schema";
import type { z } from "zod";
import { createNewCampaignAction } from "@/actions/campaign-actions";
import { useState } from "react";
import { toast } from "sonner";

export default function CreateNewCampaign() {
	const [isPending, setIsPending] = useState(false);
	const form = useForm<z.infer<typeof createNewCampaignFormSchema>>({
		resolver: zodResolver(createNewCampaignFormSchema),
		defaultValues: {
			name: "",
			description: "",
		},
	});

	async function onSubmit(values: z.infer<typeof createNewCampaignFormSchema>) {
		setIsPending(true);
		const result = await createNewCampaignAction(values);
		setIsPending(false);

		if (result?.data?.success) {
			toast.success(result.data.message);
		}

		form.reset();
	}
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Create a new campain</Button>
			</DialogTrigger>
			<DialogContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<DialogHeader>
							<DialogTitle>Create a new campaign</DialogTitle>
							<DialogDescription>
								Write informations about your new campaign
							</DialogDescription>
						</DialogHeader>
						<div className="flex flex-col gap-4 py-4">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Campain name <span className="text-red-500">*</span>
										</FormLabel>
										<FormControl>
											<Input placeholder="xxx" {...field} />
										</FormControl>
										<FormDescription>
											This is your public display name.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="description"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Campain description</FormLabel>
										<FormControl>
											<Textarea placeholder="xxxxxxxx" {...field} rows={4} />
										</FormControl>
										<FormDescription>This field is optional.</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<DialogFooter>
							<Button type="submit" loading={isPending}>
								Save
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
