import pilot from "../assets/pilot.png";
import { Statistics } from "./Statistics";

export const About = () => {
	return (
		<section id="about" className="container py-24 sm:py-32">
			<div className="bg-muted/50 border rounded-lg py-12">
				<div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
					<img src={pilot} alt="Illustration" className="w-[300px] object-contain rounded-lg self-center" />
					<div className="bg-green-0 flex flex-col justify-between">
						<div className="pb-6">
							<h2 className="text-3xl md:text-4xl font-bold">
								<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
									About{" "}
								</span>
								Me
							</h2>
							<p className="text-xl text-muted-foreground mt-4">
								I'm a software engineer specializing in full-stack web development using JavaScript,
								TypeScript, React, Vue, and Node. I've had the privilege of working on diverse projects,
								from developing scalable APIs, crafting UI libraries, refactoring code, building SaaS
								services, integrating 3rd party libraries, fixing issues, migrating databases to
								deploying projects on the cloud.
								<br />
								<br />I love to architect efficient solutions and optimize performance. My dedication to
								continuous learning and keeping up with industry trends has led to successful project
								deliveries and recognition from peers. Whether collaborating with cross-functional teams
								or leading development efforts independently, I consistently deliver high-quality code
								and solutions that exceed expectations.
							</p>
						</div>

						<Statistics />
					</div>
				</div>
			</div>
		</section>
	);
};
