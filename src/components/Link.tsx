import { cn } from "@/lib/utils";
import { HTMLProps } from "react";

function Link(props: HTMLProps<HTMLAnchorElement>) {
	return (
		<a
			target="_blank"
			href="https://github.com/leoMirandaa"
			{...props}
			className={cn("text-primary transition-all border-primary hover:border-b-2", props.className)}
		></a>
	);
}

export default Link;
