import Link from "./Link";
import { TESTIMONIALS } from "@/data/testimonials";
import { buttonVariants } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const Testimonials = () => {
	const socialIcon = (iconName: string) => {
		switch (iconName) {
			case "Linkedin":
				return <Linkedin size="20" />;

			case "Facebook":
				return <Facebook size="20" />;

			case "Instagram":
				return <Instagram size="20" />;
		}
	};

	return (
		<section id="testimonials" className="container py-24 sm:py-32">
			<h2 className="text-3xl md:text-4xl font-bold">
				Some{" "}
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					Testimonials
				</span>
			</h2>

			<p className="mt-4 mb-10 text-xl text-muted-foreground">Here's what my colleagues have to say about me.</p>

			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
				{TESTIMONIALS.map(({ imageUrl, name, position, socialNetworks, text }) => (
					<Card key={name} className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center">
						<CardHeader className="mt-8 flex justify-center items-center pb-2">
							<img
								src={imageUrl}
								alt={`${name} ${position}`}
								className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
							/>
							<CardTitle className="text-center">{name}</CardTitle>
							<CardDescription className="text-primary">{position}</CardDescription>
						</CardHeader>

						<CardContent className="text-center pb-2">
							<p>{text}</p>
						</CardContent>

						<CardFooter>
							{socialNetworks.map(({ name, url }) => (
								<div key={name}>
									<Link
										href={url}
										className={buttonVariants({
											variant: "ghost",
											size: "sm",
										})}
									>
										<span className="sr-only">{name} icon</span>
										{socialIcon(name)}
									</Link>
								</div>
							))}
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};
