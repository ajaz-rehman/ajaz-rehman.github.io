import { SOURCE_CODE } from "@/data/links";
import Link from "./Link";
import SocialLinks from "./SocialLinks";

export const Footer = () => {
	return (
		<footer id="footer">
			<hr className="w-11/12 mx-auto" />

			<section className="container py-10 flex flex-col lg:flex-row gap-8 text-center items-center justify-between">
				<SocialLinks />
				<h3>
					Source code is available on <Link href={SOURCE_CODE}>GitHub</Link>.
				</h3>
			</section>
		</footer>
	);
};
