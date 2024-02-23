import Link from "./Link";
import { SERVICES, SOCIAL } from "@/data/links";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ_LIST = [
	{
		id: "item-1",
		question: "What is the tech stack of this portfolio website?",
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
		answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis necessitatibus maxime quis ipsa vitae cumque quo?",
	},
	{
		id: "item-3",
		question: "How much experience do I have in different technologies?",
		answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
	},
	{
		id: "item-4",
		question: "Have you ever built a project from scratch?",
		answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
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
