export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="max-w-screen-xl mx-auto px-2">{children}</div>;
}
