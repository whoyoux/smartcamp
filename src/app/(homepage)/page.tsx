import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				{/* Background Pattern */}
				<div className="absolute inset-0 bg-grid-white/[0.01] bg-grid-pattern" />

				{/* Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-gradient" />

				{/* Animated Circles */}
				<div className="absolute inset-0">
					<div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob" />
					<div className="absolute top-1/3 right-1/4 w-48 h-48 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000" />
					<div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" />
				</div>

				<div className="container mx-auto px-4 py-32 relative">
					<div className="max-w-3xl mx-auto text-center">
						{/* Floating Elements */}
						<div className="absolute -left-8 -top-8 w-12 h-12 bg-purple-500/5 rounded-full animate-float" />
						<div className="absolute -right-8 -bottom-8 w-12 h-12 bg-blue-500/5 rounded-full animate-float animation-delay-2000" />

						<h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
							Welcome to SmartCamp
						</h1>
						<p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
							Create and manage your marketing campaigns with ease. Streamline
							your workflow and boost your results.
						</p>
						<div className="flex items-center justify-center gap-2 mb-8">
							<span className="text-sm text-gray-500">Live</span>
							<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
							<span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse animation-delay-1000" />
							<span className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse animation-delay-2000" />
						</div>
						<Link href="/auth/login">
							<Button size="lg" className="px-8 relative overflow-hidden group">
								<span className="relative z-10">Get Started</span>
								<div className="absolute inset-0 bg-gradient-to-r from-purple-500/80 to-blue-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-16 px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">Features</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<Card>
							<CardHeader>
								<CardTitle>Campaign Management</CardTitle>
								<CardDescription>
									Create and manage multiple campaigns with ease
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									Organize your campaigns efficiently with our intuitive
									dashboard
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Real-time Analytics</CardTitle>
								<CardDescription>
									Track your campaign performance in real-time
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									Get detailed insights and analytics for all your campaigns
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Team Collaboration</CardTitle>
								<CardDescription>
									Work together with your team seamlessly
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									Share campaigns and collaborate with team members in real-time
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Statistics Section */}
			<section className="py-16 px-4 bg-muted/30">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">
						By the Numbers
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{ number: "10K+", label: "Active Users" },
							{ number: "50K+", label: "Campaigns Created" },
							{ number: "99.9%", label: "Uptime" },
							{ number: "24/7", label: "Support" },
						].map((stat, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<Card key={index} className="text-center py-8">
								<CardContent>
									<p className="text-4xl font-bold mb-2">{stat.number}</p>
									<p className="text-muted-foreground">{stat.label}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-16 px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">
						What Our Users Say
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{[
							{
								name: "Sarah Johnson",
								role: "Marketing Director",
								avatar: "SJ",
								content:
									"SmartCamp has revolutionized how we manage our marketing campaigns. The interface is intuitive and the analytics are incredibly detailed.",
							},
							{
								name: "Michael Chen",
								role: "Campaign Manager",
								avatar: "MC",
								content:
									"The team collaboration features are outstanding. We've seen a 40% increase in campaign efficiency since switching to SmartCamp.",
							},
						].map((testimonial, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<Card key={index} className="relative">
								<CardHeader>
									<div className="flex items-center gap-4">
										<Avatar>
											<AvatarFallback>{testimonial.avatar}</AvatarFallback>
										</Avatar>
										<div>
											<CardTitle className="text-lg">
												{testimonial.name}
											</CardTitle>
											<CardDescription>{testimonial.role}</CardDescription>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground">{testimonial.content}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section className="py-16 px-4 bg-muted/30">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">
						Simple, Transparent Pricing
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								title: "Starter",
								price: "$29",
								description: "Perfect for small teams",
								features: [
									"Up to 5 team members",
									"10 active campaigns",
									"Basic analytics",
									"Email support",
								],
							},
							{
								title: "Professional",
								price: "$79",
								description: "For growing businesses",
								features: [
									"Up to 15 team members",
									"Unlimited campaigns",
									"Advanced analytics",
									"Priority support",
								],
								highlighted: true,
							},
							{
								title: "Enterprise",
								price: "Custom",
								description: "For large organizations",
								features: [
									"Unlimited team members",
									"Unlimited campaigns",
									"Custom analytics",
									"24/7 dedicated support",
								],
							},
						].map((plan, index) => (
							<Card
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								className={`relative ${
									plan.highlighted
										? "border-2 border-primary shadow-lg scale-105"
										: ""
								}`}
							>
								<CardHeader>
									<CardTitle>{plan.title}</CardTitle>
									<CardDescription>{plan.description}</CardDescription>
									<p className="text-3xl font-bold mt-4">{plan.price}</p>
									{plan.highlighted && (
										<span className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
											Popular
										</span>
									)}
								</CardHeader>
								<CardContent>
									<ul className="space-y-3">
										{plan.features.map((feature, i) => (
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											<li key={i} className="flex items-center gap-2">
												{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
												<svg
													className="w-4 h-4 text-green-500"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M5 13l4 4L19 7"
													/>
												</svg>
												{feature}
											</li>
										))}
									</ul>
								</CardContent>
								<CardFooter>
									<Button
										className="w-full"
										variant={plan.highlighted ? "default" : "outline"}
									>
										Get Started
									</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-16 px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">
						Frequently Asked Questions
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{[
							{
								question: "What is SmartCamp?",
								answer:
									"SmartCamp is a campaign management platform designed to help businesses manage their marketing campaigns more efficiently.",
							},
							{
								question: "How do I get started with SmartCamp?",
								answer:
									"To get started with SmartCamp, simply sign up for an account and follow the onboarding process. You can also contact our support team for assistance.",
							},
							{
								question: "What features does SmartCamp offer?",
								answer:
									"SmartCamp offers a range of features, including campaign management, real-time analytics, team collaboration, and more.",
							},
							{
								question: "Is SmartCamp secure?",
								answer:
									"Yes, SmartCamp takes security very seriously. We use industry-standard encryption and security protocols to protect your data.",
							},
						].map((faq, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<Card key={index}>
								<CardHeader>
									<CardTitle>{faq.question}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground">{faq.answer}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-4 text-center">
				<div className="max-w-3xl mx-auto">
					<h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
					<p className="text-xl text-muted-foreground mb-8">
						Join thousands of users who are already managing their campaigns
						with SmartCamp
					</p>
					<Link href="/auth/register">
						<Button size="lg" className="px-8">
							Create Your Account
						</Button>
					</Link>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-muted/30 border-t">
				<div className="max-w-6xl mx-auto px-4 py-12">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{/* Company Info */}
						<div className="space-y-4">
							<h3 className="text-lg font-semibold">SmartCamp</h3>
							<p className="text-sm text-muted-foreground">
								Making campaign management smarter and more efficient for teams
								worldwide.
							</p>
							<div className="flex space-x-4">
								{/* Social Media Links */}

								<Link
									href="#"
									className="text-muted-foreground hover:text-primary"
								>
									<svg
										className="h-5 w-5"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
									</svg>
								</Link>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary"
								>
									<svg
										className="h-5 w-5"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
											clipRule="evenodd"
										/>
									</svg>
								</Link>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary"
								>
									<svg
										className="h-5 w-5"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
											clipRule="evenodd"
										/>
									</svg>
								</Link>
							</div>
						</div>

						{/* Product Links */}
						<div>
							<h3 className="text-lg font-semibold mb-4">Product</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="/features"
										className="text-sm text-muted-foreground hover:text-primary"
									>
										Features
									</Link>
								</li>
								<li>
									<Link
										href="/pricing"
										className="text-sm text-muted-foreground hover:text-primary"
									>
										Pricing
									</Link>
								</li>
								<li>
									<Link
										href="/integrations"
										className="text-sm text-muted-foreground hover:text-primary"
									>
										Integrations
									</Link>
								</li>
								<li>
									<Link
										href="/changelog"
										className="text-sm text-muted-foreground hover:text-primary"
									>
										Changelog
									</Link>
								</li>
							</ul>
						</div>

						{/* Company Links */}
						<div>
							<h3 className="text-lg font-semibold mb-4">Company</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="/about"
										className="text-sm text-muted-foreground hover:text-primary"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										href="/blog"
										className="text-sm text-muted-foreground hover:text-primary"
									>
										Blog
									</Link>
								</li>
								<li>
									<Link
										href="/careers"
										className="text-sm text-muted-foreground hover:text-primary"
									>
										Careers
									</Link>
								</li>
								<li>
									<Link
										href="/contact"
										className="text-sm text-muted-foreground hover:text-primary"
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>

						{/* Support & Legal */}
						<div>
							<h3 className="text-lg font-semibold mb-4">Support & Legal</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="/help"
										className="text-sm text-muted-foreground hover:text-primary"
									>
										Help Center
									</Link>
								</li>
								<li>
									<Link
										href="/privacy"
										className="text-sm text-muted-foreground hover:text-primary"
									>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										href="/terms"
										className="text-sm text-muted-foreground hover:text-primary"
									>
										Terms of Service
									</Link>
								</li>
								<li>
									<Link
										href="/gdpr"
										className="text-sm text-muted-foreground hover:text-primary"
									>
										GDPR Compliance
									</Link>
								</li>
							</ul>
						</div>
					</div>

					{/* Bottom Footer */}
					<div className="border-t mt-12 pt-8">
						<div className="flex flex-col md:flex-row justify-between items-center">
							<p className="text-sm text-muted-foreground">
								{new Date().getFullYear()} SmartCamp. All rights reserved.
							</p>
							<div className="flex space-x-4 mt-4 md:mt-0">
								<Link
									href="/terms"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									Terms
								</Link>
								<Link
									href="/privacy"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									Privacy
								</Link>
								<Link
									href="/cookies"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									Cookies
								</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
