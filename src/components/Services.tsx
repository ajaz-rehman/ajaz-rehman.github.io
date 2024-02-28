import cubeLeg from "@/assets/images/cube-leg.png";
import { ChartIcon, MagnifierIcon, WalletIcon } from "./Icons";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ServiceProps {
	title: string;
	description: string;
	icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
	{
		title: "Front-End Development",
		description:
			"Build beautiful, accessible, responsive, and fast web applications based on designs using the latest web technologies.",
		icon: <ChartIcon />,
	},
	{
		title: "Back-End Development",
		description:
			"Create scalable and secure back-end APIs using modern tools, integrate with third-party apps, and setup webhooks.",
		icon: <WalletIcon />,
	},
	{
		title: "Cloud Deployment",
		description:
			"Deploy your applications on cloud platforms like AWS, GCP, and Azure. I can also manage your DNS, SSL, and CDN.",
		icon: <MagnifierIcon />,
	},
];

export const Services = () => {
	return (
		<section id="services" className="container py-24 sm:py-32">
			<div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
				<div>
					<h2 className="text-3xl md:text-4xl font-bold">
						Client-Centric{" "}
						<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
							Services
						</span>
					</h2>

					<p className="text-muted-foreground text-xl mt-4 mb-8 ">Here's what I can do for you.</p>

					<div className="flex flex-col gap-8">
						{serviceList.map(({ icon, title, description }: ServiceProps) => (
							<Card key={title}>
								<CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
									<div className="mt-1 bg-primary/20 p-1 rounded-2xl">{icon}</div>
									<div>
										<CardTitle>{title}</CardTitle>
										<CardDescription className="text-md mt-2">{description}</CardDescription>
									</div>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>

				<img
					src={cubeLeg}
					className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
					alt="About services"
				/>
			</div>
		</section>
	);
};
