import Link from "./Link";
import { FAQ_LIST } from "@/data/faq";
import { SOCIAL } from "@/data/links";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
				{FAQ_LIST.map(({ question, answer, value }) => (
					<AccordionItem key={value} value={value}>
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
