import { Button } from "@/components/ui/button";
import { getCampaignById } from "@/data-access/campaign-data";
import getSession from "@/lib/auth-server";
import { ArrowLeft, Image as ImageIcon, Type, Wand2, X } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import GenerateAd from "./generate-ad";

import CreateAd from "./create-ad";

const CampaignNotFound = () => {
	return (
		<div className="w-full flex flex-col items-center pt-4">
			<h2 className="text-2xl font-semibold">Campaign not found</h2>
			<Link href="/dashboard">
				<Button variant="link">Go back to dashboard</Button>
			</Link>
		</div>
	);
};

const GoBackToDashboardButton = () => {
	return (
		<div>
			<Link href="/dashboard">
				<Button variant="link" className="flex items-center gap-2">
					<ArrowLeft />
					Go back to dashboard
				</Button>
			</Link>
		</div>
	);
};

export default async function CampaignPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const id = (await params).id;
	if (!id || typeof id !== "string") return notFound();

	const session = await getSession();
	if (!session) return notFound();

	const campaign = await getCampaignById({
		campaignId: id,
		userId: session.user.id,
	});
	if (!campaign) return <CampaignNotFound />;

	return (
		<div className="flex flex-col gap-8">
			<GoBackToDashboardButton />

			<Tabs defaultValue="overview" className="w-full">
				<TabsList>
					<TabsTrigger value="overview">Overview</TabsTrigger>
					<TabsTrigger value="create-ad">Create Ad</TabsTrigger>
					<TabsTrigger value="assets">Assets</TabsTrigger>
				</TabsList>

				<TabsContent value="overview">
					<Card>
						<CardHeader>
							<CardTitle>Campaign Overview</CardTitle>
							<CardDescription>
								View and manage your campaign details
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="grid w-full gap-4">
								<div className="space-y-2">
									<Label>Campaign Name</Label>
									<Input value={campaign.name} readOnly />
								</div>
								<div className="space-y-2">
									<Label>Description</Label>
									<Textarea value={campaign.description || ""} readOnly />
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="create-ad">
					<Card>
						<CardHeader>
							<CardTitle>Create New Ad</CardTitle>
							<CardDescription>
								Design your ad manually or use AI assistance
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid gap-6">
								<Tabs defaultValue="manual" className="w-full">
									<TabsList>
										<TabsTrigger value="manual">Manual</TabsTrigger>
										<TabsTrigger value="with-ai">With AI</TabsTrigger>
									</TabsList>

									<TabsContent value="manual">
										<CreateAd />
									</TabsContent>

									<TabsContent value="with-ai">
										<GenerateAd />
									</TabsContent>
								</Tabs>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="assets">
					<div className="grid gap-4">
						<Card>
							<CardHeader>
								<CardTitle>Images</CardTitle>
								<CardDescription>Manage your campaign images</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex gap-4">
									<Button
										className="flex items-center gap-2 px-4 py-2"
										variant="outline"
									>
										<ImageIcon className="h-5 w-5" />
										Upload Image
									</Button>
									<Button
										className="flex items-center gap-2 px-4 py-2"
										variant="outline"
									>
										<Wand2 className="h-5 w-5" />
										Generate Image with AI
									</Button>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Ad Texts</CardTitle>
								<CardDescription>
									Manage your ad copy and text content
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex gap-4">
									<Button
										className="flex items-center gap-2 px-4 py-2"
										variant="outline"
									>
										<Type className="h-5 w-5" />
										Create New Text Content
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
