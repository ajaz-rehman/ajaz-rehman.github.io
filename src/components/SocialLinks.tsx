import { SOCIAL } from "@/data/links";
import { cn } from "@/lib/utils";
import { HTMLProps } from "react";
import { SocialIcon } from "react-social-icons";

function SocialLinks(props: HTMLProps<HTMLDivElement>) {
	return (
		<div {...props} className={cn("flex flex-wrap gap-4", props.className)}>
			{Object.values(SOCIAL).map((link: string) => (
				<SocialIcon key={link} url={link} bgColor="hsl(var(--secondary))" fgColor="hsl(var(--primary))" />
			))}
		</div>
	);
}

export default SocialLinks;
