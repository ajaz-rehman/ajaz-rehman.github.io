import { HTMLProps } from "react";

function Link(props: HTMLProps<HTMLAnchorElement>) {
	return <a target="_blank" className="text-primary transition-all border-primary hover:border-b-2" {...props}></a>;
}

export default Link;
