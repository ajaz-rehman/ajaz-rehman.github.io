import { SOURCE_CODE, WEBSITE } from "@/data/links";
import Link from "./Link";

export const Footer = () => {
	return (
		<footer id="footer">
			<hr className="w-11/12 mx-auto" />

			<section className="container py-10 text-center">
				<h3>
					Built by{" "}
					<Link target="_self" href={WEBSITE}>
						Ajaz Ur Rehman
					</Link>
					. The source code is available on <Link href={SOURCE_CODE}>GitHub</Link>.
				</h3>
			</section>
		</footer>
	);
};
