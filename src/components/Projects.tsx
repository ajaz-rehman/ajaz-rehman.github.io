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
				Client{" "}
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					Projects
				</span>
			</h2>

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

				<CardContent></CardContent>

				<CardFooter className="justify-center">
					<Link href={activeProject.websiteLink}>Open website</Link>
				</CardFooter>
			</Card>
		</section>
	);
};
