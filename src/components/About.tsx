import { Statistics } from "./Statistics";
import pilot from "@/assets/images/pilot.png";

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
								I'm Ajaz, a passionate software engineer specializing in full-stack web development with
								expertise in JavaScript, TypeScript, React, Vue, and Node. Over the years, I've had the
								privilege of working in diverse projects, from architecting scalable APIs to crafting
								intuitive UI libraries and deploying solutions on the cloud.
								<br />
								<br />
								I thrive on architecting efficient solutions and optimizing performance to deliver
								seamless user experiences. My commitment to staying abreast of industry trends and
								continuously learning has led to successful project deliveries and garnered recognition
								from my peers.
								<br />
								<br />
								Whether collaborating with cross-functional teams or leading independent development
								efforts, I consistently deliver high-quality code and solutions that surpass
								expectations.
								<br />
								<br />
								Let's connect and explore how we can bring your next project to life!
							</p>
						</div>

						<Statistics />
					</div>
				</div>
			</div>
		</section>
	);
};
