import Link from "./Link";
import { SERVICES, SOCIAL } from "@/data/links";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ_LIST = [
	{
		id: "item-1",
		question: "What is the tech stack of this website?",
		answer: (
			<>
				I used <Link href={SERVICES.React}>React</Link>, <Link href={SERVICES.ShadCN}>ShadCN</Link>,{" "}
				<Link href={SERVICES.TailwindCSS}>Tailwind</Link>, and <Link href={SERVICES.Vite}>Vite</Link> for the
				front-end. I deployed the website using AWS <Link href={SERVICES.AWS_S3}>S3</Link>, and{" "}
				<Link href={SERVICES.AWS_CloudFront}>CloudFront</Link>.
			</>
		),
	},
	{
		id: "item-2",
		question: "What technologies and frameworks do you like to work with?",
		answer: "I prefer using JavaScript and TypeScript for web development. I also like working with React, Node, and Vue. I am also familiar with Python, and Java.",
	},
	{
		id: "item-3",
		question: "How much experience do you have in different technologies?",
		answer: "I have 5 years of experience in JavaScript, 2 years in React, 4 years in Node, 2 years in AWS, and 2 years in Vue.",
	},
	{
		id: "item-4",
		question: "Have you ever built a commercial project from scratch?",
		answer: "I have built 2 SaaS projects, and 2 client projects from start to completion, including development, deployment, and maintenance.",
	},
];

export const FAQ = () => {
	return (
		<section id="faq" className="container py-24 sm:py-32">
			<h2 className="text-3xl md:text-4xl font-bold mb-4">
				Frequently Asked{" "}
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					Questions
				</span>
			</h2>

			<Accordion type="single" collapsible className="w-full AccordionRoot">
				{FAQ_LIST.map(({ question, answer, id }) => (
					<AccordionItem key={id} value={id}>
						<AccordionTrigger className="text-left">{question}</AccordionTrigger>

						<AccordionContent>{answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>

			<h3 className="font-medium mt-4">
				Still have questions? <Link href={SOCIAL.email}>Email me</Link>
			</h3>
		</section>
	);
};
