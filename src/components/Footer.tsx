import { SERVICES } from "@/data/links";
import Link from "./Link";
import SocialLinks from "./SocialLinks";

export const Footer = () => {
	return (
		<footer id="footer">
			<hr className="w-11/12 mx-auto" />

			<section className="container py-14 flex flex-col lg:flex-row gap-8 text-center items-center justify-between">
				<SocialLinks />
				<h3>
					Built with <Link href={SERVICES.Vite}>Vite</Link>, and{" "}
					<Link href={SERVICES.TailwindCSS}>TailwindCSS</Link>. Deployed with{" "}
					<Link href={SERVICES.AWS_S3}>AWS S3</Link> and{" "}
					<Link href={SERVICES.AWS_CloudFront}>CloudFront</Link>.
				</h3>
			</section>
		</footer>
	);
};
