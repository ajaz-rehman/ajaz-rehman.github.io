import { cn } from "@/lib/utils";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PROJECTS } from "@/data/projects";
import Link from "./Link";

export const Projects = () => {
	const [activeProject, setActiveProject] = useState(PROJECTS[0]);

	return (
		<section id="projects" className="container py-24 sm:py-32 space-y-8">
			<h2 className="text-3xl lg:text-4xl font-bold md:text-center">
				My Recent{" "}
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					Projects
				</span>
			</h2>

			<p className="text-muted-foreground text-xl !mt-4 !mb-0 text-center">
				Here are a few past projects I've worked on.
			</p>

			<div className="flex flex-wrap md:justify-center gap-4">
				{PROJECTS.map(project => (
					<div key={project.company}>
						<Badge
							variant={activeProject.company === project.company ? "default" : "outline"}
							className={cn(
								"text-sm cursor-pointer",
								activeProject === project ? "hover:bg-primary" : "hover:bg-secondary",
							)}
							onClick={() => setActiveProject(project)}
						>
							{project.company}
						</Badge>
					</div>
				))}
			</div>

			<Card key={activeProject.company} className="md:w-1/2 mx-auto">
				<CardHeader>
					<CardTitle>{activeProject.company}</CardTitle>
					<CardDescription className="text-md">{activeProject.companyDescription}</CardDescription>
				</CardHeader>

				<CardContent>
					<img src={activeProject.imageSrc} className="h-auto max-w-full min-h-[50%] rounded-lg border" />
				</CardContent>

				<CardFooter className="justify-center">
					<Link href={activeProject.websiteLink}>Visit website</Link>
				</CardFooter>
			</Card>
		</section>
	);
};
